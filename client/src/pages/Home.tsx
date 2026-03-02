import { useState, useEffect, useRef, type FormEvent } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  Target, Zap, Database,
  BarChart3, Globe, Shield, Clock, TrendingUp, Users,
  ArrowRight, CheckCircle, Mail,
} from 'lucide-react';

// ─── Live Auction Feed data ───────────────────────────────────────────────────
const AD_PLATFORMS = [
  { code: 'GGL', name: 'Google',        color: '#4285F4' },
  { code: 'MTA', name: 'Meta',          color: '#1877F2' },
  { code: 'TTK', name: 'TikTok',        color: '#FF0050' },
  { code: 'LKD', name: 'LinkedIn',      color: '#0A66C2' },
  { code: 'AMZ', name: 'Amazon',        color: '#FF9900' },
  { code: 'DV3', name: 'DV360',         color: '#669DF6' },
  { code: 'TTD', name: 'Trade Desk',    color: '#00BC8C' },
  { code: 'XDR', name: 'Xandr',         color: '#8E2DE2' },
];
const AD_CAMPAIGNS = [
  'Retarget · Cart Abandon',
  'Prospecting · Lookalike',
  'Brand Awareness · Video',
  'Dynamic · Product Feed',
  'DOOH · CBD Display',
  'CTV · 15s Preroll',
  'Native · Blog Traffic',
  'Search · High Intent',
  'Display · Contextual',
  'Video · In-Stream',
  'App Install · iOS',
  'Remarketing · Upsell',
];
const BID_STATUSES = [
  { label: 'WON',       color: '#22c55e', bg: 'rgba(34,197,94,0.12)'   },
  { label: 'WON',       color: '#22c55e', bg: 'rgba(34,197,94,0.12)'   },
  { label: 'OPTIMIZED', color: '#F05A28', bg: 'rgba(240,90,40,0.12)'   },
  { label: 'BIDDING',   color: '#8E2DE2', bg: 'rgba(142,45,226,0.12)'  },
];

type BidEvent = {
  id: number;
  platform: typeof AD_PLATFORMS[0];
  campaign: string;
  cpm: string;
  delta: string;
  isUp: boolean;
  status: typeof BID_STATUSES[0];
  time: string;
};

let _bidId = 0;
function makeBidEvent(): BidEvent {
  const platform  = AD_PLATFORMS[Math.floor(Math.random() * AD_PLATFORMS.length)];
  const campaign  = AD_CAMPAIGNS[Math.floor(Math.random() * AD_CAMPAIGNS.length)];
  const cpm       = (Math.random() * 9 + 0.6).toFixed(2);
  const pct       = Math.floor(Math.random() * 32 + 2);
  const isUp      = Math.random() > 0.28;
  const delta     = `${isUp ? '+' : '-'}${pct}%`;
  const status    = BID_STATUSES[Math.floor(Math.random() * BID_STATUSES.length)];
  const now       = new Date();
  const time      = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
  return { id: _bidId++, platform, campaign, cpm, delta, isUp, status, time };
}

const SEED_EVENTS: BidEvent[] = Array.from({ length: 9 }, makeBidEvent);

