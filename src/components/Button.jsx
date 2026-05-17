export function Button({
  as: As = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:pointer-events-none disabled:opacity-50'
  const sizes = {
    md: 'h-11 px-4 text-sm',
    lg: 'h-12 px-5 text-sm',
  }
  const variants = {
    primary:
      'bg-white text-zinc-950 hover:bg-zinc-100 active:translate-y-[1px] shadow-[0_10px_30px_-18px_rgba(255,255,255,0.35)]',
    secondary:
      'bg-white/10 text-white hover:bg-white/15 ring-1 ring-inset ring-white/15 active:translate-y-[1px]',
    ghost: 'text-zinc-200 hover:text-white hover:bg-white/10 ring-1 ring-white/10',
  }

  return (
    <As
      className={`${base} ${sizes[size] ?? sizes.md} ${
        variants[variant] ?? variants.primary
      } ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}

