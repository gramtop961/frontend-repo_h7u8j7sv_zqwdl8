import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80 dark:from-black/60 dark:via-black/20 dark:to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/60 px-4 py-2 text-xs font-medium tracking-wide backdrop-blur dark:border-white/10 dark:bg-black/40">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500"></span>
          Award-winning digital marketing studio
        </div>
        <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight text-gray-900 drop-shadow-sm sm:text-6xl dark:text-white">
          We design, launch, and grow standout brands
        </h1>
        <p className="mt-4 max-w-2xl text-base text-gray-700 sm:text-lg dark:text-gray-300">
          Full-funnel digital marketing that blends strategy, design, and performance. From identity to activation.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#contact" className="inline-flex items-center rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90 dark:bg-white dark:text-gray-900">
            Get a free strategy call
          </a>
          <a href="#work" className="inline-flex items-center rounded-full bg-white/70 px-6 py-3 text-sm font-semibold text-gray-900 ring-1 ring-black/10 backdrop-blur transition hover:bg-white dark:bg-black/30 dark:text-white dark:ring-white/10">
            See our work
          </a>
        </div>
      </div>
    </section>
  )
}
