const base = 'h-5 w-5 shrink-0'

export function Icon({ name, className = '' }) {
  switch (name) {
    case 'menu':
      return (
        <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 7h16M4 12h16M4 17h16"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'x':
      return (
        <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M6 6l12 12M18 6L6 18"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'arrow-right':
      return (
        <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M13 5l7 7-7 7M20 12H4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'download':
      return (
        <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3v10m0 0l4-4m-4 4l-4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 15v4a2 2 0 002 2h10a2 2 0 002-2v-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'mail':
      return (
        <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h16v12H4V6z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M4.5 7l7.5 6 7.5-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'pin':
      return (
        <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M12 21s7-4.35 7-11a7 7 0 10-14 0c0 6.65 7 11 7 11z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 10.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'phone':
      return (
        <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M6.5 3.5h3l1.2 5-2.1 1.7c1.4 2.7 3.5 4.8 6.2 6.2l1.7-2.1 5 1.2v3c0 1.1-.9 2-2 2-9.4 0-17-7.6-17-17 0-1.1.9-2 2-2z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'external':
      return (
        <svg className={`${base} ${className}`} viewBox="0 0 24 24" fill="none">
          <path
            d="M14 5h5v5M10 14L19 5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19 14v4a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2h4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    default:
      return <span className={`${base} ${className}`} aria-hidden="true" />
  }
}

