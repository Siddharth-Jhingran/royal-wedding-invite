import { Menu, Music2, VolumeX, X } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS, WEDDING } from '../data/wedding'
import type { Language } from '../data/translations'
import { COPY } from '../data/translations'
import LanguageToggle from './LanguageToggle'

type NavbarProps = {
  language: Language
  onToggleLanguage: () => void
  musicOn: boolean
  onToggleMusic: () => void
}

export default function Navbar({ language, onToggleLanguage, musicOn, onToggleMusic }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const copy = COPY[language]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gold/25 bg-maroon/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#date" className="flex items-center gap-2">
          <span className="whitespace-nowrap font-script text-xl text-gold sm:text-2xl md:text-3xl">
            {WEDDING.bride} & {WEDDING.groom}
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-xs tracking-[0.18em] text-ivory/80 uppercase transition hover:text-gold"
            >
              {copy.nav.links[index]}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle language={language} onToggle={onToggleLanguage} />
          <button
            type="button"
            onClick={onToggleMusic}
            className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-maroon-soft px-3 py-2 text-gold transition hover:bg-gold hover:text-maroon"
            aria-label={musicOn ? copy.nav.pauseMusic : copy.nav.playMusic}
          >
            {musicOn ? <Music2 size={16} /> : <VolumeX size={16} />}
            <span className="hidden font-body text-[10px] tracking-[0.2em] uppercase sm:inline">
              {musicOn ? copy.nav.shehnaiOn : copy.nav.shehnai}
            </span>
          </button>
          <button
            type="button"
            className="rounded-full border border-gold/40 p-2 text-gold lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={copy.nav.toggleNavigation}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <nav id="mobile-navigation" className="border-t border-gold/20 bg-maroon px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {NAV_LINKS.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-1 font-body text-sm tracking-[0.16em] text-ivory/90 uppercase"
              >
                {copy.nav.links[index]}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  )
}
