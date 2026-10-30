import { Calendar, Clock, FlowerIcon, Gift, Heart, MapPin, Sparkles } from 'lucide-react'
import type { Language } from '../data/translations'
import { COPY } from '../data/translations'
import { MILESTONES } from '../data/wedding'
import { SectionTitle } from './Ornaments'

const milestoneIcon = {
  spark: Sparkles,
  heart: Heart,
  gift: Gift,
  flower: FlowerIcon,
}

type StoryTimelineProps = {
  language: Language
}

export default function StoryTimeline({ language }: StoryTimelineProps) {
  const copy = COPY[language].story
  const translatedEvents = language === 'hi' ? COPY.hi.story.events : undefined

  return (
    <section id="story" className="relative  scroll-mt-24 px-4 py-12 sm:py-16 md:py-20">
      <SectionTitle
        kicker={copy.kicker}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l border-gold/40 pl-8">
          {MILESTONES.map((item, index) => {
            const Icon = milestoneIcon[item.icon]
            const eventCopy = translatedEvents?.[index]
            return (
              <li key={item.title} className="relative mb-12">
                <span className="absolute -left-[45px] flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-maroon text-gold">
                  <Icon size={16} />
                </span>
                <h3 className="mt-1 font-display text-xl text-ivory sm:text-2xl">
                  {eventCopy?.title ?? item.title}
                </h3>
                <div className="mt-4 space-y-2 font-body text-sm text-ivory/80">
                  <p className="flex items-center gap-2">
                    <Calendar size={15} className="text-gold" /> {eventCopy?.date ?? item.date}
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock size={15} className="text-gold" /> {eventCopy?.time ?? item.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin size={15} className="text-gold" /> {eventCopy?.venue ?? item.venue}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
