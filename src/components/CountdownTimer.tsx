import { useEffect, useMemo, useState } from 'react'
import { WEDDING } from '../data/wedding'
import { SectionTitle } from './Ornaments'

type TimeLeft = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

const pad = (value: number) => String(Math.max(0, value)).padStart(2, '0')

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const minutes = Math.floor((diff % 3_600_000) / 60_000)
  const seconds = Math.floor((diff % 60_000) / 1000)
  return {
    days: String(days).padStart(3, '0'),
    hours: pad(hours),
    minutes: pad(minutes),
    seconds: pad(seconds),
  }
}

export default function CountdownTimer() {
  const target = useMemo(() => new Date(WEDDING.targetDate).getTime(), [])
  const [time, setTime] = useState<TimeLeft>(() => getTimeLeft(target))

  useEffect(() => {
    const id = window.setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => window.clearInterval(id)
  }, [target])

  const units: { label: string; value: string }[] = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section id="countdown" className="relative scroll-mt-24 px-4 py-12 sm:py-16 md:py-20">
      <SectionTitle
        kicker="The Awaited Hour"
        title="Countdown to the Pheras"
        subtitle="Until we meet beneath the jasmine mandap at City Palace."
      />
      <div className="mx-auto grid max-w-4xl grid-cols-4 gap-1 sm:gap-4 md:grid-cols-4">
        {units.map((unit) => (
          <div key={unit.label} className="ornate-panel rounded-sm px-2 py-5 text-center sm:px-3 sm:py-6 md:py-8">
            <div className="gold-text glow-gold font-display text-3xl tabular-nums sm:text-4xl md:text-6xl">
              {unit.value}
            </div>
            <div className="mt-3 font-body text-[10px] tracking-[0.28em] text-ivory/70 uppercase">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
