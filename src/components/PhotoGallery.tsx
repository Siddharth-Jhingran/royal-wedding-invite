import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GALLERY } from '../data/wedding'
import type { Language } from '../data/translations'
import { COPY } from '../data/translations'
import { GoldCornerFrame, SectionTitle } from './Ornaments'

type PhotoGalleryProps = {
  language: Language
}

export default function PhotoGallery({ language }: PhotoGalleryProps) {
  const copy = COPY[language].gallery
  const [active, setActive] = useState<number | null>(null)
  const photos = GALLERY

  useEffect(() => {
    if (active === null) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
      if (event.key === 'ArrowRight') setActive((i) => (i === null ? i : (i + 1) % photos.length))
      if (event.key === 'ArrowLeft') {
        setActive((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [active, photos.length])

  return (
    <section id="gallery" className="relative scroll-mt-24 px-4 py-12 sm:py-16 md:py-20">
      <SectionTitle
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div
        className={`gallery-marquee mx-auto max-w-6xl ${active !== null ? 'is-paused' : ''}`}
        role="region"
        aria-label={copy.label}
        aria-roledescription="carousel"
      >
        <div className="gallery-marquee-track">
          {[false, true].map((isClone) => (
            <div
              key={isClone ? 'clone' : 'photos'}
              className="gallery-marquee-group"
              aria-hidden={isClone}
            >
              {photos.map((photo, index) => (
                <button
                  key={`${isClone ? 'clone-' : ''}${photo.src}-${index}`}
                  type="button"
                  onClick={() => setActive(index)}
                  tabIndex={isClone ? -1 : undefined}
                  aria-label={`${copy.view}: ${photo.alt}`}
                  className="ornate-panel group relative aspect-[3/4] w-[72vw] max-w-[280px] shrink-0 overflow-hidden rounded-sm p-1.5 sm:w-[36vw] sm:max-w-[320px]"
                >
                  <GoldCornerFrame />
                  <img
                    src={photo.src}
                    alt={isClone ? '' : photo.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                  <span className="absolute inset-0 bg-maroon/0 transition group-hover:bg-maroon/25" />
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>

      {active !== null && photos[active] ? (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-maroon-deep/90 p-4 backdrop-blur-sm">
          <button
            type="button"
            className="absolute top-4 mt-15 left-4 z-10 inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/70 bg-maroon px-4 py-2 font-body text-sm text-gold shadow-lg transition hover:bg-maroon-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:top-5 sm:left-5"
            onClick={() => setActive(null)}
            aria-label={copy.back}
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>{copy.back}</span>
          </button>
          
          <button
            type="button"
            className="absolute -left-1 text-gold md:left-8 z-10"
            onClick={() => setActive((i) => (i === null ? i : (i - 1 + photos.length) % photos.length))}
            aria-label={copy.previous}
          >
            <ChevronLeft size={46} />
          </button>
          <div className="relative max-h-[82vh] w-full max-w-4xl p-3">
            <GoldCornerFrame />
            <img
              src={photos[active].src}
              alt={photos[active].alt}
              className="max-h-[78vh] w-full object-contain"
            />
            <p className="mt-3 text-center font-body text-sm text-ivory/80">{photos[active].alt}</p>
          </div>
          <button
            type="button"
            className="absolute -right-1 text-gold md:right-8"
            onClick={() => setActive((i) => (i === null ? i : (i + 1) % photos.length))}
            aria-label={copy.next}
          >
            <ChevronRight size={46} />
          </button>
        </div>
      ) : null}
    </section>
  )
}
