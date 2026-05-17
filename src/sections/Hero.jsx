import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { profile } from '../data/profile'

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  const y = el.getBoundingClientRect().top + window.scrollY - 80
  window.scrollTo({ top: y, behavior: 'smooth' })
}

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="home" className="relative min-h-screen bg-[#1f2030] pt-32 pb-20">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 h-96 w-96 rounded-full bg-[#f4c400]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#f4c400]/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          className="mx-auto max-w-4xl text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="flex items-center gap-2 rounded-full bg-[#f4c400]/10 border border-[#f4c400]/30 px-5 py-2">
              <span className="h-2 w-2 rounded-full bg-[#f4c400] animate-pulse" />
              <span className="text-sm font-semibold text-[#f4c400]">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mt-8">
            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
              {profile.name}
              <br />
              <span className="bg-gradient-to-r from-[#f4c400] via-yellow-300 to-[#f4c400] bg-clip-text text-transparent">
                {profile.role}
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed"
          >
            {profile.objective}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToId('projects')}
              className="group px-8 py-4 bg-[#f4c400] text-black font-bold rounded-lg hover:scale-105 transition transform duration-300 flex items-center gap-2"
            >
              View My Work
              <span className="transition transform group-hover:translate-x-1">→</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('contact')
              }}
              className="px-8 py-4 border-2 border-[#f4c400] text-[#f4c400] font-bold rounded-lg hover:bg-[#f4c400]/10 transition duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Focus', value: 'UI/UX Design' },
              { label: 'Location', value: 'Mumbai, India' },
              { label: 'Experience', value: 'Student Designer' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur hover:bg-white/10 transition duration-300"
              >
                <p className="text-sm font-semibold text-[#f4c400] uppercase tracking-wider">
                  {stat.label}
                </p>
                <p className="mt-3 text-xl font-bold text-white">{stat.value}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={itemVariants}
            className="mt-16 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-[#f4c400] rounded-full flex items-center justify-center"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-2 bg-[#f4c400] rounded-full"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}













