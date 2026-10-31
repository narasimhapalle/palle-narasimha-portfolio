import { motion } from 'framer-motion'
import stackImage from '../assets/about/profile.png'
import { aboutContent, personalInfo } from '../data/portfolioData'

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Decorative Star 1 - Top Right */}
      <svg
        className="absolute top-12 right-8 md:right-16 w-8 h-8 text-black opacity-30 animate-pulse fill-current pointer-events-none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Decorative Star 2 - Bottom Left */}
      <svg
        className="absolute bottom-28 left-6 md:left-12 w-10 h-10 text-black opacity-30 animate-pulse fill-current pointer-events-none"
        style={{ animationDelay: '1s' }}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Main Content Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start relative z-10">
        {/* Left: ID badge on a lanyard */}
        <div className="md:w-[350px] shrink-0 w-full flex justify-center">
          <motion.div
            initial={{ y: -300, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ type: 'spring', stiffness: 110, damping: 9, mass: 1.1 }}
            className="relative pt-6"
          >
            {/* Black lanyard string */}
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3 h-40 bg-black z-0" />

            {/* Grey clip rectangle */}
            <div className="relative z-20 mx-auto w-10 h-3.5 bg-gray-400 rounded-sm shadow-md -mb-1.5" />

            {/* Dark card */}
            <div className="relative z-10 bg-gray-900 max-w-[280px] rounded-2xl p-3 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout slot */}
              <div className="w-12 h-1.5 bg-black/60 rounded-full mx-auto mb-3" />

              {/* Photo inside */}
              <img
                src={stackImage}
                alt={personalInfo.name}
                className="w-full aspect-[3/4] rounded-xl object-cover object-top shadow-inner"
              />
            </div>
          </motion.div>
        </div>

        {/* Right: Bio and Headings */}
        <div data-aos="fade-left" className="flex-1 mt-4 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight">
            {aboutContent.heading}
          </h2>

          <p
            className="text-lg font-bold leading-relaxed text-red-50 mt-6"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />
        </div>
      </div>

      {/* Torn-paper bottom SVG divider */}
      <svg
        className="absolute bottom-0 left-0 w-full h-14 md:h-24 pointer-events-none z-20 fill-white"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>
    </section>
  )
}

export default About
