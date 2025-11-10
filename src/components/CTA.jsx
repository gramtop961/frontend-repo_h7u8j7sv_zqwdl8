export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-indigo-50/60 to-transparent dark:from-indigo-950/20" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-black/5 bg-white p-8 ring-1 ring-black/5 backdrop-blur-lg dark:border-white/10 dark:bg-black/40 dark:ring-white/10 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Ready to accelerate growth?
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Tell us about your goals and we’ll share a tailored plan in 48 hours.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-8 grid gap-3 sm:grid-cols-3"
            >
              <input
                required
                placeholder="Your name"
                className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-black/20 dark:border-white/10 dark:bg-black/30 dark:placeholder:text-gray-400"
              />
              <input
                required
                type="email"
                placeholder="Work email"
                className="w-full rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm outline-none ring-0 placeholder:text-gray-400 focus:border-black/20 dark:border-white/10 dark:bg-black/30 dark:placeholder:text-gray-400"
              />
              <button
                type="submit"
                className="rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:opacity-90 dark:bg-white dark:text-gray-900"
              >
                Get proposal
              </button>
            </form>
            <p className="mt-3 text-xs text-gray-500">We’ll never share your info. By submitting, you agree to our privacy policy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
