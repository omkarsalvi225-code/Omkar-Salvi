



import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { profile } from '../data/profile'

function EducationCard({ e, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: i * 0.1,
      }}
      className="relative rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
    >
      {/* TIMELINE DOT */}
      <div className="absolute -left-3 top-10 hidden h-6 w-6 rounded-full border-4 border-white bg-[#f4c400] lg:block" />

      {/* PERIOD */}
      <div className="mb-4 inline-flex rounded-full bg-[#fff4b3] px-4 py-2 text-sm font-semibold text-[#1f2030]">
        {e.period}
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-bold text-[#1f2030]">
        {e.title}
      </h3>

      {/* COLLEGE */}
      <p className="mt-2 text-[15px] font-medium text-[#555]">
        {e.org}
      </p>

      {/* LOCATION */}
      <p className="mt-1 text-sm text-[#777]">
        {e.location}
      </p>

      {/* SCORE */}
      {e.score && (
        <div className="mt-5 inline-flex rounded-full border border-[#f4c400] px-4 py-2 text-sm font-semibold text-[#1f2030]">
          {e.score}
        </div>
      )}

      {/* HIGHLIGHTS */}
      {e.highlights && (
        <div className="mt-6 rounded-2xl bg-[#fafafa] p-5">
          <p className="text-[15px] leading-8 text-[#666]">
            {e.highlights}
          </p>
        </div>
      )}
    </motion.div>
  )
}

export function Education() {
  return (
    <section
      id="education"
      className="bg-[#f8f8f8] py-24"
    >
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
            Education
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-[#1f2030]">
            Academic Journey
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#666]">
            My educational background and learning experiences
            that helped shape my creativity, communication,
            and problem-solving abilities.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          {/* LINE */}
          <div className="absolute left-0 top-0 hidden h-full w-1 rounded-full bg-[#f4c400]/30 lg:block" />

          <div className="space-y-10 lg:pl-10">
            {profile.education.map((e, i) => (
              <EducationCard
                key={e.title}
                e={e}
                i={i}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}