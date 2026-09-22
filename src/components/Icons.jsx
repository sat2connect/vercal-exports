/**
 * Single-source icon set. Every icon is a stroked 24x24 SVG that inherits
 * `currentColor`, so colour is controlled with Tailwind text-* classes.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function LeafIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

export function ArrowRightIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export function CheckCircleIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.9" />
    </svg>
  )
}

export function AwardIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m8.2 13.6-1.4 7.1 5.2-2.6 5.2 2.6-1.4-7.1" />
      <path d="m10.3 9 1.2 1.2 2.3-2.4" />
    </svg>
  )
}

export function DocumentIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </svg>
  )
}

export function ShipIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17.5c1.5 0 1.5 1.2 3 1.2s1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2 1.5 1.2 3 1.2 1.5-1.2 3-1.2" />
      <path d="M4.5 14 6 9h12l1.5 5" />
      <path d="M12 9V4.5" />
      <path d="M9.5 4.5h5" />
    </svg>
  )
}

export function BoxIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M21 8.5v7a1.5 1.5 0 0 1-.8 1.32l-7.5 4a1.5 1.5 0 0 1-1.4 0l-7.5-4A1.5 1.5 0 0 1 3 15.5v-7" />
      <path d="m3.4 7.8 8.6 4.6 8.6-4.6-8-4.27a1.5 1.5 0 0 0-1.2 0Z" />
      <path d="M12 12.4V21" />
    </svg>
  )
}

export function DiamondIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m12 21 9-11-3.2-6H6.2L3 10Z" />
      <path d="M3 10h18" />
      <path d="m8.4 4 1.1 6L12 21l2.5-11 1.1-6" />
    </svg>
  )
}

export function UsersIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <path d="M16.5 5.5a3.2 3.2 0 0 1 0 5.6" />
      <path d="M18 14.6A6 6 0 0 1 21.5 20" />
    </svg>
  )
}

export function TruckIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 7.5A1.5 1.5 0 0 1 4.5 6H14v10H3Z" />
      <path d="M14 10h3.3a1.5 1.5 0 0 1 1.3.77L21 15v1h-7Z" />
      <circle cx="7" cy="17.5" r="1.8" />
      <circle cx="17" cy="17.5" r="1.8" />
    </svg>
  )
}

export function SproutIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21v-8" />
      <path d="M12 13C12 9.7 9.5 7 6 7c0 3.3 2.5 6 6 6Z" />
      <path d="M12 13c0-2.8 2.1-5 5-5 0 2.8-2.2 5-5 5Z" />
    </svg>
  )
}

export function FlaskIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M10 3h4" />
      <path d="M10.5 3v6.2L5.4 18a1.6 1.6 0 0 0 1.4 2.4h10.4a1.6 1.6 0 0 0 1.4-2.4l-5.1-8.8V3" />
      <path d="M7.6 14.5h8.8" />
    </svg>
  )
}

export function GlobeIcon(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.2 9.5h17.6M3.2 14.5h17.6" />
      <path d="M12 3c2.3 2.4 3.5 5.5 3.5 9s-1.2 6.6-3.5 9c-2.3-2.4-3.5-5.5-3.5-9S9.7 5.4 12 3Z" />
    </svg>
  )
}

export function ChevronDownIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export function MenuIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function CloseIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function SpinnerIcon(props) {
  return (
    <svg {...base} {...props} className={`animate-spin ${props.className || ''}`}>
      <path d="M12 3a9 9 0 1 0 9 9" />
    </svg>
  )
}

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6.5 0h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.53 4.78 5.82V21h-4v-5.5c0-1.31-.02-3-1.9-3-1.9 0-2.2 1.42-2.2 2.9V21h-4V9Z" />
    </svg>
  )
}

export function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.25 5 12 5 12 5s-6.25 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2 26.2 26.2 0 0 0 2 12c0 1.63.13 3.25.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.75 19 12 19 12 19s6.25 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77c.27-1.55.4-3.17.4-4.8 0-1.63-.13-3.25-.4-4.8ZM10 15.2V8.8l5.2 3.2-5.2 3.2Z" />
    </svg>
  )
}

export function TranslateIcon(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 6h9" />
      <path d="M7.5 4v2" />
      <path d="M10.2 6c0 3.8-2.7 7-6.2 8.2" />
      <path d="M5.5 10.4c.9 1.9 2.6 3.3 4.7 3.8" />
      <path d="m13 20 3.8-9 3.8 9" />
      <path d="M14.4 16.8h4.8" />
    </svg>
  )
}

/** Small tricolour / flag marks used in the hero badge and the France band. */
export function IndiaFlagIcon(props) {
  return (
    <svg viewBox="0 0 30 20" aria-hidden {...props}>
      <rect width="30" height="20" rx="2.5" fill="#fff" />
      <path d="M2.5 0h25A2.5 2.5 0 0 1 30 2.5V6.7H0V2.5A2.5 2.5 0 0 1 2.5 0Z" fill="#FF9933" />
      <path d="M0 13.3h30v4.2A2.5 2.5 0 0 1 27.5 20h-25A2.5 2.5 0 0 1 0 17.5Z" fill="#138808" />
      <circle cx="15" cy="10" r="2.4" fill="none" stroke="#000080" strokeWidth="0.7" />
      <circle cx="15" cy="10" r="0.6" fill="#000080" />
    </svg>
  )
}

export function FranceFlagIcon(props) {
  return (
    <svg viewBox="0 0 30 20" aria-hidden {...props}>
      <rect width="30" height="20" rx="2.5" fill="#fff" />
      <path d="M2.5 0H10v20H2.5A2.5 2.5 0 0 1 0 17.5v-15A2.5 2.5 0 0 1 2.5 0Z" fill="#002395" />
      <path d="M20 0h7.5A2.5 2.5 0 0 1 30 2.5v15a2.5 2.5 0 0 1-2.5 2.5H20Z" fill="#ED2939" />
    </svg>
  )
}
