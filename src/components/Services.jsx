import { useRef, useState } from 'react'
import { motion, useScroll, useSpring, useMotionValueEvent } from 'framer-motion'
import { skillsContent } from '../data/portfolioData'

const TagCard = ({
  number,
  title,
  text,
  className = '',
  aosDelay = 100,
  aosType = 'fade-up',
  pathLength,
  containerRef,
}) => {
  const cardRef = useRef(null)
  const [isActive, setIsActive] = useState(false)

  // Listen to path progress to toggle active state when the line tip reaches this card
  useMotionValueEvent(pathLength, 'change', (latest) => {
    if (!containerRef.current || !cardRef.current) return
    const containerHeight = containerRef.current.offsetHeight || 1350
    const cardTop = cardRef.current.offsetTop
    const progressThreshold = (cardTop + 50) / containerHeight
    setIsActive(latest >= progressThreshold)
  })

  // Theme transitions: Red with glow when active, clean white/grey otherwise
  const outerTheme = isActive
    ? 'bg-[#ff2a2a] shadow-[0_15px_40px_rgba(255,42,42,0.45)]'
    : 'bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-gray-100'

  const innerTheme = isActive
    ? 'bg-red-700/50 text-white'
    : 'bg-[#f4f4f4] text-gray-900'

  const numberColor = isActive ? 'text-red-200' : 'text-gray-400'
  const textColor = isActive ? 'text-white/90' : 'text-gray-600'
  const holeColor = isActive ? 'bg-red-200 border-red-300' : 'bg-gray-300 border-gray-400'

  return (
    <div
      ref={cardRef}
      data-aos={aosType}
      data-aos-delay={aosDelay}
      className={`w-72 sm:w-80 rounded-[2rem] p-2 transition-all duration-700 ${outerTheme} ${className}`}
    >
      {/* Punched hole circle at the top */}
      <div
        className={`w-4 h-4 rounded-full mx-auto shadow-inner transition-colors duration-700 border ${holeColor}`}
      />

      {/* Inner panel */}
      <div
        className={`mt-6 p-8 min-h-[220px] rounded-[1.5rem] transition-colors duration-700 flex flex-col justify-between ${innerTheme}`}
      >
        <div>
          <span className={`text-4xl font-serif italic font-bold select-none block mb-2 ${numberColor}`}>
            {number}
          </span>
          <h3 className="text-2xl font-black tracking-tight mb-3">
            {title}
          </h3>
          <p className={`text-sm leading-relaxed ${textColor}`}>
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  const containerRef = useRef(null)

  // Track vertical scroll progress inside the process section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  })

  const desktopPath =
    'M 650,200 C 400,300 200,400 300,600 C 400,800 750,750 700,950 C 650,1150 400,1150 300,1200'

  const cardPositions = [
    {
      className: 'md:absolute md:top-[10px] md:right-[5%] lg:right-[10%] rotate-2 md:rotate-6',
      aosType: 'fade-left',
      aosDelay: 100,
    },
    {
      className: 'md:absolute md:top-[450px] md:left-[5%] lg:left-[10%] -rotate-2 md:-rotate-6',
      aosType: 'fade-right',
      aosDelay: 200,
    },
    {
      className: 'md:absolute md:top-[700px] md:right-[5%] lg:right-[15%] rotate-1 md:rotate-3',
      aosType: 'fade-left',
      aosDelay: 300,
    },
    {
      className: 'md:absolute md:top-[1050px] md:left-[15%] lg:left-[25%] -rotate-1 md:-rotate-3',
      aosType: 'fade-right',
      aosDelay: 400,
    },
  ]

  return (
    <section
      id="process"
      ref={containerRef}
      className="bg-white pt-24 pb-32 px-6 md:px-12 relative overflow-hidden bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:80px_80px]"
    >
      <div className="max-w-6xl mx-auto relative md:h-[1350px]">
        {/* Header Block */}
        <div
          data-aos="fade-up"
          className="md:absolute top-10 left-0 md:w-[450px] z-20 mb-12 md:mb-0"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 border border-red-500/20 text-[#ff2a2a] text-xs font-mono uppercase tracking-widest mb-4 font-semibold">
            {skillsContent.badge}
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] text-gray-900 tracking-tight relative">
            {skillsContent.heading}
            {/* Hand-drawn arrow SVG */}
            <svg
              className="inline-block w-8 h-8 text-[#ff2a2a] ml-2 -mb-2 fill-none stroke-current"
              viewBox="0 0 20 20"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 4 Q 10 10 15 15 M 15 15 L 10 15 M 15 15 L 15 10" />
            </svg>
          </h2>

          <p className="text-gray-500 text-sm md:text-base mt-4 leading-relaxed">
            {skillsContent.description}
          </p>
        </div>

        {/* Desktop 3-Layer Path SVG */}
        <svg
          className="hidden md:block absolute top-0 left-0 w-full h-[1350px] pointer-events-none z-0"
          viewBox="0 0 1000 1350"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Layer 1: Faint Guide Path */}
          <path
            d={desktopPath}
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="8 10"
          />

          {/* Layer 2: Mask animated with spring scroll */}
          <mask id="path-mask">
            <motion.path
              d={desktopPath}
              fill="none"
              stroke="white"
              strokeWidth={20}
              style={{ pathLength }}
            />
          </mask>

          {/* Layer 3: Dashed black active line */}
          <path
            d={desktopPath}
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="8 10"
            mask="url(#path-mask)"
          />
        </svg>

        {/* Mobile 3-Layer Path SVG */}
        <svg
          className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 w-4 h-full pointer-events-none z-0"
          viewBox="0 0 4 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 2,0 L 2,100"
            vectorEffect="non-scaling-stroke"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth={2}
            strokeDasharray="4 6"
          />
          <mask id="path-mask-mobile">
            <motion.path
              d="M 2,0 L 2,100"
              vectorEffect="non-scaling-stroke"
              fill="none"
              stroke="white"
              strokeWidth={20}
              style={{ pathLength }}
            />
          </mask>
          <path
            d="M 2,0 L 2,100"
            vectorEffect="non-scaling-stroke"
            fill="none"
            stroke="black"
            strokeWidth={2}
            strokeDasharray="4 6"
            mask="url(#path-mask-mobile)"
          />
        </svg>

        {/* Hanging Cards Container */}
        <div className="flex flex-col gap-8 md:gap-12 items-center md:block relative z-10">
          {skillsContent.cards.map((card, idx) => (
            <TagCard
              key={card.number}
              number={card.number}
              title={card.title}
              text={card.text}
              className={cardPositions[idx]?.className || ''}
              aosType={cardPositions[idx]?.aosType || 'fade-up'}
              aosDelay={cardPositions[idx]?.aosDelay || 100}
              pathLength={pathLength}
              containerRef={containerRef}
            />
          ))}
        </div>

        {/* Hand-written end note */}
        {skillsContent.endText && (
          <div className="hidden md:block absolute top-[1250px] left-[60%] font-['Caveat',cursive] text-3xl text-gray-600 rotate-6 select-none z-20">
            {skillsContent.endText}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services

