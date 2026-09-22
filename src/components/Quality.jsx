import { CERTIFICATIONS } from '../data/content.js'
import { ArrowRightIcon } from './Icons.jsx'

/** Certification seal: a ring-bordered badge with the scheme code inside. */
function Seal({ code }) {
  return (
    <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-brand-300 bg-cream-50 text-brand-700 shadow-[0_6px_18px_-10px_rgba(20,48,29,0.6)] transition-all duration-300 group-hover:border-brand-600 group-hover:shadow-[0_10px_26px_-12px_rgba(20,48,29,0.7)]">
      <span className="grid h-[54px] w-[54px] place-items-center rounded-full border border-dashed border-brand-200 text-[11px] font-bold tracking-tight">
        {code}
      </span>
    </span>
  )
}

export default function Quality() {
  return (
    <section id="quality" className="bg-cream-100 py-16 lg:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] lg:items-center lg:gap-14">
        <div className="reveal">
          <p className="eyebrow text-brand-600">Quality &amp; Compliance</p>
          <h2 className="mt-3 font-display text-[32px] leading-tight tracking-tight text-brand-900 sm:text-[40px]">
            Quality You Can Verify
          </h2>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-brand-800/70">
            We meet international standards and provide the necessary documentation for a smooth import process.
          </p>
          <a
            href="#contact"
            className="group mt-7 inline-flex items-center gap-2 rounded-lg bg-brand-800 px-5 py-3 text-[13.5px] font-semibold text-cream-50 transition-all hover:bg-brand-700"
          >
            View Our Certifications
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <ul className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-5">
          {CERTIFICATIONS.map((cert, i) => (
            <li
              key={cert.code}
              className="reveal group flex flex-col items-center text-center"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Seal code={cert.code} />
              <span className="mt-3 text-[13px] font-semibold text-brand-900">{cert.name}</span>
              <span className="mt-0.5 text-[12px] text-brand-800/65">{cert.caption}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
