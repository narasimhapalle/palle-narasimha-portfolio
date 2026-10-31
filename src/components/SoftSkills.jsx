import { softSkillsList } from '../data/portfolioData'

const SoftSkillCard = ({ skill, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="group bg-[#f8f8f8] border border-gray-200 rounded-3xl p-6 min-h-[220px] text-center flex flex-col items-center justify-between hover:scale-[1.03] hover:border-red-500/30 hover:shadow-[0_10px_30px_rgba(255,42,42,0.15)] transition-all duration-300"
    >
      {/* Emoji icon in a rounded square that scales and tints red on group-hover */}
      <div className="w-14 h-14 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-2xl group-hover:bg-red-50 group-hover:border-red-200 group-hover:scale-110 transition-all duration-300 shadow-sm mb-4 select-none">
        <span>{skill.icon}</span>
      </div>

      {/* Uppercase Name and Description */}
      <div>
        <h3 className="text-gray-900 font-black text-lg uppercase tracking-tight mb-2 group-hover:text-[#ff2a2a] transition-colors">
          {skill.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {skill.desc}
        </p>
      </div>
    </div>
  )
}

const SoftSkills = () => {
  return (
    <section
      id="soft-skills"
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:60px_60px]"
    >
      {/* Torn-paper divider at the top from dark section to white */}
      <svg
        className="absolute top-0 left-0 w-full h-12 md:h-20 fill-[#0a0a0a] pointer-events-none z-20 rotate-180 -translate-y-[1px]"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z" />
      </svg>

      {/* Header centred */}
      <div
        data-aos="fade-up"
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
          Core Competencies
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 uppercase tracking-tight">
          Professional Soft Skills
        </h2>
        <p className="text-gray-500 text-sm md:text-base mt-4 max-w-xl mx-auto">
          Interpersonal strengths and disciplined working habits that drive reliable team outcomes.
        </p>
      </div>

      {/* Grid of 4 Soft Skill Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {softSkillsList.map((skill, index) => (
          <SoftSkillCard
            key={skill.name}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default SoftSkills

