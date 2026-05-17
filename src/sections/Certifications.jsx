

import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { profile } from '../data/profile'

function CertificationCard({ cert, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: i * 0.1,
      }}
      whileHover={{ y: -5 }}
      className="group rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:shadow-2xl"
    >
      {/* TOP DESIGN */}
      <div className="mb-6 h-1 w-16 rounded-full bg-[#f4c400]" />

      {/* TITLE */}
      <h3 className="text-2xl font-bold text-[#1f2030]">
        {cert.title}
      </h3>

      {/* ORG */}
      <p className="mt-3 text-[15px] leading-7 text-[#666]">
        {cert.org || 'Professional Certification'}
      </p>

      {/* TAGS */}
      <div className="mt-6 flex flex-wrap gap-3">
        <span className="rounded-full bg-[#fff4b3] px-4 py-2 text-sm font-semibold text-[#1f2030]">
          Verified Learning
        </span>

        <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-[#555]">
          Portfolio Ready
        </span>
      </div>

      {/* HOVER LINE */}
      <div className="mt-8 h-1 w-0 rounded-full bg-[#f4c400] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  )
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[#f8f8f8] py-24"
    >
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
            Certifications
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-[#1f2030]">
            Credentials & Achievements
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#666]">
            Courses, certifications, and accomplishments that
            strengthened my knowledge in UI/UX design,
            creativity, and digital product experiences.
          </p>
        </div>

        {/* GRID */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {profile.certifications.map((cert, i) => (
            <CertificationCard
              key={cert.title}
              cert={cert}
              i={i}
            />
          ))}
        </div>

        {/* ACHIEVEMENTS */}
        {profile.achievements && (
          <div className="mt-20 rounded-3xl bg-[#1f2030] p-10 text-white">
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
              Achievements
            </p>

            <h3 className="mt-4 text-4xl font-extrabold">
              Additional Highlights
            </h3>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {profile.achievements.map((achievement, index) => (
                <div
                  key={achievement}
                  className="flex items-start gap-4 rounded-2xl bg-white/5 p-5"
                >
                  {/* NUMBER */}
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f4c400] text-sm font-bold text-black">
                    {index + 1}
                  </div>

                  <p className="leading-7 text-zinc-300">
                    {achievement}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}