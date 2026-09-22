import { TRUST_ITEMS } from '../data/content.js'
import { AwardIcon, BoxIcon, DocumentIcon, LeafIcon, ShipIcon } from './Icons.jsx'

const ICONS = {
  leaf: LeafIcon,
  award: AwardIcon,
  document: DocumentIcon,
  ship: ShipIcon,
  box: BoxIcon,
}

export default function TrustBar() {
  return (
    <section aria-label="Export capabilities" className="border-y border-brand-100 bg-cream-200">
      <div className="container-x py-7">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-5 lg:gap-0">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <li
                key={item.title}
                className={`reveal flex items-center gap-3 lg:justify-center lg:px-4 ${
                  i > 0 ? 'lg:border-l lg:border-brand-200' : ''
                }`}
                style={{ animationDelay: `${i * 70}ms` }}
              >
                <Icon className="h-7 w-7 shrink-0 text-brand-600" />
                <span className="leading-tight">
                  <span className="block text-[13.5px] font-semibold text-brand-900">{item.title}</span>
                  <span className="block text-[12.5px] text-brand-800/65">{item.subtitle}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
