import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/40 dark:border-white/10 dark:bg-black/40">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500"></div>
              <span className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">Flare Digital</span>
            </a>

            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="inline-flex items-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-gray-900"
              >
                Get Proposal
              </a>
            </nav>

            <button
              onClick={() => setOpen(!open)}
              className="inline-flex items-center justify-center rounded-lg p-2 md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-6 py-4 md:hidden">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-sm font-medium text-gray-800 hover:bg-black/5 dark:text-gray-200 dark:hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:opacity-90 dark:bg-white dark:text-gray-900"
                >
                  Get Proposal
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
