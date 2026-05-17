export function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium text-zinc-200/80 ring-1 ring-white/10 ${className}`}
    >
      {children}
    </span>
  )
}

