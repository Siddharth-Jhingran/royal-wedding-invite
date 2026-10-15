import { MailOpen, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { WEDDING } from '../data/wedding'
import MandalaWatermark from './Ornaments'
import PetalField from './PetalField'

type HeroEnvelopeProps = {
  onOpen: () => void
}

export default function HeroEnvelope({ onOpen }: HeroEnvelopeProps) {
  const [phase, setPhase] = useState<'closed' | 'opening' | 'gone'>('closed')

  const openInvitation = () => {
    if (phase !== 'closed') return
    setPhase('opening')
    window.setTimeout(() => setPhase('gone'), 1200)
    window.setTimeout(onOpen, 1650)
  }

  return (
    <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-maroon-deep px-4 py-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.16),transparent_55%)]" />
      <MandalaWatermark />
      <PetalField count={18} />

      <div className="envelope-scene relative z-10 w-full max-w-lg">
        <p className="mb-6 text-center font-body text-[10px] tracking-[0.2em] text-gold uppercase sm:mb-8 sm:text-xs sm:tracking-[0.35em]">
          {WEDDING.blessing}
        </p>

        <div
          className={`envelope-3d relative mx-auto aspect-[5/3.4] w-full max-w-md ${
            phase === 'opening' ? 'is-opening' : ''
          } ${phase === 'gone' ? 'is-gone' : ''}`}
        >
          <div className="absolute inset-0 overflow-hidden rounded-sm border border-gold bg-gradient-to-br from-maroon-soft via-maroon to-maroon-deep shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
            <div className="absolute inset-3 border border-gold/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 pt-8 text-center sm:px-6">
              <p className="font-body text-[9px] tracking-[0.25em] text-gold-light uppercase sm:text-[10px] sm:tracking-[0.4em]">
                Together with their families
              </p>
              <h1 className="mt-3 font-script text-4xl leading-tight text-gold sm:text-5xl md:text-6xl">
                {WEDDING.bride}{' '}
                <span className="font-display text-lg italic text-ivory">&</span>{' '}
                {WEDDING.groom}
              </h1>
              <p className="mt-3 px-2 font-display text-xs tracking-[0.12em] text-ivory/80 sm:text-sm sm:tracking-[0.2em]">
                request the honour of your presence
              </p>
            </div>
          </div>

          <div
            className={`flap absolute inset-x-0 top-0 h-[54%] ${phase !== 'closed' ? 'is-open' : ''}`}
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              background: 'linear-gradient(180deg, #4a141c 0%, #26070b 70%)',
              borderBottom: '1px solid #d4af37',
              zIndex: 4,
            }}
          >
            <div
              className="absolute inset-0 opacity-70"
              style={{
                background:
                  'linear-gradient(180deg, rgba(241,215,122,0.28), transparent 55%)',
              }}
            />
          </div>

          <button
            type="button"
            onClick={openInvitation}
            className="wax-seal absolute left-1/2 top-[46%] z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-gold-light bg-gradient-to-b from-[#8b1e2d] to-[#4a0d16] text-gold sm:h-20 sm:w-20"
            aria-label="Break the wax seal"
          >
            <span className="font-script text-3xl">U</span>
            <span className="font-display text-[10px]">&</span>
            <span className="font-script text-3xl">A</span>
          </button>
        </div>

        <div className="mt-7 flex flex-col items-center gap-4 sm:mt-10">
          <button
            type="button"
            onClick={openInvitation}
            className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold bg-gradient-to-r from-gold-light via-gold to-gold-dark px-6 py-3 font-body text-[11px] tracking-[0.2em] text-maroon uppercase shadow-[0_10px_30px_rgba(212,175,55,0.35)] transition hover:scale-[1.03] sm:px-8 sm:text-xs sm:tracking-[0.28em]"
          >
            <MailOpen size={16} />
            Open Invitation
          </button>
          <p className="flex items-center gap-2 font-body text-[11px] tracking-widest text-ivory/60 uppercase">
            <Sparkles size={12} className="text-gold" />
            Tap the golden seal
          </p>
        </div>
      </div>
    </section>
  )
}
