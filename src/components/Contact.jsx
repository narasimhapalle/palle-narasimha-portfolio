// Contact.jsx — Contact section with parallax background, form, and EmailJS/mailto fallback
import { useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { emailjsConfig, personalInfo, socialLinks } from '../data/portfolioData'

// ── Arrow icon for the submit button ─────────────────────────────────────────
function ArrowRight({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// ── Spinner icon shown while sending ─────────────────────────────────────────
function Spinner() {
  return (
    <svg
      className="animate-spin w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  )
}

// ── Reusable underline input style ───────────────────────────────────────────
const inputClass =
  'w-full bg-transparent border-b border-white/40 pb-3 pt-1 text-lg text-white ' +
  'placeholder-white/50 focus:outline-none focus:border-white transition-colors duration-300 ' +
  'autofill:shadow-[inset_0_0_0px_1000px_#ff2a2a]' // prevent browser autofill blue background

export default function Contact() {
  const ref = useRef(null)
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // 'idle' | 'sending' | 'success' | 'error'
  const [permitted, setPermitted] = useState(false) // permission checkbox

  // ── Parallax: giant "Contact" word slides up/down as the section scrolls ──
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '30%'])

  // ── Destructure EmailJS config ────────────────────────────────────────────
  const { serviceId, templateId, publicKey } = emailjsConfig

  // ── Check whether real EmailJS credentials are present ───────────────────
  const isConfigured =
    serviceId &&
    templateId &&
    publicKey &&
    serviceId !== 'YOUR_EMAILJS_SERVICE_ID' &&
    templateId !== 'YOUR_EMAILJS_TEMPLATE_ID' &&
    publicKey !== 'YOUR_EMAILJS_PUBLIC_KEY'

  // ── Form submission handler ───────────────────────────────────────────────
  async function handleSubmit(e) {
    e.preventDefault()
    if (status === 'sending') return

    // Read values by element id from the form
    const form = formRef.current
    const firstName = form.querySelector('#firstName').value.trim()
    const lastName  = form.querySelector('#lastName').value.trim()
    const email     = form.querySelector('#email').value.trim()
    const message   = form.querySelector('#message').value.trim()

    // Client-side validation: firstName, email, and message are required
    if (!firstName || !email || !message) {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    setStatus('sending')

    if (!isConfigured) {
      // ── Fallback: open the user's mail client with pre-filled data ────────
      const mailtoUrl =
        `mailto:${personalInfo.emails.primary}` +
        `?subject=${encodeURIComponent(`Portfolio Contact from ${firstName} ${lastName}`)}` +
        `&body=${encodeURIComponent(`From: ${firstName} ${lastName}\nEmail: ${email}\n\n${message}`)}`
      window.open(mailtoUrl, '_blank')
      setStatus('success')
      formRef.current.reset()
      setTimeout(() => setStatus('idle'), 3000)
      return
    }

    // ── EmailJS send ──────────────────────────────────────────────────────
    try {
      const emailjs = await import('@emailjs/browser')
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    } finally {
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  // ── Submit button appearance driven by status ─────────────────────────────
  const buttonContent = {
    idle: (
      <span className="flex items-center gap-2">
        Send Message
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    ),
    sending: (
      <span className="flex items-center gap-2">
        <Spinner /> Sending...
      </span>
    ),
    success: <span>Sent Successfully ✓</span>,
    error:   <span>Failed — Try Again</span>,
  }

  const buttonClass = {
    idle:    'border-white text-[#ff2a2a] bg-white hover:bg-transparent hover:text-white',
    sending: 'border-white/30 text-white/50 bg-white/10 cursor-not-allowed',
    success: 'border-green-400 text-green-400 bg-transparent',
    error:   'border-red-900 text-red-900 bg-transparent',
  }

  return (
    <section
      ref={ref}
      id="contact"
      className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 border-t border-gray-900"
    >
      {/* ── Parallax giant background word ───────────────────────────────── */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center pointer-events-none z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="text-[25vw] leading-[0.75] font-black uppercase tracking-tighter select-none
                     text-white/[0.03] scale-y-[1.6] origin-top whitespace-nowrap"
          style={{ fontFamily: "'Impact','Arial Black',sans-serif" }}
        >
          Contact
        </div>
      </motion.div>

      {/* ── Red card — sits on top of the background word ─────────────────── */}
      <div
        data-aos="fade-up"
        className="relative z-10 w-full md:w-[85%] lg:w-[75%] ml-auto bg-[#ff2a2a] p-8 md:p-16"
      >
        {/* Header row ─────────────────────────────────────────────────────── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12">
          <p className="uppercase tracking-[0.2em] text-sm text-white/70 font-semibold">
            Reach Me
          </p>

          {/* DM on Instagram pill — only shown if instagram link is set */}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-white border border-white/40
                         rounded-full px-4 py-2 hover:bg-white hover:text-[#ff2a2a] transition-colors duration-300"
            >
              {/* Instagram icon */}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058
                  1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664
                  4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849
                  0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057
                  1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073
                  7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78
                  6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2
                  6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014
                  15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12
                  16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0
                  000-2.881z"/>
              </svg>
              DM on Instagram
            </a>
          )}
        </div>

        {/* ── Form ─────────────────────────────────────────────────────────── */}
        <form ref={formRef} onSubmit={handleSubmit} noValidate>
          {/* Two-column grid on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 mb-12">

            {/* Left column — name & email inputs */}
            <div className="flex flex-col gap-10">
              {/* First name */}
              <div>
                <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-white/60 mb-2 block">
                  First Name <span className="text-white/40">*</span>
                </label>
                <input
                  id="firstName"
                  name="first_name"
                  type="text"
                  required
                  placeholder="Palle"
                  className={inputClass}
                />
              </div>

              {/* Last name */}
              <div>
                <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-white/60 mb-2 block">
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="last_name"
                  type="text"
                  placeholder="Narasimha"
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-xs uppercase tracking-widest text-white/60 mb-2 block">
                  Email Address <span className="text-white/40">*</span>
                </label>
                <input
                  id="email"
                  name="user_email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            {/* Right column — message textarea */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-xs uppercase tracking-widest text-white/60 mb-2 block">
                Message <span className="text-white/40">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={8}
                placeholder={"Hi Narasimha, I'd love to connect about…"}
                className={`${inputClass} resize-none min-h-[220px] flex-1`}
              />
            </div>
          </div>

          {/* Bottom row — checkbox, note, mailto link, submit ──────────────── */}
          <div className="flex flex-col gap-6">

            {/* Permission checkbox */}
            <label className="flex items-start gap-3 cursor-pointer group select-none">
              <input
                type="checkbox"
                checked={permitted}
                onChange={() => setPermitted(p => !p)}
                className="mt-1 w-4 h-4 rounded border-white/40 accent-white flex-shrink-0 cursor-pointer"
              />
              <span className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                I agree to be contacted regarding this message and understand my data will be
                handled respectfully and not shared with third parties.
              </span>
            </label>

            {/* Response time note */}
            <p className="text-xs text-white/50 leading-relaxed">
              Your message will be sent directly to my inbox. I typically respond within{' '}
              <strong className="text-white/70">24–48 hours</strong>.{' '}
              {/* Urgent mailto link */}
              For urgent inquiries:{' '}
              <a
                href={`mailto:${personalInfo.emails.primary}`}
                className="underline underline-offset-2 text-white/70 hover:text-white transition-colors"
              >
                {personalInfo.emails.primary}
              </a>
            </p>

            {/* Submit button */}
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`group flex items-center gap-2 rounded-full border px-8 py-3 text-sm font-bold
                            transition-all duration-300 ${buttonClass[status]}`}
              >
                {buttonContent[status]}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

