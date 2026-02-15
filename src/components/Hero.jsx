import { motion } from "framer-motion"
import Logo from "../assets/logo.png"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Simplify Livestock Compliance
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Manage NLIS records, transfers, and audits with ease.
            Built for Australian producers.
          </p>
          <div className="flex gap-4">
            <button className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-accent transition">
              Download App
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Learn More
            </button>
          </div>
        </div>

        <motion.img
          src={Logo}
          alt="NLISBuddy Logo"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-auto h-[500px] filter drop-shadow-[0_0_40px_rgba(200,93,1,0.1)]"
        />
      </div>
    </section>
  )
}
