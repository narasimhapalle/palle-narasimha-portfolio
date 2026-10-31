import { projects, socialLinks } from '../data/portfolioData'

const GitHubIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg
    className="w-4 h-4 fill-none stroke-current"
    viewBox="0 0 24 24"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const ProjectCard = ({ project, aosDelay }) => {
  // Border gradient styling: Highlighted red gradient for flagship project
  const borderGradientClass = project.isFlagship
    ? 'bg-gradient-to-r from-red-500/50 via-white/10 to-red-500/30 hover:from-red-500/80 hover:via-white/20 hover:to-red-500/60'
    : 'bg-white/10 hover:bg-white/20'

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`p-[1px] rounded-2xl transition-all duration-300 ${borderGradientClass}`}
    >
      <div className="rounded-2xl p-6 md:p-8 backdrop-blur-md bg-[#0f0f0f]/90 transition-all duration-300 flex flex-col justify-between h-full">
        <div>
          {/* Optional Badge */}
          {project.badge && (
            <span className="inline-block px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] uppercase tracking-widest text-xs font-semibold mb-4 w-fit select-none">
              {project.badge}
            </span>
          )}

          {/* Title and Big Faint Number */}
          <div className="flex items-center justify-between gap-4">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
              {project.title}
            </h3>
            <span className="text-5xl font-black font-serif italic text-white/10 select-none shrink-0">
              {project.number}
            </span>
          </div>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mt-4">
            {project.description}
          </p>

          {/* Tech Tag Pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.techTags.map((tech) => (
              <span
                key={tech}
                className="rounded-full px-3 py-1 bg-white/5 border border-white/10 text-white/80 text-xs font-bold hover:border-red-500/50 hover:bg-red-600/20 hover:text-white transition-all select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 mt-8 pt-4 border-t border-white/5">
          {/* GitHub link button */}
          {project.links?.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all duration-300 hover:scale-105"
            >
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}

          {/* Live Demo or Coming Soon button */}
          {project.links?.demo && project.links.demo.trim() !== '' ? (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-[#ff2a2a] hover:bg-red-600 text-white font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,42,42,0.4)]"
            >
              <span>Live Demo</span>
              <ExternalLinkIcon />
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white/40 font-semibold text-sm cursor-not-allowed select-none"
            >
              <span>Demo Coming Soon</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px] pt-24 pb-32 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Section Header */}
      <div
        data-aos="fade-up"
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest mb-4">
          Featured Projects
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
          Work that speaks for itself
        </h2>
        <p className="text-white/50 text-sm md:text-base mt-4 max-w-xl mx-auto">
          Production applications and systems built with Java, modern web technologies, and clean engineering practices.
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            aosDelay={(index + 1) * 100}
          />
        ))}
      </div>

      {/* Explore All Repositories CTA */}
      <div data-aos="fade-up" className="flex justify-center mt-16 relative z-10">
        <a
          href={socialLinks.github || '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]"
        >
          <GitHubIcon />
          <span>Explore All My Repositories</span>
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Projects

