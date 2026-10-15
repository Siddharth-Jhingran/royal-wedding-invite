import { Calendar, Clock, Gift, Heart, MapPin, Sparkles } from 'lucide-react'
import { MILESTONES, RITUALS } from '../data/wedding'
import { SectionTitle } from './Ornaments'

const milestoneIcon = {
  spark: Sparkles,
  heart: Heart,
  gift: Gift,
}

export default function StoryTimeline() {
  return (
    <section id="story" className="relative scroll-mt-24 px-4 py-12 sm:py-16 md:py-20">
      <SectionTitle
        kicker="Our Journey"
        title="Love Story & Sacred Rituals"
        subtitle="From a monsoon wedding in Jaipur to pheras on the palace terraces of Udaipur."
      />

      <div className="mx-auto max-w-3xl">
        <ol className="relative border-l border-gold/40 pl-8">
          {MILESTONES.map((item) => {
            const Icon = milestoneIcon[item.icon]
            return (
              <li key={item.title} className="relative mb-12">
                <span className="absolute -left-[45px] flex h-9 w-9 items-center justify-center rounded-full border border-gold bg-maroon text-gold">
                  <Icon size={16} />
                </span>
                <p className="font-body text-xs tracking-[0.2em] text-gold uppercase">{item.date}</p>
                <h3 className="mt-1 font-display text-xl text-ivory sm:text-2xl">{item.title}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ivory/75">{item.detail}</p>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-5 md:grid-cols-2">
        {RITUALS.map((ritual) => (
          <article key={ritual.title} className="ornate-panel rounded-sm p-5 sm:p-6">
            <p className="font-script text-3xl text-gold">{ritual.title}</p>
            <div className="mt-4 space-y-2 font-body text-sm text-ivory/80">
              <p className="flex items-center gap-2">
                <Calendar size={15} className="text-gold" /> {ritual.date}
              </p>
              <p className="flex items-center gap-2">
                <Clock size={15} className="text-gold" /> {ritual.time}
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-gold" /> {ritual.venue}
              </p>
            </div>
            <p className="mt-4 font-body text-sm italic text-ivory-warm/80">{ritual.note}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
