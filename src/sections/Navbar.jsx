





import { useState } from 'react'
import { Container } from '../components/Container'
import { sectionIds, sectionLabels } from '../lib/sections'

function scrollToId(id) {
  const el = document.getElementById(id)

  if (!el) return

  const y = el.getBoundingClientRect().top + window.scrollY - 80

  window.scrollTo({
    top: y,
    behavior: 'smooth',
  })
}

export function Navbar({ activeId }) {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#1f2030] shadow-lg">
      <Container className="flex items-center justify-between py-4">
        {/* LOGO */}
        <button
          onClick={() => scrollToId('home')}
          className="flex items-center gap-3"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f4c400] text-lg font-bold text-black">
            O
          </div>

          <div>
            <h2 className="text-lg font-bold text-white">
              Omkar Salvi
            </h2>

            <p className="text-sm text-zinc-300">
              UI/UX Designer
            </p>
          </div>
        </button>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-6 md:flex">
          {sectionIds.map((id) => {
            const isActive = activeId === id

            return (
              <button
                key={id}
                onClick={() => scrollToId(id)}
                className={`text-sm font-medium transition ${
                  isActive
                    ? 'text-[#f4c400]'
                    : 'text-white hover:text-[#f4c400]'
                }`}
              >
                {sectionLabels[id]}
              </button>
            )
          })}
        </nav>

        {/* RIGHT BUTTONS */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="mailto:omkarsalvi225@gmail.com"
            className="rounded-lg border border-[#f4c400] px-4 py-2 text-sm font-medium text-[#f4c400] transition hover:bg-[#f4c400] hover:text-black"
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            className="rounded-lg bg-[#f4c400] px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
          >
            Download CV
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          ☰
        </button>
      </Container>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-white/10 bg-[#1f2030] md:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => {
                  scrollToId(id)
                  setOpen(false)
                }}
                className="text-left text-white transition hover:text-[#f4c400]"
              >
                {sectionLabels[id]}
              </button>
            ))}

            <a
              href="mailto:omkarsalvi225@gmail.com"
              className="rounded-lg border border-[#f4c400] px-4 py-2 text-center text-[#f4c400]"
            >
              Contact
            </a>

            <a
              href="/resume.pdf"
              className="rounded-lg bg-[#f4c400] px-4 py-2 text-center font-semibold text-black"
            >
              Download CV
            </a>
          </Container>
        </div>
      )}
    </header>
  )
}