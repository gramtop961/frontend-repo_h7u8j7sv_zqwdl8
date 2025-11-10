import { Star, ArrowUpRight } from 'lucide-react'

const caseStudies = [
  {
    company: 'Orbit AI',
    result: '3.2x ROAS in 60 days',
    desc: 'Scaled paid social with creative testing and LTV-backed bidding.',
  },
  {
    company: 'Kairo Health',
    result: '120% signup growth',
    desc: 'Built a product-led funnel with lifecycle automation and content engine.',
  },
  {
    company: 'Volt Mobility',
    result: 'From 0 → 10K MRR',
    desc: 'Launched GTM, brand, and performance foundation from day one.',
  },
]

export default function Work() {
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Selected work</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Results we ship. Stories we’re proud of.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c) => (
            <article key={c.company} className="group relative overflow-hidden rounded-2xl border border-black/5 bg-white p-6 ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-md dark:border-white/10 dark:bg-black/40 dark:ring-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{c.company}</h3>
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-900 dark:text-white">{c.result}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{c.desc}</p>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white">
                View case study <ArrowUpRight className="h-4 w-4" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
