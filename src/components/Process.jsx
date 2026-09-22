import { PROCESS_STEPS } from '../data/content.js'
import Figure from './Figure.jsx'
import { ArrowRightIcon } from './Icons.jsx'

export default function Process() {
  return (
    <section id="process" className="border-y border-brand-100 bg-brand-50/60 py-16 lg:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)] lg:items-center lg:gap-12">
        <div className="reveal">
          <p className="eyebrow text-brand-600">Our Process</p>
          <h2 className="mt-3 font-display text-[32px] leading-[1.15] tracking-tight text-brand-900 sm:text-[38px]">
            From India to
            <br className="hidden sm:block" /> Your Supply Chain
          </h2>
          <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-brand-800/70">
            A transparent and reliable journey from source to shipment.
          </p>
        </div>

        <ol className="grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:flex lg:items-start lg:justify-between lg:gap-0">
          {PROCESS_STEPS.map((step, i) => (
            <li
              key={step.step}
              className="reveal flex items-start lg:flex-1"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <div className="flex flex-1 flex-col items-center text-center">
                <Figure
                  src={step.image}
                  alt={`${step.title} stage`}
                  tone={step.tone}
                  className="h-20 w-20 rounded-full ring-4 ring-cream-100 shadow-[0_10px_24px_-12px_rgba(20,48,29,0.5)]"
                />
                <h3 className="mt-4 text-[14px] font-semibold text-brand-900">
                  {step.step}. {step.title}
                </h3>
                <p className="mt-1.5 max-w-[150px] text-[12.5px] leading-relaxed text-brand-800/70">{step.body}</p>
              </div>

              {/* Connector arrow between steps (desktop only) */}
              {i < PROCESS_STEPS.length - 1 && (
                <ArrowRightIcon className="mt-8 hidden h-5 w-5 shrink-0 text-brand-400 lg:block" aria-hidden />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
