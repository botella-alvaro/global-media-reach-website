import { useState, useEffect, useRef, type FormEvent } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Target, Zap, Database,
  BarChart3, Globe, Shield, Clock, TrendingUp, Users,
  ArrowRight, CheckCircle, Mail,
} from 'lucide-react';

// ─── Animated counter ────────────────────────────────────────────────────────
function AnimatedStat({
  value,
  suffix = '',
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center py-8 px-4">
      <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] font-[Montserrat] tabular-nums">
        {count}{suffix}
      </span>
      <span className="text-gray-500 text-xs uppercase tracking-widest mt-2">{label}</span>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const serviceCards = [
  {
    badge: 'STRATEGY',
    badgeStyle: { background: '#F05A28' },
    icon: Target,
    title: 'Strategic Planning',
    description:
      'Custom marketing strategies based on deep market analysis and consumer behavior insights that drive measurable growth.',
    accentColor: '#F05A28',
  },
  {
    badge: 'TECH',
    badgeStyle: { background: '#8E2DE2' },
    icon: Zap,
    title: 'Programmatic Advertising',
    description:
      'Automated ad buying and optimization across multiple channels for maximum ROI through real-time bidding intelligence.',
    accentColor: '#8E2DE2',
  },
  {
    badge: 'DOOH',
    badgeStyle: { background: 'linear-gradient(90deg, #F05A28, #8E2DE2)' },
    icon: Database,
    title: 'Digital Out-of-Home',
    description:
      'Targeted digital advertising on billboards, kiosks, and public displays with precise audience measurement.',
    accentColor: '#F05A28',
  },
];

const benefits = [
  {
    icon: Globe,
    title: 'Global Scale',
    description:
      'Access premium inventory across 50+ ad platforms worldwide, reaching your audience wherever they are.',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Results',
    description:
      'Every decision is backed by real-time data and machine learning, eliminating guesswork from your campaigns.',
  },
  {
    icon: Shield,
    title: 'Brand Safety',
    description:
      'Advanced contextual analysis ensures your ads never appear alongside harmful or brand-damaging content.',
  },
  {
    icon: Clock,
    title: 'Real-Time Optimization',
    description:
      'AdBid continuously adjusts bids and targeting every millisecond to maximize campaign performance.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Reporting',
    description:
      'Full visibility into every dollar spent with detailed dashboards and customizable performance reports.',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description:
      'Your team of expert media buyers and strategists is always available to guide your campaign decisions.',
  },
];

const platformLogos = [
  'Google', 'Meta', 'TikTok', 'LinkedIn', 'Amazon', 'DV360',
  'The Trade Desk', 'Xandr', 'Taboola', 'Outbrain',
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section id="home" className="relative pt-28 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        {/* Dot grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 right-1/4 w-[700px] h-[700px] bg-[#8E2DE2]/8 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/5 w-[500px] h-[500px] bg-[#F05A28]/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Pill badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-8 px-5 py-2 bg-[#1a1a2e]/80 border border-[#F05A28]/25 rounded-full text-sm text-gray-300 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#F05A28] animate-pulse" />
              Boutique Digital Advertising Agency
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.08] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] via-[#c44aab] to-[#8E2DE2]"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              Global Media Reach
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              A boutique digital advertising agency that delivers exceptional results through
              innovative strategies and cutting-edge proprietary technology.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
            >
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-4 bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] text-white font-semibold rounded-full hover:shadow-[0_0_40px_rgba(240,90,40,0.45)] transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Services
              </button>
            </motion.div>

            {/* Trust line */}
            <motion.p
              className="mt-8 text-gray-600 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Trusted by growth-stage brands across 20+ markets
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────────────────── */}
      <section className="border-y border-gray-800/60 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800/50">
            <AnimatedStat value={50}  suffix="+"  label="Ad Platforms" />
            <AnimatedStat value={95}  suffix="%"  label="Targeting Accuracy" />
            <AnimatedStat value={40}  suffix="%"  label="Higher Conversions" />
            <AnimatedStat value={100} suffix="+"  label="Campaigns Managed" />
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section id="services" className="py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#F05A28]">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] mb-4">
              Comprehensive Ad Solutions
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We offer comprehensive digital advertising solutions tailored to your business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceCards.map((card, i) => (
              <motion.div
                key={card.title}
                className="group relative rounded-2xl p-px overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {/* Gradient border that fades in on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'linear-gradient(135deg, #F05A28, #8E2DE2)' }}
                />
                {/* Card inner */}
                <div className="relative bg-[#111] rounded-[15px] p-7 h-full flex flex-col">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F05A28]/15 to-[#8E2DE2]/15 border border-[#F05A28]/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-5 h-5 text-[#F05A28]" />
                  </div>

                  {/* Badge */}
                  <span
                    className="inline-block text-xs font-bold text-white px-3 py-1 rounded-full mb-4 w-fit"
                    style={card.badgeStyle}
                  >
                    {card.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mb-3">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-1">{card.description}</p>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200"
                    style={{ color: card.accentColor }}
                  >
                    Learn more
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ────────────────────────────────────────────────────── */}
      <section id="technology" className="py-24 bg-[#0D0D0D] relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.075)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#8E2DE2]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#F05A28]/10 rounded-full blur-[100px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#F05A28]">
              Our Technology
            </span>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]">
              AdBid: Proprietary Platform
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Our data-driven technology platform delivers superior performance through advanced targeting and real-time optimization.
            </p>
          </div>

          {/* AdBid Platform - Radial Layout */}
          <div className="relative">
            {/* Central Node */}
            <div className="flex justify-center mb-16 md:mb-40">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="absolute -inset-3 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #F05A28, #8E2DE2)' }}
                  animate={{ opacity: [0.6, 0.8, 0.6], scale: [0.98, 1.02, 0.98] }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                />
                <motion.div
                  className="absolute -inset-1.5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #F05A28, #8E2DE2)' }}
                  animate={{ opacity: [0.7, 0.9, 0.7], scale: [0.99, 1.01, 0.99] }}
                  transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
                />
                <div className="w-36 h-36 md:w-48 md:h-48 bg-[#0A0A0A] rounded-full flex flex-col items-center justify-center p-4 border border-[#333] z-20 relative">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute inset-2 rounded-full opacity-20"
                    style={{ background: 'conic-gradient(from 90deg, #F05A28, #8E2DE2, #F05A28)' }}
                  />
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <Zap className="text-[#F05A28] mb-2 w-10 h-10" />
                  </motion.div>
                  <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]">
                    AdBid
                  </h3>
                  <p className="text-sm text-white mt-1 font-medium">AI-Powered Platform</p>
                  <div className="flex space-x-1.5 mt-3">
                    {[0, 0.5, 1].map((delay, idx) => (
                      <motion.div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${idx === 1 ? 'bg-[#8E2DE2]' : 'bg-[#F05A28]'}`}
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
              {/* Connector lines – desktop only */}
              <div className="hidden md:block absolute inset-0 z-0">
                <motion.div
                  className="absolute left-1/2 top-0 w-px h-24 -translate-x-1/2 -translate-y-32"
                  style={{ background: 'linear-gradient(to top, transparent, rgba(240, 90, 40, 0.6))' }}
                  initial={{ height: 0, opacity: 0 }}
                  whileInView={{ height: 96, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
                <motion.div
                  className="absolute left-[16.6%] top-0 transform -translate-y-16 -rotate-45"
                  style={{ height: '1px', width: '160px', background: 'linear-gradient(to left, transparent, rgba(142, 45, 226, 0.6))', transformOrigin: 'center right' }}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 160, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
                <motion.div
                  className="absolute right-[16.6%] top-0 transform -translate-y-16 rotate-45"
                  style={{ height: '1px', width: '160px', background: 'linear-gradient(to right, transparent, rgba(240, 90, 40, 0.6))', transformOrigin: 'center left' }}
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 160, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </div>

              {[
                {
                  icon: Target,
                  accentClass: 'from-[#F05A28] to-[#8E2DE2]',
                  borderHover: 'group-hover:border-[#F05A28]',
                  shadowHover: 'group-hover:shadow-[0_0_25px_rgba(240,90,40,0.15)]',
                  iconColor: 'text-[#F05A28]',
                  title: 'Precision',
                  short: 'Targeting accuracy up to 95% with AI-driven optimization',
                  detail: 'Advanced algorithms analyze countless data points in real-time to deliver highly precise targeting, resulting in up to 95% accuracy. This precision dramatically increases engagement and conversion rates while reducing wasteful ad spend.',
                  delay: 0.2,
                },
                {
                  icon: Zap,
                  accentClass: 'from-[#8E2DE2] to-[#4a00e0]',
                  borderHover: 'group-hover:border-[#8E2DE2]',
                  shadowHover: 'group-hover:shadow-[0_0_25px_rgba(142,45,226,0.15)]',
                  iconColor: 'text-[#8E2DE2]',
                  title: 'Performance',
                  short: '40% higher conversion rates compared to traditional platforms',
                  detail: 'Our platform outperforms traditional advertising solutions by leveraging machine learning to continuously optimize campaigns in real-time. This dynamic approach results in conversion rates that average 40% higher than industry standards.',
                  delay: 0.3,
                },
                {
                  icon: Database,
                  accentClass: 'from-[#F05A28] to-[#8E2DE2]',
                  borderHover: 'group-hover:border-[#F05A28]',
                  shadowHover: 'group-hover:shadow-[0_0_25px_rgba(240,90,40,0.15)]',
                  iconColor: 'text-[#F05A28]',
                  title: 'Integration',
                  short: 'Seamless connection with 50+ major ad platforms and data sources',
                  detail: 'AdBid connects seamlessly with over 50 major advertising platforms, analytics tools, and data sources. This extensive integration capability enables unified campaign management and comprehensive cross-platform data analysis within a single interface.',
                  delay: 0.4,
                },
              ].map((card) => (
                <motion.div
                  key={card.title}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay, duration: 0.5 }}
                >
                  <div className={`bg-[#111] rounded-2xl overflow-hidden h-full transition-all duration-300 ${card.shadowHover} border border-gray-800 ${card.borderHover}`}>
                    <div className="p-6 h-full flex flex-col relative group-hover:-translate-y-5 transition-transform duration-300">
                      <div className={`bg-gradient-to-br ${card.accentClass} w-16 h-16 rounded-xl flex items-center justify-center mb-5 group-hover:animate-pulse transition-all duration-300`}>
                        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.7 }}>
                          <card.icon className="w-8 h-8 text-white" />
                        </motion.div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
                      <p className="text-[#F0F0F0] text-sm">{card.short}</p>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-black/90 flex flex-col items-center justify-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl">
                        <card.icon className={`w-10 h-10 ${card.iconColor} mb-4`} />
                        <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                        <p className="text-[#F0F0F0] text-sm text-center">{card.detail}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ──────────────────────────────────────────────────────── */}
      <section id="benefits" className="py-24 bg-[#080808] relative overflow-hidden">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />
        {/* Top divider glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#F05A28]/30 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#F05A28]">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] mb-4">
              Built for Results
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Everything we do is designed to maximize the performance of your advertising investment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="group p-6 bg-[#111]/50 border border-gray-800/50 rounded-2xl hover:border-[#F05A28]/30 hover:bg-[#111]/80 transition-all duration-300 hover:shadow-[0_0_20px_rgba(240,90,40,0.07)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F05A28]/12 to-[#8E2DE2]/12 border border-[#F05A28]/18 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <b.icon className="w-5 h-5 text-[#F05A28]" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Platform logos strip */}
          <motion.div
            className="mt-16 pt-12 border-t border-gray-800/40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-center text-gray-600 text-xs uppercase tracking-widest mb-6">Connected Platforms</p>
            <div className="flex flex-wrap justify-center gap-4">
              {platformLogos.map((name) => (
                <span
                  key={name}
                  className="px-4 py-2 rounded-lg bg-[#111] border border-gray-800/60 text-gray-500 text-xs font-medium hover:text-gray-300 hover:border-gray-700 transition-all duration-200"
                >
                  {name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Contact / CTA ─────────────────────────────────────────────────── */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F05A28]/4 via-transparent to-[#8E2DE2]/4 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#8E2DE2]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#F05A28]">
                Get In Touch
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] mb-4">
                Ready to Scale?
              </h2>
              <p className="text-gray-400 text-lg">
                Get a free audit of your current advertising strategy and discover where you can improve performance.
              </p>
            </motion.div>

            <motion.div
              className="bg-[#111]/80 border border-gray-800/60 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 gap-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F05A28] to-[#8E2DE2] flex items-center justify-center">
                      <CheckCircle className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Request Received!</h3>
                    <p className="text-gray-400 text-sm text-center max-w-xs">
                      We'll review your details and reach out within 24 hours with your free audit.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    id="audit"
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Full Name</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                          placeholder="John Smith"
                          className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#F05A28]/50 transition-colors duration-300 text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-sm mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                          placeholder="john@company.com"
                          className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#F05A28]/50 transition-colors duration-300 text-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Company / Website</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData((p) => ({ ...p, company: e.target.value }))}
                        placeholder="Your company or website URL"
                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-700 focus:outline-none focus:border-[#F05A28]/50 transition-colors duration-300 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-400 text-sm mb-2">Monthly Ad Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData((p) => ({ ...p, budget: e.target.value }))}
                        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 text-gray-300 focus:outline-none focus:border-[#F05A28]/50 transition-colors duration-300 text-sm appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-[#111]">Select your budget range</option>
                        <option value="under10k" className="bg-[#111]">Under $10,000</option>
                        <option value="10k-50k" className="bg-[#111]">$10,000 – $50,000</option>
                        <option value="50k-200k" className="bg-[#111]">$50,000 – $200,000</option>
                        <option value="200k+" className="bg-[#111]">$200,000+</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] text-white font-semibold rounded-xl hover:shadow-[0_0_35px_rgba(240,90,40,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                    >
                      Request Free Audit
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </button>

                    <p className="text-center text-gray-700 text-xs mt-2">
                      No commitment required. We'll respond within 24 hours.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

            {/* Contact details row */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a href="mailto:hello@globalmediareach.com" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
                <Mail className="w-4 h-4 text-[#F05A28]" />
                hello@globalmediareach.com
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer className="py-10 border-t border-gray-800/50 bg-[#080808]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] flex items-center justify-center">
                <span className="text-white font-bold text-sm">G</span>
              </div>
              <span className="font-bold text-white text-sm">Global Media Reach</span>
            </a>

            {/* Links */}
            <div className="flex flex-wrap gap-5 text-xs text-gray-500">
              {['home', 'services', 'technology', 'benefits', 'contact'].map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="hover:text-gray-300 transition-colors capitalize"
                >
                  {id === 'home' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-gray-700 text-xs">
              © {new Date().getFullYear()} Global Media Reach
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
