import { Sparkles, Rocket, Target, Megaphone, LineChart, PenTool } from 'lucide-react'

const services = [
  {
    icon: Rocket,
    title: 'Go-To-Market Strategy',
    desc: 'Positioning, audience definition, and multi-channel launch plans that cut through the noise.',
  },
  {
    icon: Target,
    title: 'Performance Marketing',
    desc: 'ROI-focused paid social, search, and conversion optimization with clear attribution.',
  },
  {
    icon: PenTool,
    title: 'Brand & Creative',
    desc: 'Visual identity, messaging, and content systems that scale across touchpoints.',
  },
  {
    icon: Megaphone,
    title: 'Content & Social',
    desc: 'Editorial calendars, UGC programs, and creator partnerships that drive engagement.',
  },
  {
    icon: LineChart,
    title: 'Analytics & Insights',
    desc: 'Funnels, dashboards, and experimentation frameworks for continuous growth.',
  },
  {
    icon: Sparkles,
    title: 'Web & Landing Pages',
    desc: 'High-performing sites and landing pages designed for speed, clarity, and conversions.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-indigo-50/60 dark:to-indigo-950/20" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">What we do</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Full-service capabilities, deployed with a performance mindset.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:shadow-md dark:border-white/10 dark:bg-black/40 dark:ring-white/10"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
