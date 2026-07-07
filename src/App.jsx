import { portfolioData } from './data/portfolioData'
import useScrollReveal from './hooks/useScrollReveal'
import AmbientField from './components/AmbientField'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import StaffRoles from './components/StaffRoles'
import SpecializedSkills from './components/SpecializedSkills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <AmbientField />
      <Nav
        brandImage={portfolioData.hero.profileImage}
        brandName={portfolioData.hero.name}
        items={portfolioData.navItems}
      />
      <main>
        <Hero hero={portfolioData.hero} />
        <About about={portfolioData.about} />
        <StaffRoles featuredRoles={portfolioData.featuredRoles} pastRoles={portfolioData.pastRoles} />
        <SpecializedSkills skills={portfolioData.specializedSkills} />
        <Contact contact={portfolioData.contact} />
      </main>
      <Footer name={portfolioData.hero.name} />
    </>
  )
}
