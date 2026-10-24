import { MapPin, Phone, Sparkles } from 'lucide-react'
import { DESTINATIONS } from '../data/wedding'
import { GoldCornerFrame, SectionTitle } from './Ornaments'

export default function DestinationGuide() {
  return (
    <section id="destination" className="relative scroll-mt-24 px-4 py-12 sm:py-16 md:py-20">
      <SectionTitle
        kicker="Lucknow Awaits"
        title="The Wedding Venue"
        subtitle="A beautiful destination for a day filled with love, laughter, and lifelong memories."
      />

      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
        {DESTINATIONS.map((place) => (
          <article key={place.name} className="ornate-panel overflow-hidden rounded-sm">
            <div className="relative h-52">
              <img src={place.image} alt={place.name} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-maroon via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5">
                <p className="font-body text-[10px] tracking-[0.25em] text-gold uppercase">
                  {place.role}
                </p>
                <h3 className="font-display text-2xl text-ivory">{place.name}</h3>
              </div>
            </div>
            <div className="relative p-6">
              <GoldCornerFrame />
              <p className="font-body text-sm text-ivory/75">{place.address}</p>
              <p className="mt-3 flex gap-2 font-body text-sm italic text-ivory-warm/80">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-gold" />
                {place.stay}
              </p>
              <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                <a
                  href={place.map}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold px-3 py-2 font-body text-[10px] tracking-[0.12em] text-gold uppercase hover:bg-gold hover:text-maroon sm:px-4 sm:text-[11px] sm:tracking-[0.18em]"
                >
                  <MapPin size={14} />
                  Open map
                </a>
                <a
                  href={place.concierge}
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border border-gold/40 px-3 py-2 font-body text-[10px] tracking-[0.12em] text-ivory uppercase hover:border-gold sm:px-4 sm:text-[11px] sm:tracking-[0.18em]"
                >
                  <Phone size={14} className="text-gold" />
                  Concierge
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
