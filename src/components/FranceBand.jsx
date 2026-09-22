import Figure from './Figure.jsx'
import { FranceFlagIcon, IndiaFlagIcon, ShipIcon } from './Icons.jsx'

export default function FranceBand() {
  return (
    <section aria-labelledby="france-heading" className="relative overflow-hidden">
      {/* Two landmark photographs bookend the band; the centre stays readable. */}
      <div aria-hidden className="absolute inset-0 grid grid-cols-2">
        <Figure src="/images/india-gate.jpg" alt="" tone="sky" className="h-full w-full" />
        <Figure src="/images/paris.jpg" alt="" tone="sky" className="h-full w-full" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(250,248,241,0.55)_0%,rgba(250,248,241,0.96)_28%,rgba(250,248,241,0.96)_72%,rgba(250,248,241,0.55)_100%)]"
      />

      <div className="container-x relative py-14 lg:py-16">
        <div className="reveal mx-auto max-w-2xl text-center">
          <p className="eyebrow text-brand-600">Exporting to France</p>
          <h2
            id="france-heading"
            className="mt-3 font-display text-[30px] leading-tight tracking-tight text-brand-900 sm:text-[38px]"
          >
            Connecting India to France
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[14px] leading-relaxed text-brand-800/75">
            We supply Moringa Powder and Coir Pith to importers, distributors and businesses across France. Reliable
            products. Global standards.
          </p>

          {/* Shipping lane: two flags joined by a dotted route with a sailing vessel */}
          <div className="mt-9 flex items-center justify-center gap-4 sm:gap-6">
            <div className="flex flex-col items-center gap-2">
              <IndiaFlagIcon className="h-9 w-14 rounded shadow-md" />
              <span className="text-[12px] font-semibold text-brand-900">India</span>
            </div>

            <div className="relative h-10 flex-1 max-w-[260px]">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 260 40" fill="none" aria-hidden>
                <path
                  d="M4 26 C 70 4, 190 4, 256 26"
                  stroke="currentColor"
                  className="text-brand-400"
                  strokeWidth="1.5"
                  strokeDasharray="5 6"
                  strokeLinecap="round"
                />
              </svg>
              <ShipIcon
                className="animate-sail absolute left-[22%] top-0 h-6 w-6 text-brand-800"
                style={{ '--sail-distance': '110px' }}
              />
            </div>

            <div className="flex flex-col items-center gap-2">
              <FranceFlagIcon className="h-9 w-14 rounded shadow-md" />
              <span className="text-[12px] font-semibold text-brand-900">France</span>
            </div>
          </div>

          <p className="mt-8 text-[13px] font-medium leading-relaxed text-brand-800/70">
            Natural Products. Global Opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
