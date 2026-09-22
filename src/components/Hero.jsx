import Figure from './Figure.jsx'
import { ArrowRightIcon, DocumentIcon, IndiaFlagIcon, LeafIcon } from './Icons.jsx'

const badges = [
  { icon: <IndiaFlagIcon className="h-4 w-6 rounded-[2px] shadow-sm" />, label: 'India → France' },
  { icon: <LeafIcon className="h-4 w-4 text-brand-600" />, label: 'B2B Supply' },
  { icon: <DocumentIcon className="h-4 w-4 text-brand-600" />, label: 'Export Documentation' },
]

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream-100">
      {/* Soft radial wash behind the copy column */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[520px] w-[520px] rounded-full bg-brand-200/40 blur-3xl"
      />

      <div className="container-x relative grid items-center gap-10 py-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-8 lg:py-20">
        {/* ---------- Copy ---------- */}
        <div className="reveal max-w-xl">
          <p className="eyebrow text-brand-600">India to the World</p>

          <h1 className="mt-4 font-display text-[38px] leading-[1.08] tracking-tight text-brand-900 sm:text-[46px] lg:text-[50px]">
            Export-Ready Indian
            <br />
            Agricultural Products
          </h1>

          <p className="mt-5 font-display text-[22px] leading-snug text-brand-800 sm:text-[26px]">
            Moringa Powder &amp; Coir Pith for international B2B buyers
          </p>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-brand-800/75">
            Natural products. Verified quality. Reliable supply. From India to France and across the globe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand-800 px-6 py-3.5 text-sm font-semibold text-cream-50 shadow-sm transition-all hover:bg-brand-700 hover:shadow-lg"
            >
              Request a Quote
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-lg border border-brand-300 bg-cream-50 px-6 py-3.5 text-sm font-semibold text-brand-800 transition-all hover:border-brand-500 hover:bg-white"
            >
              View Products
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3">
            {badges.map((b) => (
              <li key={b.label} className="flex items-center gap-2 text-[13px] font-medium text-brand-800/80">
                {b.icon}
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- Split product visual ---------- */}
        <div className="reveal relative">
          <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-[0_24px_60px_-28px_rgba(20,48,29,0.55)] sm:h-[400px] lg:h-[460px]">
            {/* Left panel: moringa */}
            <Figure
              src="/images/hero-moringa.jpg"
              alt="Bowl of fresh moringa powder surrounded by moringa leaves"
              tone="green"
              className="absolute inset-0"
            />

            {/* Right panel: coir pith, clipped on a diagonal like the reference layout */}
            <div
              className="absolute inset-0"
              style={{ clipPath: 'polygon(58% 0, 100% 0, 100% 100%, 40% 100%)' }}
            >
              <Figure
                src="/images/hero-coir.jpg"
                alt="Stacked coir pith blocks and loose coco peat"
                tone="clay"
                className="h-full w-full"
              />
            </div>

            {/* Thin light seam along the diagonal */}
            <div
              aria-hidden
              className="absolute inset-0 bg-cream-50/90"
              style={{ clipPath: 'polygon(58% 0, 58.7% 0, 40.7% 100%, 40% 100%)' }}
            />

            {/* Hand-written style callout, as in the reference */}
            <p className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-center font-display text-[17px] italic leading-tight text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)] sm:block">
              Sustainable Products
              <br />
              Stronger Tomorrows
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
