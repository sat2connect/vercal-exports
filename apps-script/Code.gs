/**
 * Vercal Exports - lead capture for the landing page enquiry form.
 *
 * This runs on Google's servers, not in your project. It receives each form
 * submission and appends it as a row to the Sheet it is bound to.
 *
 * SETUP
 * -----
 * 1.  Create a Google Sheet (sheets.new).
 * 2.  Extensions > Apps Script. Delete the sample code, paste this whole file,
 *     then Save.
 * 3.  Deploy > New deployment > gear icon > Web app.
 *         Description:     Vercal leads
 *         Execute as:      Me
 *         Who has access:  Anyone          <-- required, see note below
 * 4.  Click Deploy and authorise. Google warns the app is unverified: that is
 *     normal for a script you wrote yourself. Choose Advanced > Go to ...
 * 5.  Copy the Web app URL (it ends in /exec) into the site's .env file as
 *     VITE_SHEETS_ENDPOINT, then restart the dev server.
 *
 * "Who has access: Anyone" lets the public form POST to it. It does NOT share
 * your Sheet - visitors can only append through this script, never read.
 *
 * AFTER EDITING THIS FILE you must redeploy, or the old code keeps serving:
 * Deploy > Manage deployments > pencil icon > Version: New version > Deploy.
 */

/** Tab the leads are written to. Created automatically if missing. */
var SHEET_NAME = 'Leads';

/**
 * Optional: also email every lead as it arrives.
 * Put your address here (e.g. 'sat2connect@gmail.com'), or leave it as ''
 * to only record leads in the Sheet.
 */
var NOTIFY_EMAIL = '';

var HEADERS = [
  'Timestamp',
  'Product',
  'Quantity',
  'Destination Port',
  'Company Name',
  'Business Email',
  'Message',
];

function doPost(e) {
  var lock = LockService.getScriptLock();

  try {
    // Serialise appends so two submissions cannot land on the same row.
    lock.waitLock(20000);

    if (!e || !e.postData || !e.postData.contents) {
      return json({ success: false, message: 'Empty request body.' });
    }

    var data = JSON.parse(e.postData.contents);

    // Honeypot. Report success so bots do not learn they were filtered out.
    if (clean(data.botcheck, 100)) {
      return json({ success: true });
    }

    var required = ['quantity', 'destinationPort', 'companyName', 'email'];
    var missing = required.filter(function (key) {
      return !clean(data[key], 200);
    });

    if (missing.length > 0) {
      return json({ success: false, message: 'Missing required fields: ' + missing.join(', ') });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(clean(data.email, 200))) {
      return json({ success: false, message: 'Invalid email address.' });
    }

    getSheet().appendRow([
      new Date(),
      clean(data.product, 120),
      clean(data.quantity, 120),
      clean(data.destinationPort, 160),
      clean(data.companyName, 160),
      clean(data.email, 200),
      clean(data.message, 4000),
    ]);

    if (NOTIFY_EMAIL) {
      notify(data);
    }

    return json({ success: true });
  } catch (err) {
    return json({ success: false, message: String(err && err.message ? err.message : err) });
  } finally {
    try {
      lock.releaseLock();
    } catch (ignored) {
      /* lock was never acquired */
    }
  }
}

/** Open the deployment URL in a browser to confirm it is live. */
function doGet() {
  return json({ success: true, message: 'Vercal Exports lead endpoint is running.' });
}

function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    sheet.getRange(1, 1, 1, HEADERS.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(1, 160);
    sheet.setColumnWidth(7, 320);
  }

  return sheet;
}

/** Every response goes back as JSON so the form can read `success`. */
function json(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(ContentService.MimeType.JSON);
}

function clean(value, max) {
  return String(value === null || value === undefined ? '' : value)
    .trim()
    .slice(0, max);
}

function notify(data) {
  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    replyTo: clean(data.email, 200),
    subject: 'New B2B enquiry - ' + clean(data.product, 80) + ' - ' + clean(data.companyName, 80),
    body: [
      'New enquiry from the Vercal Exports website',
      '',
      'Product:          ' + clean(data.product, 120),
      'Quantity:         ' + clean(data.quantity, 120),
      'Destination port: ' + clean(data.destinationPort, 160),
      'Company:          ' + clean(data.companyName, 160),
      'Business email:   ' + clean(data.email, 200),
      '',
      'Message:',
      clean(data.message, 4000) || '(none)',
    ].join('\n'),
  });
}
