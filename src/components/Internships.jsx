import { internshipsList } from '../data/portfolioData'

const InternshipCard = ({ intern, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 150}
      className="bg-black/20 backdrop-blur-md border border-white/10 rounded-3xl p-8 hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Top Row: Duration and Badge */}
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-white/40">
            {intern.duration}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white text-[10px] font-mono uppercase tracking-wider font-semibold select-none">
            Internship
          </span>
        </div>

        {/* Role & Organization */}
        <h3 className="text-2xl font-black text-white mt-4 tracking-tight">
          {intern.role}
        </h3>
        <p className="uppercase text-red-200 font-bold tracking-wider text-sm mt-1">
          {intern.organization}
        </p>

        {/* Skills Gained List */}
        <div className="mt-6">
          <h4 className="text-xs font-mono uppercase tracking-wider text-white/70 mb-3 font-semibold">
            Skills Gained:
          </h4>
          <ul className="space-y-2">
            {intern.skills.map((skill, i) => (
              <li key={i} className="flex items-start text-sm text-red-50 font-medium">
                <span className="text-black font-bold mr-2 select-none">•</span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Technologies Row */}
      <div className="border-t border-white/10 pt-6 mt-6">
        <h4 className="text-xs font-mono uppercase tracking-wider text-white/70 mb-3 font-semibold">
          Technologies:
        </h4>
        <div className="flex flex-wrap gap-2">
          {intern.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-md bg-black/30 border border-white/10 text-white/90 text-xs font-mono"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

const Internships = () => {
  if (!internshipsList || internshipsList.length === 0) {
    return null
  }

  return (
    <section
      id="experience"
      className="bg-[#ff2a2a] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Top torn-paper divider from dark section to red */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 fill-[#0a0a0a] pointer-events-none z-20 rotate-180 -translate-y-[1px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      {/* Decorative pulsing star - bottom left */}
      <svg
        className="absolute bottom-8 left-8 w-12 h-12 text-black opacity-20 animate-pulse fill-current pointer-events-none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" />
      </svg>

      {/* Header */}
      <div
        data-aos="fade-up"
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
          Work Experience
        </h2>
        <p className="text-red-100 text-sm md:text-base mt-3 max-w-xl mx-auto font-medium">
          Hands-on professional training and full-stack software development experience.
        </p>
      </div>

      {/* Grid of Internships */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {internshipsList.map((intern, index) => (
          <InternshipCard
            key={`${intern.organization}-${index}`}
            intern={intern}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default Internships

