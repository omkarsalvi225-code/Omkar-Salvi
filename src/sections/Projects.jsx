


import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { profile } from '../data/profile'

function ProjectCard({ p, i }) {
  const href = p.figmaUrl || '#'

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: i * 0.1,
      }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:shadow-2xl"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={p.preview}
          alt={p.title}
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-black/10 opacity-0 transition group-hover:opacity-100" />
      </div>

      {/* CONTENT */}
      <div className="p-7">
        {/* TITLE */}
        <h3 className="text-2xl font-bold text-[#1f2030]">
          {p.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="mt-4 text-[15px] leading-8 text-[#666]">
          {p.description}
        </p>

        {/* TAGS */}
        <div className="mt-5 flex flex-wrap gap-2">
          {p.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[#fff4b3] px-4 py-2 text-sm font-medium text-[#1f2030]"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-7 inline-flex items-center gap-2 font-semibold text-[#f4c400]">
          View Project

          <span className="transition group-hover:translate-x-1">
            →
          </span>
        </div>
      </div>
    </motion.a>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#f8f8f8] py-24"
    >
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
            Projects
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-[#1f2030]">
            UI/UX Design Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#666]">
            A collection of modern UI/UX projects focused on
            clean interfaces, user-friendly experiences, and
            responsive design systems.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {profile.projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              p={p}
              i={i}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}