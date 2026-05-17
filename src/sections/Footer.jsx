

import { Container } from '../components/Container'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-20 border-t border-zinc-200 bg-[#1f2030] py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* LEFT */}
        <div>
          <h3 className="text-xl font-bold tracking-wide text-[#f4c400]">
            Omkar Salvi
          </h3>

          <p className="mt-1 text-sm text-zinc-300">
            UI/UX Designer
          </p>

          <p className="mt-4 text-sm text-zinc-400">
            © {year} Omkar Salvi. All rights reserved.
          </p>
        </div>

        {/* RIGHT LINKS */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            className="text-sm font-medium text-zinc-300 transition hover:text-[#f4c400]"
            href="#projects"
          >
            Projects
          </a>

          <a
            className="text-sm font-medium text-zinc-300 transition hover:text-[#f4c400]"
            href="#skills"
          >
            Skills
          </a>

          <a
            className="text-sm font-medium text-zinc-300 transition hover:text-[#f4c400]"
            href="#contact"
          >
            Contact
          </a>

          <a
            className="rounded-lg bg-[#f4c400] px-4 py-2 text-sm font-semibold text-black transition hover:scale-105"
            href="/resume.pdf"
          >
            Download CV
          </a>
        </div>
      </Container>
    </footer>
  )
}