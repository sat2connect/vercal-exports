import { FOOTER_LINKS } from '../data/content.js'
import { LeafIcon, LinkedInIcon, YoutubeIcon } from './Icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-900 text-cream-100">
      <div className="container-x py-10">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-center lg:justify-between">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Vercal Exports - home">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-800 text-brand-200 ring-1 ring-brand-700">
              <LeafIcon className="h-5 w-5" />
            </span>
            <span className="leading-none">
              <span className="block font-display text-[19px] tracking-tight text-cream-50">Vercal Exports</span>
              <span className="mt-1 block text-[10px] tracking-[0.06em] text-brand-300">
                Roots of India. For a Greener Tomorrow.
              </span>
            </span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13px] text-cream-200/85 transition-colors hover:text-cream-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Vercal Exports on LinkedIn"
              className="text-cream-200/80 transition-colors hover:text-cream-50"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Vercal Exports on YouTube"
              className="text-cream-200/80 transition-colors hover:text-cream-50"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
            <span className="ml-2 hidden items-center gap-2 text-[12.5px] text-brand-200 sm:flex">
              India to a Greener World
              <LeafIcon className="h-4 w-4" />
            </span>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-3 border-t border-brand-800 pt-6 text-[12px] text-cream-200/60 sm:flex-row sm:justify-between">
          <p>&copy; {year} Vercal Exports. All rights reserved.</p>
          <p className="flex items-center gap-3">
            <a href="#contact" className="transition-colors hover:text-cream-50">
              Privacy Policy
            </a>
            <span className="text-brand-700">|</span>
            <a href="#contact" className="transition-colors hover:text-cream-50">
              Terms of Use
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
