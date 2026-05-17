



import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { profile } from '../data/profile'

function SkillCard({ title, items }) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <h3 className="text-lg font-bold uppercase tracking-[3px] text-[#f4c400]">
        {title}
      </h3>

      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-200 bg-[#fafafa] px-4 py-2 text-sm font-medium text-[#1f2030] transition hover:border-[#f4c400] hover:bg-[#fff4b3]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function LanguageBar({ name, level }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <p className="font-medium text-[#1f2030]">
          {name}
        </p>

        <p className="text-sm text-[#666]">
          {level}/5
        </p>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-zinc-200">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(level / 5) * 100}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="h-full rounded-full bg-[#f4c400]"
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section
      id="skills"
      className="bg-white py-24"
    >
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-[#1f2030]">
            My Design & Development Toolkit
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#666]">
            A combination of UI/UX design skills, practical
            development basics, and strong collaboration abilities
            focused on creating meaningful digital experiences.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {/* DESIGN */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <SkillCard
              title="Design"
              items={profile.skills.design}
            />
          </motion.div>

          {/* DEVELOPMENT */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SkillCard
              title="Development"
              items={profile.skills.development}
            />
          </motion.div>

          {/* OTHER */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillCard
              title="Other"
              items={profile.skills.other}
            />
          </motion.div>
        </div>

        {/* LANGUAGES */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-3xl border border-zinc-200 bg-[#fafafa] p-10 shadow-sm"
        >
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
              Languages
            </p>

            <h3 className="mt-3 text-3xl font-bold text-[#1f2030]">
              Communication Skills
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {profile.languages.map((language) => (
              <LanguageBar
                key={language.name}
                name={language.name}
                level={language.level}
              />
            ))}
          </div>

          {/* INFO BOX */}
          <div className="mt-12 rounded-2xl bg-[#1f2030] p-8 text-white">
            <h4 className="text-2xl font-bold text-[#f4c400]">
              What You Can Expect
            </h4>

            <p className="mt-4 max-w-3xl text-[15px] leading-8 text-zinc-300">
              Clean visual hierarchy, user-focused interfaces,
              responsive layouts, and thoughtful design systems
              combined with practical prototyping and interaction
              design skills.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
