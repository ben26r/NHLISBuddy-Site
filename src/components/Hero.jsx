import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef } from "react"
import Logo from "../assets/logo.png"

export default function Hero() {
  const ref = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  // Smooth spring physics
  const springX = useSpring(x, { stiffness: 180, damping: 20 })
  const springY = useSpring(y, { stiffness: 180, damping: 20 })

  const rotateX = useTransform(springY, [-150, 150], [15, -15])
  const rotateY = useTransform(springX, [-150, 150], [-15, 15])

  const shineX = useTransform(springX, [-150, 150], ["30%", "70%"])
  const shineY = useTransform(springY, [-150, 150], ["30%", "70%"])

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

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
            <motion.a
              href="#cta"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded-xl hover:bg-accent transition inline-block"
            >
              Download App
            </motion.a>
            <a 
            href="https://www.paypal.com/donate?hosted_button_id=XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-6 py-3 rounded-xl hover:bg-gray-100 transition"
            >
              Donate
            </a>
          </div>
        </div>

        {/* 3D LOGO */}
        <div
          className="relative perspective-[1600px] flex justify-end"
        >
          <motion.div
            ref={ref}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d"
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 160, damping: 22 }}
            className="relative h-[440px] will-change-transform"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >

            {/* LOGO */}
            <motion.img
              src={Logo}
              alt="NLISBuddy Logo"
              className="relative z-10 h-[440px] rounded-2xl"
              style={{
                transform: "translateZ(40px)",
                filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.25))"
              }}
            />

            {/* SOFTER SHINE */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `radial-gradient(circle at ${shineX} ${shineY}, rgba(255,255,255,0.25), transparent 65%)`,
                transform: "translateZ(60px)"
              }}
            />

            {/* SOFTER GLOW */}
            <motion.div
              className="absolute inset-0 rounded-2xl blur-3xl opacity-30"
              style={{
                background: "radial-gradient(circle, rgba(200,93,1,0.15), transparent 75%)",
                transform: "translateZ(-30px)"
              }}
            />

          </motion.div>
        </div>

      </div>
    </section>
  )
}
