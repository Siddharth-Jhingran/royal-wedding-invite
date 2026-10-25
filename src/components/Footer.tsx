import { Share2 } from 'lucide-react'
import { WEDDING } from '../data/wedding'
import type { Language } from '../data/translations'
import { COPY } from '../data/translations'

type FooterProps = {
  language: Language
}

export default function Footer({ language }: FooterProps) {
  const copy = COPY[language].footer

  const share = async () => {
    const payload = {
      title: `${WEDDING.bride} & ${WEDDING.groom} — ${copy.shareTitle}`,
      text: `${copy.shareText} ${WEDDING.hashtag}`,
      url: window.location.href,
    }
    try {
      if (navigator.share) {
        await navigator.share(payload)
        return
      }
    } catch {
      /* guest cancelled */
    }
    await navigator.clipboard.writeText(`${payload.title} — ${payload.url}`)
    window.alert(copy.copied)
  }

  return (
    <footer className="relative border-t border-gold/25 px-4 py-12 text-center sm:py-16">
      <p className="font-script text-3xl text-gold sm:text-4xl">Mangalam Bhavatu</p>
      <p className="mx-auto mt-4 max-w-xl font-display text-base italic text-ivory/80 sm:text-lg">
        {copy.message}
      </p>
      <button
        type="button"
        onClick={() => void share()}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold px-6 py-3 font-body text-xs tracking-[0.22em] text-gold uppercase hover:bg-gold hover:text-maroon"
      >
        <Share2 size={14} />
        {copy.share}
      </button>
      <p className="mt-8 font-body text-[11px] tracking-[0.18em] text-ivory/45 uppercase">
        © {new Date().getFullYear()} {WEDDING.families} · {WEDDING.hashtag}
      </p>
      <p className="mt-2 font-body text-[11px] tracking-[0.18em] text-ivory/45 uppercase">
        {copy.created} <a href="https://www.instagram.com/sid_jhingran?obrf=MTdmbHJhMGIzOGRkcQ==" className="underline">Siddharth Jhingran</a>
      </p>
    </footer>
  )
}
