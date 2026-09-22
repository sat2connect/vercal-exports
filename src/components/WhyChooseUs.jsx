import { ADVANTAGES } from '../data/content.js'
import { DiamondIcon, DocumentIcon, SproutIcon, TruckIcon, UsersIcon } from './Icons.jsx'

const ICONS = {
  diamond: DiamondIcon,
  document: DocumentIcon,
  users: UsersIcon,
  truck: TruckIcon,
  sprout: SproutIcon,
}

export default function WhyChooseUs() {
  return (
    <section id="about" className="bg-cream-100 pb-16 lg:pb-20">
      <div className="container-x">
        <div className="reveal">
          <p className="eyebrow text-brand-600">Why Choose Us?</p>
          <h2 className="mt-3 font-display text-[32px] leading-tight tracking-tight text-brand-900 sm:text-[40px]">
            A Reliable Export Partner from India
          </h2>
        </div>

        <ul className="mt-10 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-0">
          {ADVANTAGES.map((item, i) => {
            const Icon = ICONS[item.icon]
            return (
              <li
                key={item.title}
                className={`reveal lg:px-6 ${i > 0 ? 'lg:border-l lg:border-brand-200' : ''}`}
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="flex items-start gap-3">
                  <Icon className="h-8 w-8 shrink-0 text-brand-600" />
                  <div>
                    <h3 className="text-[14.5px] font-semibold leading-tight text-brand-900">{item.title}</h3>
                    <p className="mt-1.5 text-[13px] leading-relaxed text-brand-800/70">{item.body}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
