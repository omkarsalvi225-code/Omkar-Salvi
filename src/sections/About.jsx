






import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { profile } from '../data/profile'

export function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
            About Me
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-[#1f2030]">
            Designing Clean & User-Friendly Experiences
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#666]">
            Passionate about creating visually appealing,
            intuitive, and meaningful digital experiences
            through thoughtful UI/UX design.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-zinc-200 bg-[#fafafa] p-10 shadow-sm">
              {/* TOP LINE */}
              <div className="mb-6 h-1 w-20 rounded-full bg-[#f4c400]" />

              <h3 className="text-3xl font-bold text-[#1f2030]">
                Who I Am
              </h3>

              <p className="mt-6 text-[16px] leading-9 text-[#666]">
                {profile.objective}
              </p>

              {/* TOOL TAGS */}
              <div className="mt-10">
                <p className="mb-5 text-sm font-bold uppercase tracking-[3px] text-[#f4c400]">
                  Tools & Platforms
                </p>

                <div className="flex flex-wrap gap-3">
                  {profile.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-[#1f2030] transition hover:border-[#f4c400] hover:bg-[#fff4b3]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            className="lg:col-span-5"
          >
            <div className="space-y-6">
              {/* CARD 1 */}
              <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                {/* TOP BAR */}
                <div className="mb-6 h-1 w-16 rounded-full bg-[#f4c400]" />

                <h3 className="text-2xl font-bold text-[#1f2030]">
                  Primary Focus
                </h3>

                <p className="mt-4 leading-8 text-[#666]">
                  UI systems, UX flows, responsive layouts,
                  prototyping, and creating seamless user
                  experiences.
                </p>
              </div>

              {/* CARD 2 */}
              <div className="rounded-3xl bg-[#1f2030] p-8 text-white shadow-sm">
                {/* TOP BAR */}
                <div className="mb-6 h-1 w-16 rounded-full bg-[#f4c400]" />

                <h3 className="text-2xl font-bold text-[#f4c400]">
                  Strengths
                </h3>

                <div className="mt-6 space-y-4">
                  {[
                    'Research Mindset',
                    'Visual Hierarchy',
                    'Creative Thinking',
                    'Attention to Detail',
                    'Team Collaboration',
                  ].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-start gap-4"
                    >
                      {/* NUMBER */}
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4c400] text-xs font-bold text-black">
                        {index + 1}
                      </div>

                      <p className="text-zinc-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}