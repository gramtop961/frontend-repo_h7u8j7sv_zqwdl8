export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">Flare Digital</p>
          </div>
          <p className="text-xs text-gray-500">© {new Date().getFullYear()} Flare Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
