export default function MandalaWatermark() {
  return (

    <div
    className="logo pointer-events-none flex h-[min(90vw,720px)] w-[min(90vw,720px)] items-center justify-center ml-3 opacity-[0.22] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"

    
    >
      
      <img src="https://ik.imagekit.io/wbbydpgjl/WhatsApp_Image_2026-10-16_at_4.38.00_PM-removebg-preview.png" alt="ye logo hai" />
    </div>
  )
}

type GoldFrameProps = {
  className?: string    
}

export function GoldCornerFrame({ className = '' }: GoldFrameProps) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      <rect x="2" y="2" width="96" height="96" fill="none" stroke="#D4AF37" strokeWidth="0.6" />
      <rect x="4" y="4" width="92" height="92" fill="none" stroke="#D4AF37" strokeWidth="0.25" />
      <path d="M2 18 V2 H18" fill="none" stroke="#F1D77A" strokeWidth="1.4" />
      <path d="M82 2 H98 V18" fill="none" stroke="#F1D77A" strokeWidth="1.4" />
      <path d="M98 82 V98 H82" fill="none" stroke="#F1D77A" strokeWidth="1.4" />
      <path d="M18 98 H2 V82" fill="none" stroke="#F1D77A" strokeWidth="1.4" />
      <circle cx="2" cy="2" r="1.4" fill="#D4AF37" />
      <circle cx="98" cy="2" r="1.4" fill="#D4AF37" />
      <circle cx="2" cy="98" r="1.4" fill="#D4AF37" />
      <circle cx="98" cy="98" r="1.4" fill="#D4AF37" />
    </svg>
  )
}

type SectionTitleProps = {
  kicker: string
  title: string
  subtitle?: string
  description?: string
}

export function SectionTitle({ kicker, title, subtitle, description }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-9 max-w-2xl px-2 text-center sm:mb-12 sm:px-4">
      <p className="font-script text-3xl text-gold md:text-4xl">{kicker}</p>
      <h2 className="whitespace-pre-line mt-2 font-display text-3xl leading-tight tracking-wide text-ivory sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto my-4 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent sm:my-5" />
      {subtitle ? (
        <p className="font-body text-sm leading-relaxed text-ivory-warm/80 md:text-base">
          {subtitle}
        </p>
      ) : null}
      {description ? (
        <p className="font-body text-sm leading-relaxed text-ivory-warm/80 md:text-base">
          {description}
        </p>
      ) : null}
    </div>
  )
}
