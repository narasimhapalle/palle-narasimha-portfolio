import { technicalSkills } from '../data/portfolioData'

const SkillBadge = ({ name }) => {
  return (
    <span className="inline-flex items-center rounded-full px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-red-600/20 hover:border-red-500/30 transition-all duration-200 select-none">
      {name}
    </span>
  )
}

const SkillCard = ({ category, index }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-[1.02] hover:border-red-500/30 hover:shadow-[0_0_30px_rgba(255,42,42,0.15)] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-white text-lg font-black uppercase tracking-wider border-b border-white/10 pb-3 mb-4">
          {category.title}
        </h3>
        <div className="flex flex-wrap gap-3">
          {category.skills.map((skill) => (
            <SkillBadge key={skill.name} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  )
}

const TechnicalSkills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0a0a0a] pt-24 pb-28 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Blurred background red glow circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Centred Section Header */}
      <div
        data-aos="fade-up"
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest mb-4">
          Technical Stack
        </span>
        <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
          My Skillset
        </h2>
        <p className="text-white/50 text-sm md:text-base mt-3 max-w-xl mx-auto">
          Core technologies, frameworks, and programming tools I leverage to build scalable software.
        </p>
      </div>

      {/* Grid of Category Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
        {technicalSkills.categories.map((category, index) => (
          <SkillCard
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </section>
  )
}

export default TechnicalSkills

