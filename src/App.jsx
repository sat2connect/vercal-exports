import { useEffect } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Products from './components/Products.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Process from './components/Process.jsx'
import Quality from './components/Quality.jsx'
import FranceBand from './components/FranceBand.jsx'
import QuoteForm from './components/QuoteForm.jsx'
import Footer from './components/Footer.jsx'

/**
 * Reveals any `.reveal` element once it scrolls into view. A single observer
 * handles the whole page, and elements added later (e.g. the form's success
 * state) are picked up because we re-scan on mutation.
 */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    const scan = () => {
      document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el))
    }

    scan()
    const mutations = new MutationObserver(scan)
    mutations.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutations.disconnect()
    }
  }, [])
}

export default function App() {
  useScrollReveal()

  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-800 focus:px-4 focus:py-2 focus:text-sm focus:text-cream-50"
      >
        Skip to content
      </a>

      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Products />
        <WhyChooseUs />
        <Process />
        <Quality />
        <FranceBand />
        <QuoteForm />
      </main>
      <Footer />
    </>
  )
}
