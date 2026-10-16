export default function MandalaWatermark() {
  return (
    // <svg
    //   className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
    //   viewBox="0 0 400 400"
    //   fill="none"
    //   aria-hidden
    // >
    //   <circle cx="200" cy="200" r="188" stroke="#D4AF37" strokeWidth="1" />
    //   <circle cx="200" cy="200" r="150" stroke="#D4AF37" strokeWidth="0.6" />
    //   <circle cx="200" cy="200" r="92" stroke="#D4AF37" strokeWidth="0.8" />
    //   {Array.from({ length: 16 }, (_, i) => {
    //     const angle = (i * Math.PI) / 8
    //     const x2 = 200 + Math.cos(angle) * 188
    //     const y2 = 200 + Math.sin(angle) * 188
    //     return (
    //       <line
    //         key={i}
    //         x1="200"
    //         y1="200"
    //         x2={x2}
    //         y2={y2}
    //         stroke="#D4AF37"
    //         strokeWidth="0.4"
    //       />
    //     )
    //   })}
    //   {Array.from({ length: 12 }, (_, i) => {
    //     const a = (i * Math.PI) / 6
    //     const cx = 200 + Math.cos(a) * 120
    //     const cy = 200 + Math.sin(a) * 120
    //     return <circle key={`p-${i}`} cx={cx} cy={cy} r="18" stroke="#D4AF37" strokeWidth="0.7" />
    //   })}
    //   <path
    //     d="M200 70 C230 140 230 140 200 200 C170 140 170 140 200 70 Z M200 330 C230 260 230 260 200 200 C170 260 170 260 200 330 Z M70 200 C140 170 140 170 200 200 C140 230 140 230 70 200 Z M330 200 C260 170 260 170 200 200 C260 230 260 230 330 200 Z"
    //     stroke="#D4AF37"
    //     strokeWidth="0.8"
    //   />
    // </svg>
    <div
    className="logo pointer-events-none flex h-[min(90vw,720px)] w-[min(90vw,720px)] items-center justify-center ml-3 opacity-[0.22] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          // className="pointer-events-none absolute left-1/2 top-1/2 h-[min(90vw,720px)] w-[min(90vw,720px)] -translate-x-1/3 -translate-y-1/2 opacity-[0.12]"

    
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
}

export function SectionTitle({ kicker, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-9 max-w-2xl px-2 text-center sm:mb-12 sm:px-4">
      <p className="font-script text-3xl text-gold md:text-4xl">{kicker}</p>
      <h2 className="mt-2 font-display text-3xl leading-tight tracking-wide text-ivory sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto my-4 h-px w-28 bg-gradient-to-r from-transparent via-gold to-transparent sm:my-5" />
      {subtitle ? (
        <p className="font-body text-sm leading-relaxed text-ivory-warm/80 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
