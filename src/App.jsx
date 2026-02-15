
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import HowItWorks from "./components/HowItWorks.jsx"
import CTA from "./components/CTA.jsx"
import Footer from "./components/Footer.jsx"
import './App.css'

export default function App() {
  return (
    <div className="bg-light text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  )
}
