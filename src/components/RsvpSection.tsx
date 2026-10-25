import { SectionTitle } from './Ornaments'
import type { Language } from '../data/translations'
import { COPY } from '../data/translations'

type RsvpSectionProps = {
  language: Language
}

export default function RsvpSection({ language }: RsvpSectionProps) {
  const copy = COPY[language].rsvp

  return (
    <section id="rsvp" className="relative scroll-mt-24 px-4 py-12 sm:py-16 md:py-20">
      <SectionTitle
        kicker={copy.kicker}
        title=""
        subtitle={copy.subtitle}
      />
      <SectionTitle
        kicker={copy.requestedBy}
        title={language === 'hi' ? 'दीपक झींगरन\nज्योति झींगरन' : 'Deepak Jhingran\nJyoti Jhingran'}
      />
      <SectionTitle
        kicker={copy.presence}
        title={copy.family}
      />
    </section>
  )
}
