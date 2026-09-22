import { PRODUCTS } from '../data/content.js'
import Figure from './Figure.jsx'
import { ArrowRightIcon, CheckCircleIcon } from './Icons.jsx'

export default function Products() {
  return (
    <section id="products" className="bg-cream-100 py-16 lg:py-20">
      <div className="container-x">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow text-brand-600">Our Products</p>
            <h2 className="mt-3 font-display text-[32px] leading-tight tracking-tight text-brand-900 sm:text-[40px]">
              What Are You Sourcing?
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 border-b border-brand-400 pb-0.5 text-[13.5px] font-medium text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-600"
          >
            View All Products
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {PRODUCTS.map((product, i) => (
            <article
              key={product.id}
              className="reveal group grid overflow-hidden rounded-2xl bg-brand-50/70 ring-1 ring-brand-100 transition-all duration-300 hover:shadow-[0_20px_48px_-24px_rgba(20,48,29,0.4)] hover:ring-brand-200 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]"
              style={{ animationDelay: `${i * 110}ms` }}
            >
              <Figure
                src={product.image}
                alt={product.name}
                tone={product.tone}
                label={product.name}
                className="h-52 sm:h-full"
                imgClassName="transition-transform duration-700 group-hover:scale-105"
              />

              <div className="flex flex-col p-6 lg:p-7">
                <h3 className="font-display text-[23px] leading-tight text-brand-900">{product.name}</h3>
                <p className="mt-2 text-[13.5px] text-brand-800/70">{product.tagline}</p>

                <ul className="mt-5 flex flex-col gap-2.5">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-[13.5px] text-brand-800">
                      <CheckCircleIcon className="mt-px h-4 w-4 shrink-0 text-brand-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-800 px-5 py-3 text-[13.5px] font-semibold text-cream-50 transition-all hover:bg-brand-700"
                >
                  View Product
                  <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
