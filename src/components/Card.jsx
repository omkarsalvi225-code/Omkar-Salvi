export function Card({ className = '', children }) {
  return (
    <div
      className={`rounded-2xl bg-white/5 ring-1 ring-inset ring-white/10 backdrop-blur ${className}`}
    >
      {children}
    </div>
  )
}

