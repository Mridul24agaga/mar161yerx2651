"use client"
import MarkupXParticles from "./markupx-particles"
import { Inter, Montserrat, Dancing_Script } from "next/font/google"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"

// Load fonts from Google Fonts
const inter = Inter({ subsets: ["latin"] })
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "500", "700", "900"], // Added more weight options
})
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export default function Home() {
  // State to track viewport size
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Refs for scroll animations
  const coffeePatternRef = useRef(null)
  const welcomeRef = useRef(null)
  const markupxStyleRef = useRef(null)
  const buildLaunchRef = useRef(null)
  const futureRef = useRef(null)
  const productsRef = useRef(null)
  const cardsRef = useRef(null)
  const builtForRef = useRef(null)
  const differentRef = useRef(null)
  const contactRef = useRef(null)

  // InView states
  const coffeePatternInView = useInView(coffeePatternRef, { once: false, amount: 0.2 })
  const welcomeInView = useInView(welcomeRef, { once: true, amount: 0.5 })
  const markupxStyleInView = useInView(markupxStyleRef, { once: true, amount: 0.5 })
  const buildLaunchInView = useInView(buildLaunchRef, { once: true, amount: 0.5 })
  const futureInView = useInView(futureRef, { once: true, amount: 0.5 })
  const productsInView = useInView(productsRef, { once: true, amount: 0.3 })
  const cardsInView = useInView(cardsRef, { once: true, amount: 0.2 })
  const builtForInView = useInView(builtForRef, { once: true, amount: 0.3 })
  const differentInView = useInView(differentRef, { once: true, amount: 0.3 })
  const contactInView = useInView(contactRef, { once: true, amount: 0.3 })

  // Scroll animations
  const { scrollY } = useScroll()
  const coffeePatternOpacity = useTransform(scrollY, [0, 300], [0, 1])
  const coffeePatternScale = useTransform(scrollY, [0, 300], [0.95, 1])

  // Effect to handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }

    // Initial check
    handleResize()

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  }

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <main className={`min-h-screen bg-black text-white overflow-hidden ${inter.className}`}>
      {/* Hero Section with Particles - Unchanged */}
      <section className="h-screen relative">
        <MarkupXParticles />
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-white/70 mb-2 text-sm">Scroll to explore</p>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-70"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* Coffee Pattern Background Section */}
      <motion.section
        ref={coffeePatternRef}
        className="relative min-h-screen coffee-pattern-background"
        style={{ opacity: coffeePatternOpacity, scale: coffeePatternScale }}
      >
        {/* Gradient overlay to merge with black at the top */}
        <div
          className="absolute top-0 left-0 right-0 z-10 h-64"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
          }}
        ></div>

        {/* Content overlay */}
        <div className="relative z-30 container mx-auto px-4 sm:px-6 text-center max-w-5xl py-20 md:py-24 lg:py-28">
          {/* Script font heading */}
          <motion.h2
            ref={welcomeRef}
            variants={fadeIn}
            initial="hidden"
            animate={welcomeInView ? "visible" : "hidden"}
            className={`${dancingScript.className} text-3xl sm:text-4xl lg:text-5xl text-white mb-12 sm:mb-16 leading-relaxed`}
          >
            Welcome
            <br />
            to the
            <br />
            New Era of Startup Marketing
          </motion.h2>

          {/* MARKUPX STYLE */}
          <motion.div
            ref={markupxStyleRef}
            variants={scaleUp}
            initial="hidden"
            animate={markupxStyleInView ? "visible" : "hidden"}
            className="mb-10 sm:mb-12"
          >
            <h1
              className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight`}
            >
              <span className="text-orange-500">MARKUPX</span> <span className="text-white">STYLE</span>
            </h1>
          </motion.div>

          {/* BUILD. LAUNCH. AND SCALE IN MINUTES */}
          <motion.p
            ref={buildLaunchRef}
            variants={fadeIn}
            initial="hidden"
            animate={buildLaunchInView ? "visible" : "hidden"}
            className={`${montserrat.className} text-lg sm:text-xl md:text-2xl text-white tracking-widest font-light mb-16 sm:mb-24`}
          >
            BUILD. LAUNCH. AND SCALE IN MINUTES
          </motion.p>

          {/* Bottom text */}
          <motion.div
            ref={futureRef}
            variants={staggerContainer}
            initial="hidden"
            animate={futureInView ? "visible" : "hidden"}
            className="mt-12 sm:mt-16"
          >
            <motion.p
              variants={slideFromLeft}
              className="text-lg sm:text-xl md:text-2xl text-white mb-3 sm:mb-4 italic"
            >
              You're building the future
            </motion.p>
            <motion.p variants={slideFromRight} className="text-lg sm:text-xl md:text-2xl text-white italic">
              We're building the tools that get you there faster
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Products Section with black background */}
      <section className="relative py-20 sm:py-24 lg:py-28 bg-black">
        {/* Content overlay */}
        <div className="relative z-30 container mx-auto px-4 sm:px-6">
          {/* BUILDING FOR BUILDERS heading */}
          <motion.div
            ref={productsRef}
            variants={fadeIn}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2
              className={`${montserrat.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-wider inline-block relative`}
            >
              BUILDING FOR BUILDERS
              <motion.div
                className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                initial={{ scaleX: 0, opacity: 0 }}
                animate={productsInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              ></motion.div>
            </h2>
          </motion.div>

          {/* OUR PRODUCTS heading */}
          <motion.h3
            variants={fadeIn}
            initial="hidden"
            animate={productsInView ? "visible" : "hidden"}
            transition={{ delay: 0.3 }}
            className={`${montserrat.className} text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-12 sm:mb-16`}
          >
            OUR PRODUCTS
          </motion.h3>

          {/* Products Grid - Only 3 cards */}
          <motion.div
            ref={cardsRef}
            variants={staggerContainer}
            initial="hidden"
            animate={cardsInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-24 sm:mb-28 lg:mb-32"
          >
            {/* Product 1 */}
            <motion.div
              variants={cardVariants}
              className="bg-orange-500 rounded-3xl overflow-hidden shadow-lg shadow-orange-500/20 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-orange-500/30 cursor-pointer"
            >
              <div className="p-6 sm:p-8 flex flex-col h-full">
                <h3 className={`${montserrat.className} text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4`}>
                  GetMoreBacklinks.org
                </h3>
                <p className="text-white/90 mb-5 sm:mb-6 flex-grow">High-quality backlinks, fully automated.</p>
                <div className="flex justify-end mt-auto">
                  <button className="bg-white/20 hover:bg-white/30 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Product 2 */}
            <motion.div
              variants={cardVariants}
              className="bg-orange-500 rounded-3xl overflow-hidden shadow-lg shadow-orange-500/20 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-orange-500/30 cursor-pointer"
            >
              <div className="p-6 sm:p-8 flex flex-col h-full">
                <h3 className={`${montserrat.className} text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4`}>
                  BlogoSocial.com
                </h3>
                <p className="text-white/90 mb-5 sm:mb-6 flex-grow">
                  Instantly turn blogs into viral social media posts.
                </p>
                <div className="flex justify-end mt-auto">
                  <button className="bg-white/20 hover:bg-white/30 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Product 3 */}
            <motion.div
              variants={cardVariants}
              className="bg-orange-500 rounded-3xl overflow-hidden shadow-lg shadow-orange-500/20 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-orange-500/30 cursor-pointer"
            >
              <div className="p-6 sm:p-8 flex flex-col h-full">
                <h3 className={`${montserrat.className} text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4`}>
                  GetMoreSEO.org
                </h3>
                <p className="text-white/90 mb-5 sm:mb-6 flex-grow">Simplified SEO to rank faster and grow smarter.</p>
                <div className="flex justify-end mt-auto">
                  <button className="bg-white/20 hover:bg-white/30 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-colors font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Built For Section */}
          <motion.div
            ref={builtForRef}
            variants={fadeIn}
            initial="hidden"
            animate={builtForInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto"
          >
            <h3
              className={`${montserrat.className} text-2xl sm:text-3xl font-bold text-white mb-12 sm:mb-16 text-center`}
            >
              <span className="relative inline-block">
                Built for:
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500/50"
                  initial={{ width: 0 }}
                  animate={builtForInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                ></motion.div>
              </span>
            </h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={builtForInView ? "visible" : "hidden"}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 text-center"
            >
              {/* Audience 1 */}
              <motion.div
                variants={cardVariants}
                className="flex flex-col items-center bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-orange-500/10 hover:border-orange-500/30 transition-colors"
              >
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-lg shadow-orange-500/20"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-10 sm:h-10"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </motion.div>
                <h4 className={`${montserrat.className} text-xl sm:text-2xl font-bold text-white mb-2`}>
                  Solopreneurs
                </h4>
                <p className="text-gray-300">Building empires single-handedly</p>
              </motion.div>

              {/* Audience 2 */}
              <motion.div
                variants={cardVariants}
                className="flex flex-col items-center bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-orange-500/10 hover:border-orange-500/30 transition-colors"
              >
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-lg shadow-orange-500/20"
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-10 sm:h-10"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </motion.div>
                <h4 className={`${montserrat.className} text-xl sm:text-2xl font-bold text-white mb-2`}>
                  Startup Founders
                </h4>
                <p className="text-gray-300">Disrupting industries with innovation</p>
              </motion.div>

              {/* Audience 3 */}
              <motion.div
                variants={cardVariants}
                className="flex flex-col items-center bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-orange-500/10 hover:border-orange-500/30 transition-colors sm:col-span-2 lg:col-span-1 sm:max-w-md mx-auto lg:max-w-none"
              >
                <motion.div
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-5 sm:mb-6 shadow-lg shadow-orange-500/20"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="sm:w-10 sm:h-10"
                  >
                    <path d="M12 20h9"></path>
                    <path d="M16.5 3.5a2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
                  </svg>
                </motion.div>
                <h4 className={`${montserrat.className} text-xl sm:text-2xl font-bold text-white mb-2`}>
                  Growth-Obsessed Creators
                </h4>
                <p className="text-gray-300">(people too busy to juggle 17 different platforms)</p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* What Makes Us Different Section */}
          <motion.div
            ref={differentRef}
            variants={fadeIn}
            initial="hidden"
            animate={differentInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto mt-32 mb-32"
          >
            <h3
              className={`${montserrat.className} text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12 sm:mb-16 text-center`}
            >
              <span className="relative inline-block">
                What Makes Us Different
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500/50"
                  initial={{ width: 0 }}
                  animate={differentInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                ></motion.div>
              </span>
            </h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={differentInView ? "visible" : "hidden"}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.p variants={fadeIn} className="text-xl sm:text-2xl text-white mb-6">
                We're founders first, marketers second.
              </motion.p>
              <motion.p variants={fadeIn} className="text-xl sm:text-2xl text-white mb-6">
                We didn't just build tools —
              </motion.p>
              <motion.p variants={fadeIn} className="text-xl sm:text-2xl text-white mb-10">
                We built the growth engines we wished we had when starting out.
              </motion.p>
              <motion.p variants={scaleUp} className="text-xl sm:text-2xl text-orange-500 font-semibold">
                Now, they're yours.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Contact Us Section */}
          <motion.div
            ref={contactRef}
            variants={fadeIn}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
            className="max-w-5xl mx-auto mt-32 mb-20"
          >
            <h3
              className={`${montserrat.className} text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12 sm:mb-16 text-center`}
            >
              <span className="relative inline-block">
                Contact Us
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-0.5 bg-orange-500/50"
                  initial={{ width: 0 }}
                  animate={contactInView ? { width: "100%" } : { width: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                ></motion.div>
              </span>
            </h3>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={contactInView ? "visible" : "hidden"}
              className="text-center max-w-3xl mx-auto"
            >
              <motion.p variants={fadeIn} className="text-xl sm:text-2xl text-white mb-10">
                Got a project? Crazy idea? Or just want to say hi?
                <br />
                We're always listening.
              </motion.p>

              <motion.a
                variants={scaleUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:Founder@markupxbrands.com"
                className="text-xl sm:text-2xl text-orange-500 font-semibold hover:text-orange-400 transition-colors inline-flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-mail"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
                Founder@markupxbrands.com
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CSS for the coffee pattern background */}
      <style jsx global>{`
        .coffee-pattern-background {
          position: relative;
          background-color: #000000;
        }
        
        .coffee-pattern-background::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('/coffee-pattern.png');
          background-size: 600px 600px;
          background-repeat: repeat;
          opacity: 0.8;
          filter: brightness(2) contrast(0.9);
          z-index: 0;
          mix-blend-mode: lighten;
          animation: subtleFloat 120s infinite linear;
        }
        
        @keyframes subtleFloat {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 600px 600px;
          }
        }
      `}</style>
    </main>
  )
}
