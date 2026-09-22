import { useState } from 'react'
import { LeafIcon, BoxIcon } from './Icons.jsx'

/**
 * Image slot that degrades gracefully.
 *
 * Product photography is dropped into /public/images (see the README there).
 * Until a file exists, this renders a textured placeholder in the right colour
 * family so the layout never collapses into a broken-image icon.
 */
export default function Figure({
  src,
  alt = '',
  tone = 'green',
  label,
  className = '',
  imgClassName = '',
  children,
}) {
  const [broken, setBroken] = useState(false)
  const showImage = Boolean(src) && !broken

  const tones = {
    green: {
      wrap: 'bg-gradient-to-br from-brand-200 via-brand-300 to-brand-500',
      dot: 'text-brand-800/25',
      chip: 'bg-brand-900/70 text-brand-50',
    },
    clay: {
      wrap: 'bg-gradient-to-br from-clay-200 via-clay-400 to-clay-600',
      dot: 'text-clay-800/25',
      chip: 'bg-clay-800/70 text-cream-100',
    },
    sky: {
      wrap: 'bg-gradient-to-br from-cream-200 via-brand-100 to-brand-300',
      dot: 'text-brand-700/20',
      chip: 'bg-brand-900/70 text-brand-50',
    },
  }
  const t = tones[tone] ?? tones.green

  // The root deliberately sets no `position` so callers can pass their own
  // (`absolute inset-0`, etc.) without Tailwind's ordering fighting them.
  // The placeholder below carries its own `relative` for the speckle layer.
  return (
    <div className={`overflow-hidden ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={() => setBroken(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      ) : (
        <div
          className={`relative flex h-full w-full items-center justify-center ${t.wrap}`}
          role="img"
          aria-label={alt}
        >
          {/* Subtle organic speckle so the placeholder reads as texture, not a flat block. */}
          <svg className={`absolute inset-0 h-full w-full ${t.dot}`} aria-hidden>
            <defs>
              <pattern id={`speck-${tone}`} width="26" height="26" patternUnits="userSpaceOnUse">
                <circle cx="4" cy="6" r="1.6" fill="currentColor" />
                <circle cx="17" cy="16" r="1.1" fill="currentColor" />
                <circle cx="22" cy="3" r="0.9" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#speck-${tone})`} />
          </svg>

          <div className="relative flex flex-col items-center gap-2 px-4 text-center">
            {tone === 'clay' ? (
              <BoxIcon className="h-9 w-9 text-white/80" />
            ) : (
              <LeafIcon className="h-9 w-9 text-white/80" />
            )}
            {label && (
              <span className={`rounded-full px-3 py-1 text-[11px] font-medium tracking-wide ${t.chip}`}>{label}</span>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  )
}
