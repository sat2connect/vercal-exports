import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content.js'
import { ArrowRightIcon, ChevronDownIcon, CloseIcon, LeafIcon, MenuIcon, TranslateIcon } from './Icons.jsx'

function Wordmark({ compact = false }) {
  return (
    <a href="#home" className="flex items-center gap-2.5" aria-label="Vercal Exports - home">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-100 text-brand-700 ring-1 ring-brand-200">
        <LeafIcon className="h-5 w-5" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-[19px] font-semibold tracking-tight text-brand-900">Vercal Exports</span>
        {!compact && (
          <span className="mt-0.5 block text-[10px] tracking-[0.06em] text-brand-600">
            Roots of India. For a Greener Tomorrow.
          </span>
        )}
      </span>
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream-50/95 shadow-[0_1px_0_rgba(20,48,29,0.08)] backdrop-blur-md' : 'bg-cream-50'
      }`}
    >
      <nav className="container-x flex h-[68px] items-center justify-between gap-6">
        <Wordmark />

        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[13.5px] font-medium text-brand-800 transition-colors hover:text-brand-600 after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:bg-brand-600 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden items-center gap-1 rounded-md px-2 py-1.5 text-[13px] font-medium text-brand-700 transition-colors hover:bg-brand-50 md:flex"
            aria-label="Change language"
          >
            <TranslateIcon className="h-4 w-4" />
            EN
            <ChevronDownIcon className="h-3.5 w-3.5" />
          </button>

          <a
            href="#contact"
            className="group hidden items-center gap-2 rounded-lg bg-brand-800 px-4 py-2.5 text-[13.5px] font-semibold text-cream-50 shadow-sm transition-all hover:bg-brand-700 hover:shadow-md sm:inline-flex"
          >
            Request a Quote
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg text-brand-800 transition-colors hover:bg-brand-50 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        /* overflow-hidden keeps the off-canvas panel (translate-x-full) from
           creating horizontal scroll on small screens. */
        className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${open ? '' : 'pointer-events-none'}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-brand-900/40 transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-cream-50 p-6 shadow-xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between">
            <Wordmark compact />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-lg text-brand-800 hover:bg-brand-50"
              aria-label="Close menu"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <ul className="mt-8 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-[15px] font-medium text-brand-800 transition-colors hover:bg-brand-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-brand-800 px-4 py-3 text-sm font-semibold text-cream-50"
          >
            Request a Quote
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </header>
  )
}

