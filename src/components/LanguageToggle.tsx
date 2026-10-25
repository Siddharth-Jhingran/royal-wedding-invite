import type { Language } from '../data/translations'
import { COPY } from '../data/translations'

type LanguageToggleProps = {
  language: Language
  onToggle: () => void
}

export default function LanguageToggle({ language, onToggle }: LanguageToggleProps) {
  const copy = COPY[language].language

  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex min-h-10 items-center justify-center rounded-full border border-gold/50 bg-maroon-soft px-4 py-2 font-body text-xs font-medium tracking-wide text-gold transition hover:bg-gold hover:text-maroon focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
      aria-label={copy.switchTo}
      lang={language === 'en' ? 'hi' : 'en'}
    >
      {copy.current}
    </button>
  )
}
