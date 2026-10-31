import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import TechnicalSkills from './components/TechnicalSkills'
import Projects from './components/Projects'
import Internships from './components/Internships'
import Leadership from './components/Leadership'
import SoftSkills from './components/SoftSkills'
import Footer from './components/Footer'
import { internshipsList, leadershipList } from './data/portfolioData'

function App() {
  const hasInternships = Boolean(internshipsList && internshipsList.length > 0)
  const hasLeadership = Boolean(leadershipList && leadershipList.length > 0)

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <TechnicalSkills />
      <Projects />
      {hasInternships && <Internships />}
      {hasLeadership && <Leadership />}
      <SoftSkills />
      <Footer />
    </>
  )
}

export default App
