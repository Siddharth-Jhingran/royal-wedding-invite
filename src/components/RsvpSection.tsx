import { SectionTitle } from './Ornaments'
import type { Language } from '../data/translations'
import { COPY } from '../data/translations'
import { Phone } from 'lucide-react'

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
      <SectionTitle
        kicker="Contacts:"
        title={<>
          <Phone size={15} className="text-gold inline" /><a href="tel:9450375503">9450375503</a> <br />
          <Phone size={15} className="text-gold inline" /><a href="tel:9235301362">9235301362</a> <br />
          <Phone size={15} className="text-gold inline" /><a href="tel:9415184710">9415184710</a>
        </>
        }
      />
    </section>
  )
}
