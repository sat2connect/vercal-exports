import { useState } from 'react'
import { PRODUCTS } from '../data/content.js'
import { ArrowRightIcon, CheckCircleIcon, ChevronDownIcon, SpinnerIcon } from './Icons.jsx'

const EMPTY = {
  product: PRODUCTS[0].name,
  quantity: '',
  destinationPort: '',
  companyName: '',
  email: '',
  message: '',
  // Honeypot: real users never see or fill this; bots usually do.
  // Code.gs treats a filled `botcheck` as spam and silently drops it.
  botcheck: '',
}

// Google Apps Script web app that appends each lead to the Sheet.
// Anything that is not a real deployment URL counts as "not configured", so
// the form shows a setup message instead of posting into the void.
const rawEndpoint = import.meta.env.VITE_SHEETS_ENDPOINT
const ENDPOINT = /^https:\/\/script\.google\.com\/.+\/exec$/.test(rawEndpoint || '') ? rawEndpoint : ''

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (!values.quantity.trim()) errors.quantity = 'Please tell us the quantity you need.'
  if (!values.destinationPort.trim()) errors.destinationPort = 'Please enter a destination port.'
  if (!values.companyName.trim()) errors.companyName = 'Please enter your company name.'
  if (!values.email.trim()) errors.email = 'Please enter your business email.'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'That email address looks incomplete.'
  return errors
}

const fieldClass =
  'w-full rounded-lg border border-brand-200 bg-cream-50 px-3.5 py-2.5 text-[13.5px] text-brand-900 placeholder:text-brand-800/35 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

function Field({ label, error, htmlFor, children }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[12.5px] font-medium text-brand-800">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-[11.5px] font-medium text-red-700" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default function QuoteForm() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [serverError, setServerError] = useState('')

  const update = (name) => (event) => {
    setValues((v) => ({ ...v, [name]: event.target.value }))
    setErrors((e) => (e[name] ? { ...e, [name]: undefined } : e))
  }

  async function handleSubmit(event) {
    event.preventDefault()

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    if (!ENDPOINT) {
      setStatus('error')
      setServerError('Storage is not configured yet: set VITE_SHEETS_ENDPOINT in .env and restart the dev server.')
      return
    }

    setStatus('sending')
    setServerError('')

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        // text/plain keeps this a CORS "simple request". Sending
        // application/json would trigger a preflight OPTIONS call, which
        // Apps Script web apps cannot answer. The script parses the body
        // as JSON regardless of this header.
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({
          product: values.product,
          quantity: values.quantity,
          destinationPort: values.destinationPort,
          companyName: values.companyName,
          email: values.email,
          message: values.message,
          botcheck: values.botcheck,
        }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'We could not record your enquiry. Please try again.')
      }

      setStatus('sent')
      setValues(EMPTY)
    } catch (err) {
      setStatus('error')
      setServerError(err.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="bg-cream-100 py-16 lg:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] lg:gap-14">
        <div className="reveal lg:pt-6">
          <p className="eyebrow text-brand-600">Request a B2B Quote</p>
          <h2 className="mt-3 font-display text-[32px] leading-tight tracking-tight text-brand-900 sm:text-[40px]">
            Let&rsquo;s Work Together
          </h2>
          <p className="mt-4 max-w-xs text-[14px] leading-relaxed text-brand-800/70">
            Tell us your requirements and our export team will get back to you shortly.
          </p>
        </div>

        <div className="reveal rounded-2xl bg-brand-50/70 p-6 ring-1 ring-brand-100 sm:p-8">
          {status === 'sent' ? (
            <div className="flex flex-col items-center gap-4 py-10 text-center" role="status">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-100 text-brand-600">
                <CheckCircleIcon className="h-7 w-7" />
              </span>
              <h3 className="font-display text-[24px] text-brand-900">Enquiry sent</h3>
              <p className="max-w-sm text-[13.5px] leading-relaxed text-brand-800/70">
                Thank you. Your enquiry has reached our export team and we will reply to your business email shortly.
              </p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-2 text-[13px] font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-600"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-3">
                <Field label="Select Product" htmlFor="product">
                  <div className="relative">
                    <select
                      id="product"
                      name="product"
                      value={values.product}
                      onChange={update('product')}
                      className={`${fieldClass} appearance-none pr-9`}
                    >
                      {PRODUCTS.map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                      <option value="Both products">Both products</option>
                      <option value="Other / not sure yet">Other / not sure yet</option>
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-brand-700" />
                  </div>
                </Field>

                <Field label="Quantity Required" htmlFor="quantity" error={errors.quantity}>
                  <input
                    id="quantity"
                    name="quantity"
                    type="text"
                    value={values.quantity}
                    onChange={update('quantity')}
                    placeholder="e.g. 1000 kg"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.quantity)}
                  />
                </Field>

                <Field label="Destination Port" htmlFor="destinationPort" error={errors.destinationPort}>
                  <input
                    id="destinationPort"
                    name="destinationPort"
                    type="text"
                    value={values.destinationPort}
                    onChange={update('destinationPort')}
                    placeholder="e.g. Le Havre, France"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.destinationPort)}
                  />
                </Field>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <Field label="Company Name" htmlFor="companyName" error={errors.companyName}>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    autoComplete="organization"
                    value={values.companyName}
                    onChange={update('companyName')}
                    placeholder="Your company name"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.companyName)}
                  />
                </Field>

                <Field label="Business Email" htmlFor="email" error={errors.email}>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={update('email')}
                    placeholder="you@company.com"
                    className={fieldClass}
                    aria-invalid={Boolean(errors.email)}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field label="Message (optional)" htmlFor="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={values.message}
                    onChange={update('message')}
                    placeholder="Specifications, packaging, target price, delivery timeline..."
                    className={`${fieldClass} resize-y`}
                  />
                </Field>
              </div>

              {/* Honeypot — visually hidden, never announced to assistive tech. */}
              <div className="absolute h-0 w-0 overflow-hidden" aria-hidden>
                <label htmlFor="botcheck">Website</label>
                <input
                  id="botcheck"
                  name="botcheck"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={values.botcheck}
                  onChange={update('botcheck')}
                />
              </div>

              <div className="mt-7 flex flex-wrap items-center justify-end gap-4">
                {status === 'error' && (
                  <p className="mr-auto text-[12.5px] font-medium text-red-700" role="alert">
                    {serverError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group inline-flex items-center gap-2 rounded-lg bg-brand-800 px-7 py-3.5 text-[13.5px] font-semibold text-cream-50 shadow-sm transition-all hover:bg-brand-700 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? (
                    <>
                      Sending
                      <SpinnerIcon className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Send Enquiry
                      <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
