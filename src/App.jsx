
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import HowItWorks from "./components/HowItWorks.jsx"
import CTA from "./components/CTA.jsx"
import Footer from "./components/Footer.jsx"
import './App.css'

import AppStoreBadge from "./assets/badges/app-store.svg";
import PlayStoreBadge from "./assets/badges/google-play.svg";



export default function App() {
  return (
    <div className="bg-light text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Ready to Simplify Your NLIS Management?
          </h2>

          <p className="text-white-600 mb-12 max-w-2xl mx-auto">
            Manage livestock compliance and NLIS records directly from your mobile device.
            Available on iOS and Android.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            
            {/* App Store Badge */}
            <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer">
              <img
                src={AppStoreBadge}
                alt="Download on the App Store"
                className="h-14 hover:scale-105 transition-transform duration-200"
              />
            </a>

            {/* Google Play Badge */}
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src={PlayStoreBadge}
                alt="Get it on Google Play"
                className="h-14 hover:scale-105 transition-transform duration-200"
              />
            </a>

          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
