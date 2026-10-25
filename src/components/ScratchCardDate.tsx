import confetti from 'canvas-confetti'
import { ChevronDown, Sparkles } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'
import { WEDDING } from '../data/wedding'
import type { Language } from '../data/translations'
import { COPY } from '../data/translations'
import { GoldCornerFrame, SectionTitle } from './Ornaments'

const REVEAL_AT = 0.48

type ScratchCardDateProps = {
  language: Language
}

export default function ScratchCardDate({ language }: ScratchCardDateProps) {
  const copy = COPY[language].date
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const scratching = useRef(false)
  const revealedRef = useRef(false)
  const [progress, setProgress] = useState(0)
  const [revealed, setRevealed] = useState(false)

  const celebrate = useCallback(() => {
    confetti({
      particleCount: 180,
      spread: 78,
      origin: { y: 0.42 },
      colors: ['#D4AF37', '#FAF8F5', '#F1D77A', '#7A1424', '#26070B'],
    })
  }, [])

  const paintFoil = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { width, height } = canvas
    const gradient = ctx.createLinearGradient(0, 0, width, height)
    gradient.addColorStop(0, '#8c6b12')
    gradient.addColorStop(0.35, '#f1d77a')
    gradient.addColorStop(0.55, '#d4af37')
    gradient.addColorStop(1, '#6d5310')
    ctx.globalCompositeOperation = 'source-over'
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)

    ctx.globalAlpha = 0.22
    for (let y = 0; y < height; y += 6) {
      ctx.fillStyle = y % 12 === 0 ? '#fff6d2' : '#5a430c'
      ctx.fillRect(0, y, width, 2)
    }
    ctx.globalAlpha = 1
    ctx.fillStyle = '#26070B'
    ctx.font = '600 18px Poppins, sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText(copy.scratch, width / 2, height / 2 - 8)
    ctx.font = '28px Great Vibes, cursive'
    ctx.fillStyle = '#3d1018'
    ctx.fillText(copy.reveal, width / 2, height / 2 + 28)
  }, [copy.reveal, copy.scratch])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = Math.max(1, Math.floor(rect.width * window.devicePixelRatio))
      canvas.height = Math.max(1, Math.floor(rect.height * window.devicePixelRatio))
      if (!revealedRef.current) paintFoil()
    }
    resize()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [paintFoil])

  const measure = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return 0
    const ctx = canvas.getContext('2d')
    if (!ctx) return 0
    const { data } = ctx.getImageData(0, 0, canvas.width, canvas.height)
    let clear = 0
    let total = 0
    for (let i = 3; i < data.length; i += 32) {
      total += 1
      if (data[i] < 40) clear += 1
    }
    return total === 0 ? 0 : clear / total
  }, [])

  const finishReveal = useCallback(() => {
    if (revealedRef.current) return
    revealedRef.current = true
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (canvas && ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    setProgress(1)
    setRevealed(true)
    celebrate()
  }, [celebrate])

  const scratchAt = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current
    if (!canvas || revealedRef.current) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const rect = canvas.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * canvas.width
    const y = ((clientY - rect.top) / rect.height) * canvas.height
    const radius = 28 * window.devicePixelRatio
    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
    const next = measure()
    setProgress(next)
    if (next >= REVEAL_AT) finishReveal()
  }

  return (
    <section id="date" className="relative scroll-mt-24 px-4 py-14 sm:py-20 md:py-24">
      <SectionTitle
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="ornate-panel relative overflow-hidden rounded-sm p-3 md:p-5">
          <GoldCornerFrame />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm md:aspect-[16/10]">
            <img
              src={WEDDING.couplePhoto}
              alt={`${WEDDING.bride} and ${WEDDING.groom}`}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 via-transparent to-maroon/20" />
            <div className="absolute inset-x-0 bottom-0 p-4 text-center sm:p-6 md:p-10">
              <p className="font-body text-[10px] tracking-[0.25em] text-gold uppercase sm:text-xs sm:tracking-[0.35em]">
                {copy.save}
              </p>
              <p className="font-script text-4xl leading-tight text-ivory sm:text-5xl md:text-6xl">
                {WEDDING.bride} & {WEDDING.groom}
              </p>
              <p className="mt-2 font-display text-xl text-gold-light sm:text-2xl md:text-4xl">
                {copy.date}
              </p>
              <p className="mt-1 font-body text-xs text-ivory/80 sm:text-sm">{copy.time}</p>
              <p className="mt-2 font-display text-sm italic text-ivory/70 sm:text-base">{copy.venue}</p>
            </div>
            <canvas
              ref={canvasRef}
              className={`absolute inset-0 h-full w-full touch-none ${
                revealed ? 'pointer-events-none opacity-0' : 'cursor-crosshair'
              }`}
              onPointerDown={(event) => {
                scratching.current = true
                event.currentTarget.setPointerCapture(event.pointerId)
                scratchAt(event.clientX, event.clientY)
              }}
              onPointerMove={(event) => {
                if (!scratching.current) return
                scratchAt(event.clientX, event.clientY)
              }}
              onPointerUp={() => {
                scratching.current = false
              }}
              onPointerLeave={() => {
                scratching.current = false
              }}
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <div className="font-body text-xs tracking-[0.2em] text-gold uppercase">
            {copy.foilLifted} {Math.min(100, Math.round(progress * 100))}%
          </div>
          <button
            type="button"
            onClick={finishReveal}
            className="inline-flex items-center gap-2 rounded-full border border-gold px-5 py-2 font-body text-xs tracking-[0.2em] text-gold uppercase transition hover:bg-gold hover:text-maroon"
          >
            <Sparkles size={14} />
            {copy.instantReveal}
          </button>
        </div>
      </div>

      <a
        href="#countdown"
        className="mx-auto mt-10 flex w-fit flex-col items-center gap-1 text-gold/75 transition hover:text-gold sm:mt-12"
        aria-label={copy.scrollLabel}
      >
        <span className="font-body text-[10px] tracking-[0.25em] uppercase">{copy.scroll}</span>
        <ChevronDown size={18} className="animate-bounce" aria-hidden="true" />
      </a>
    </section>
  )
}
