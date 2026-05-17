


import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { profile } from '../data/profile'

function buildMailto({ to, name, email, message }) {
  const subject = `Portfolio Inquiry — ${name || 'Hello'}`

  const body = [
    `Name: ${name || '-'}`,
    `Email: ${email || '-'}`,
    '',
    message || '',
  ].join('\n')

  const params = new URLSearchParams({
    subject,
    body,
  })

  return `mailto:${to}?${params.toString()}`
}

function ContactCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-bold uppercase tracking-[3px] text-[#f4c400]">
        {title}
      </p>

      <p className="mt-3 text-[15px] leading-7 text-[#1f2030]">
        {value}
      </p>
    </div>
  )
}

export function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const mailto = useMemo(
    () =>
      buildMailto({
        to: profile.contact.email,
        ...form,
      }),
    [form]
  )

  return (
    <section
      id="contact"
      className="bg-white py-24"
    >
      <Container>
        {/* HEADER */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-[#1f2030]">
            Let’s Work Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#666]">
            Interested in collaborating, internships,
            freelance work, or discussing design ideas?
            Feel free to reach out anytime.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <ContactCard
              title="Email"
              value={profile.contact.email}
            />

            <ContactCard
              title="Phone"
              value={profile.contact.phone}
            />

            <ContactCard
              title="Location"
              value={profile.contact.location}
            />

            {/* RECRUITER NOTE */}
            <div className="rounded-3xl bg-[#1f2030] p-8 text-white">
              <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
                Recruiter Note
              </p>

              <h3 className="mt-4 text-3xl font-extrabold">
                Available for Opportunities
              </h3>

              <p className="mt-5 leading-8 text-zinc-300">
                Feel free to ask for detailed case studies,
                UI/UX process walkthroughs, prototypes,
                or additional project demonstrations.
              </p>
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-zinc-200 bg-[#fafafa] p-8 shadow-sm"
          >
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-[4px] text-[#f4c400]">
                Message
              </p>

              <h3 className="mt-3 text-3xl font-extrabold text-[#1f2030]">
                Send a Message
              </h3>
            </div>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()
                window.location.href = mailto
              }}
            >
              {/* NAME */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f2030]">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
                      name: e.target.value,
                    }))
                  }
                  className="h-14 w-full rounded-2xl border border-zinc-300 bg-white px-5 text-[#1f2030] outline-none transition focus:border-[#f4c400]"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f2030]">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
                      email: e.target.value,
                    }))
                  }
                  className="h-14 w-full rounded-2xl border border-zinc-300 bg-white px-5 text-[#1f2030] outline-none transition focus:border-[#f4c400]"
                />
              </div>

              {/* MESSAGE */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[#1f2030]">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell me about the opportunity..."
                  value={form.message}
                  onChange={(e) =>
                    setForm((s) => ({
                      ...s,
                      message: e.target.value,
                    }))
                  }
                  className="w-full rounded-2xl border border-zinc-300 bg-white px-5 py-4 text-[#1f2030] outline-none transition focus:border-[#f4c400]"
                />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                className="w-full rounded-2xl bg-[#f4c400] py-4 text-lg font-semibold text-black transition hover:scale-[1.02]"
              >
                Send Message
              </button>

              <p className="text-center text-sm text-[#666]">
                This portfolio uses your default mail app
                to send messages.
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}