// ─── Live Auction Section ─────────────────────────────────────────────────────
function LiveAuctionSection() {
  const ref      = useRef<HTMLDivElement>(null);
  const inView   = useInView(ref, { once: false, margin: '-100px' });
  const [events, setEvents] = useState<BidEvent[]>(SEED_EVENTS);
  const [auctionCount, setAuctionCount] = useState(47_284_391);

  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setEvents(prev => [makeBidEvent(), ...prev].slice(0, 9));
      setAuctionCount(c => c + Math.floor(Math.random() * 180 + 60));
    }, 1300);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#06060a] border-y border-gray-800/50">
      {/* Scan-line texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{ backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.15) 3px,rgba(0,0,0,0.15) 4px)' }}
      />
      {/* Ambient glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[300px] bg-[#8E2DE2]/6 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/5 w-[400px] h-[200px] bg-[#F05A28]/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* LEFT ── headline + metrics */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            {/* System live badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-[#22c55e]/8 border border-[#22c55e]/25 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#22c55e]" />
              </span>
              <span className="text-[#22c55e] text-xs font-mono tracking-[0.18em] uppercase">System Live</span>
            </div>

            {/* Headline */}
            <h2 className="text-4xl md:text-5xl lg:text-[3.2rem] leading-[1.05] mb-4 text-white">
              Every Bid Is<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]">
                Smarter Than<br />The Last
              </span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-md">
              Our proprietary engine works behind every impression — so your budget always
              ends up where it performs, not where it's wasted.
            </p>

            {/* Live auction counter */}
            <div className="mb-8 p-5 rounded-xl border border-gray-800/60 bg-[#0a0a0f]">
              <div className="text-gray-500 text-[10px] font-mono tracking-[0.2em] uppercase mb-1.5">Auctions Won Today</div>
              <div className="text-4xl lg:text-5xl font-mono font-bold text-white tabular-nums tracking-tight">
                {auctionCount.toLocaleString()}
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <span className="w-1 h-1 rounded-full bg-[#22c55e] animate-pulse" />
                <span className="text-[#22c55e] text-[10px] font-mono tracking-widest">+{Math.floor(Math.random()*80+40)}/sec</span>
              </div>
            </div>

            {/* Three small stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { val: '11ms',  label: 'Bid Latency'  },
                { val: '50+',   label: 'DSP Partners'  },
                { val: '99.8%', label: 'Uptime SLA'   },
              ].map(({ val, label }) => (
                <div key={label} className="rounded-xl border border-gray-800/50 bg-[#0a0a0f] p-4 text-center">
                  <div className="text-xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] tabular-nums">{val}</div>
                  <div className="text-gray-600 text-[10px] mt-1 leading-tight font-mono uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT ── live bid feed */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-gray-800/60 bg-[#08080e] overflow-hidden shadow-[0_0_60px_rgba(142,45,226,0.07)]"
          >
            {/* Feed header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-800/60 bg-[#0d0d14]">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#22c55e]" />
                </span>
                <span className="text-gray-400 text-[10px] font-mono tracking-[0.2em] uppercase">Copilot Ads · Auction Stream</span>
              </div>
              <span className="text-[#22c55e] text-[10px] font-mono tracking-widest">LIVE</span>
            </div>

            {/* Column labels */}
            <div className="grid grid-cols-[44px_1fr_52px_48px_78px] gap-2 px-5 py-2 border-b border-gray-800/30">
              {['DSP','CAMPAIGN','CPM','ΔROAS','STATUS'].map(h => (
                <span key={h} className="text-gray-700 text-[9px] font-mono uppercase tracking-wider truncate">{h}</span>
              ))}
            </div>

            {/* Rows */}
            <div className="overflow-hidden">
              <AnimatePresence initial={false}>
                {events.map((ev, i) => (
                  <motion.div
                    key={ev.id}
                    initial={{ opacity: 0, y: -28, backgroundColor: 'rgba(240,90,40,0.07)' }}
                    animate={{ opacity: Math.max(1 - i * 0.095, 0.15), y: 0, backgroundColor: 'rgba(0,0,0,0)' }}
                    exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                    transition={{ duration: 0.32, ease: 'easeOut' }}
                    className="grid grid-cols-[44px_1fr_52px_48px_78px] gap-2 px-5 py-2.5 items-center border-b border-gray-800/20 last:border-0"
                  >
                    {/* Platform */}
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: ev.platform.color }} />
                      <span className="text-[9px] font-mono text-gray-500 truncate">{ev.platform.code}</span>
                    </div>

                    {/* Campaign */}
                    <span className="text-[11px] font-mono text-gray-300 truncate">{ev.campaign}</span>

                    {/* CPM */}
                    <span className="text-[11px] font-mono text-white tabular-nums">${ev.cpm}</span>

                    {/* Delta */}
                    <span className={`text-[11px] font-mono tabular-nums ${ev.isUp ? 'text-[#22c55e]' : 'text-red-400'}`}>
                      {ev.isUp ? '▲' : '▼'} {ev.delta}
                    </span>

                    {/* Status chip */}
                    <span
                      className="text-[9px] font-mono px-2 py-0.5 rounded-full text-center whitespace-nowrap"
                      style={{ color: ev.status.color, backgroundColor: ev.status.bg }}
                    >
                      {ev.status.label}
                    </span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Footer ticker */}
            <div className="border-t border-gray-800/40 px-5 py-2.5 bg-[#0d0d14] flex items-center gap-3">
              <span className="text-gray-700 text-[9px] font-mono uppercase tracking-widest">Powered by</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2] text-[10px] font-mono font-bold tracking-wider">COPILOT ADS ENGINE</span>
              <span className="ml-auto text-gray-700 text-[9px] font-mono">v4.1.2</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
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

      {/* ── Live Auction Feed ─────────────────────────────────────────────── */}
      <LiveAuctionSection />

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

      {/* ── Copilot Ads ───────────────────────────────────────────────────── */}
      <section id="technology" className="py-24 bg-[#080808] relative overflow-hidden">
        <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-[#8E2DE2]/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[#F05A28]/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block mb-3 px-4 py-1 bg-[#3D2A55] rounded-full text-sm font-medium text-[#F05A28]">
              Our Technology
            </span>
            <h2 className="font-bold text-4xl md:text-5xl mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]">
              Meet Copilot Ads
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our proprietary AI platform that thinks alongside your team — optimizing every campaign signal in real time.
            </p>
          </motion.div>

          {/* Two-column: copy left, dashboard right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-center">

            {/* Left – feature copy */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55 }}
            >
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 bg-[#F05A28]/10 border border-[#F05A28]/20 rounded-lg">
                <Zap className="w-3.5 h-3.5 text-[#F05A28]" />
                <span className="text-[#F05A28] text-xs font-semibold uppercase tracking-wider">AI-Powered</span>
              </div>

              <h3 className="text-3xl font-bold text-white mb-5 leading-tight">
                The co-pilot your campaigns have been missing
              </h3>

              <p className="text-gray-400 leading-relaxed mb-10">
                Copilot Ads processes billions of bidding signals every second, automatically reallocating budget to top performers and cutting spend on what isn't working — without a single manual tweak.
              </p>

              <div className="space-y-5">
                {[
                  { icon: Target,    label: 'Precision targeting',       desc: 'Up to 95% audience accuracy with AI-driven segmentation' },
                  { icon: Zap,       label: 'Real-time optimization',    desc: 'Bids and budgets adjust every millisecond based on live signals' },
                  { icon: Database,  label: '50+ platform integrations', desc: 'Unified control across all major ad networks and DSPs' },
                  { icon: BarChart3, label: 'Unified attribution',       desc: 'Full-funnel visibility from first impression to final conversion' },
                ].map((f, i) => (
                  <motion.div
                    key={f.label}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#F05A28]/15 to-[#8E2DE2]/15 border border-[#F05A28]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon className="w-4 h-4 text-[#F05A28]" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold mb-0.5">{f.label}</p>
                      <p className="text-gray-500 text-sm">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right – live campaign dashboard card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-2xl border border-gray-800/60 overflow-hidden bg-[#0f0f0f]"
            >
              {/* macOS-style title bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-800/60 bg-[#111]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#28CA42]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block" />
                  <span className="text-gray-500 text-xs font-mono">copilot-ads · live</span>
                </div>
                <span className="text-gray-700 text-xs font-mono">v2.4.1</span>
              </div>

              {/* Dashboard body */}
              <div className="p-6">
                <p className="text-gray-600 text-[10px] uppercase tracking-widest mb-5 font-mono">
                  Active Campaigns
                </p>

                <div className="space-y-5">
                  {[
                    { name: 'Brand Awareness – Q1',       platform: 'Meta · Google',        pct: 84, value: 'ROAS 4.2×', color: '#F05A28' },
                    { name: 'Lead Generation',            platform: 'LinkedIn · Display',   pct: 91, value: 'CVR +40%',  color: '#8E2DE2' },
                    { name: 'Retargeting – Cart Abandon', platform: 'Google · TikTok',      pct: 73, value: 'CPA −28%',  color: '#c44aab' },
                    { name: 'Prospecting – Lookalike',    platform: 'Meta · Programmatic',  pct: 68, value: 'CTR 3.1%',  color: '#F05A28' },
                  ].map((c, i) => (
                    <div key={c.name}>
                      <div className="flex items-start justify-between mb-1.5">
                        <div>
                          <p className="text-white text-xs font-medium leading-snug">{c.name}</p>
                          <p className="text-gray-600 text-[10px] font-mono">{c.platform}</p>
                        </div>
                        <span className="text-xs font-semibold ml-3 flex-shrink-0" style={{ color: c.color }}>
                          {c.value}
                        </span>
                      </div>
                      <div className="h-1.5 bg-gray-800/80 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: `linear-gradient(90deg, ${c.color}, #8E2DE2)` }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${c.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.4 + i * 0.15, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer: live signal */}
                <div className="mt-6 pt-4 border-t border-gray-800/50 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F05A28] animate-pulse inline-block" />
                    <span className="text-gray-600 text-xs font-mono">Optimizing bids in real-time</span>
                  </div>
                  {/* Waveform bars */}
                  <div className="flex items-end gap-0.5 h-5">
                    {[12, 20, 10, 18, 14, 22, 8].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1 rounded-sm bg-gradient-to-t from-[#F05A28] to-[#8E2DE2]"
                        style={{ height: `${h}px` }}
                        animate={{ scaleY: [1, 0.3, 1] }}
                        transition={{
                          duration: 0.7 + i * 0.1,
                          repeat: Infinity,
                          repeatType: 'reverse',
                          delay: i * 0.08,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom stat cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Target,
                title: 'Precision Targeting',
                stat: '95%', statLabel: 'Accuracy',
                desc: 'AI-driven audience segmentation eliminates wasted impressions and dramatically lifts engagement rates.',
                delay: 0,
              },
              {
                icon: Zap,
                title: 'Peak Performance',
                stat: '40%', statLabel: 'Higher Conversions',
                desc: 'Continuous real-time optimization keeps your campaigns ahead of the competition, every millisecond.',
                delay: 0.1,
              },
              {
                icon: Database,
                title: 'Deep Integration',
                stat: '50+', statLabel: 'Platforms',
                desc: 'One dashboard to manage every channel — from Google and Meta to programmatic DSPs and DOOH.',
                delay: 0.2,
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                className="group bg-[#0f0f0f] border border-gray-800/60 rounded-2xl p-6 hover:border-[#F05A28]/25 hover:shadow-[0_0_24px_rgba(240,90,40,0.07)] transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: card.delay }}
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#F05A28]/12 to-[#8E2DE2]/12 border border-[#F05A28]/18 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-5 h-5 text-[#F05A28]" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F05A28] to-[#8E2DE2]">
                      {card.stat}
                    </div>
                    <div className="text-gray-600 text-xs uppercase tracking-wide">{card.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{card.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
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
