import AdBidSection from '@/components/sections/AdBidSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] mb-6">
              Global Media Reach
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
              A boutique digital advertising agency that delivers exceptional results through innovative strategies and cutting-edge technology.
            </p>
            <div className="space-x-4">
              <button className="px-6 py-3 bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] text-white font-medium rounded-full hover:shadow-[0_0_15px_rgba(240,90,40,0.6)] transition-all duration-300 hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] mb-4">
              What We Do
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We offer comprehensive digital advertising solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(30,30,30,0.8)] h-full flex flex-col">
              <div className="mb-4">
                <span className="inline-block text-sm font-semibold text-white bg-[#F05A28] px-3 py-1 rounded-full mb-4">STRATEGY</span>
                <h3 className="text-xl font-bold text-white mb-2">Strategic Planning</h3>
                <p className="text-gray-300 mb-4">
                  Custom marketing strategies based on deep market analysis and consumer behavior insights.
                </p>
              </div>
              <div className="mt-auto">
                <a href="#" className="text-[#F05A28] hover:text-[#8E2DE2] transition-colors duration-300 inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(30,30,30,0.8)] h-full flex flex-col">
              <div className="mb-4">
                <span className="inline-block text-sm font-semibold text-white bg-[#8E2DE2] px-3 py-1 rounded-full mb-4">TECH</span>
                <h3 className="text-xl font-bold text-white mb-2">Programmatic Advertising</h3>
                <p className="text-gray-300 mb-4">
                  Automated ad buying and optimization across multiple channels for maximum ROI.
                </p>
              </div>
              <div className="mt-auto">
                <a href="#" className="text-[#8E2DE2] hover:text-[#F05A28] transition-colors duration-300 inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-800 p-6 rounded-lg hover:transform hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_25px_rgba(30,30,30,0.8)] h-full flex flex-col">
              <div className="mb-4">
                <span className="inline-block text-sm font-semibold text-white bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] px-3 py-1 rounded-full mb-4">DOOH</span>
                <h3 className="text-xl font-bold text-white mb-2">Digital Out-of-Home</h3>
                <p className="text-gray-300 mb-4">
                  Targeted digital advertising on billboards, kiosks, and other public displays with precise audience measurement.
                </p>
              </div>
              <div className="mt-auto">
                <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] hover:opacity-80 transition-opacity duration-300 inline-flex items-center">
                  Learn more
                  <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdBid Technology Section */}
      <AdBidSection />

      {/* More sections would follow... */}
    </div>
  );
}