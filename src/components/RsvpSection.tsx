import { Check, Heart, Send } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { WEDDING } from '../data/wedding'
import { SectionTitle } from './Ornaments'

const DIETS = ['Vegetarian', 'Jain', 'Vegan', 'Non-vegetarian', 'No preference'] as const

export default function RsvpSection() {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState(1)
  const [diet, setDiet] = useState<(typeof DIETS)[number]>('Vegetarian')
  const [wishes, setWishes] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="rsvp" className="relative scroll-mt-24 px-4 py-12 sm:py-16 md:py-20">
      <SectionTitle
        kicker="Your Presence"
        title="Kindly Respond"
        subtitle="Share your name, how many souls will join the celebration, and a blessing for the couple."
      />

      <div className="ornate-panel mx-auto max-w-2xl rounded-sm p-5 sm:p-6 md:p-10">
        {submitted ? (
          <div className="py-10 text-center">
            <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
              <Check size={28} />
            </span>
            <p className="font-script text-4xl text-gold">Dhanyavaad</p>
            <p className="mt-3 font-display text-xl text-ivory">
              {name || 'Dear guest'}, your blessings have been received.
            </p>
            <p className="mt-2 font-body text-sm text-ivory/70">
              We cannot wait to celebrate {WEDDING.hashtag} with you in Udaipur.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="space-y-5">
            <label className="block">
              <span className="mb-2 block font-body text-[11px] tracking-[0.2em] text-gold uppercase">
                Guest name
              </span>
              <input
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-sm border border-gold/35 bg-maroon-deep/70 px-4 py-3 font-body text-ivory outline-none focus:border-gold"
                placeholder="Your full name"
              />
            </label>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block font-body text-[11px] tracking-[0.2em] text-gold uppercase">
                  Number of guests
                </span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  required
                  value={guests}
                  onChange={(event) => setGuests(Number(event.target.value))}
                  className="w-full rounded-sm border border-gold/35 bg-maroon-deep/70 px-4 py-3 font-body text-ivory outline-none focus:border-gold"
                />
              </label>
              <label className="block">
                <span className="mb-2 block font-body text-[11px] tracking-[0.2em] text-gold uppercase">
                  Dietary preference
                </span>
                <select
                  value={diet}
                  onChange={(event) => setDiet(event.target.value as (typeof DIETS)[number])}
                  className="w-full rounded-sm border border-gold/35 bg-maroon-deep/70 px-4 py-3 font-body text-ivory outline-none focus:border-gold"
                >
                  {DIETS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label className="block">
              <span className="mb-2 block font-body text-[11px] tracking-[0.2em] text-gold uppercase">
                Warm wishes
              </span>
              <textarea
                rows={4}
                value={wishes}
                onChange={(event) => setWishes(event.target.value)}
                className="w-full resize-none rounded-sm border border-gold/35 bg-maroon-deep/70 px-4 py-3 font-body text-ivory outline-none focus:border-gold"
                placeholder="A few words of blessing for Ananya & Vikram"
              />
            </label>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-light via-gold to-gold-dark py-3 font-body text-xs tracking-[0.28em] text-maroon uppercase"
            >
              <Send size={14} />
              Send blessings
              <Heart size={14} />
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
