import type { CSSProperties } from 'react'

type PetalFieldProps = {
  count?: number
}

export default function PetalField({ count = 22 }: PetalFieldProps) {
  const petals = Array.from({ length: count }, (_, index) => {
    const left = `${(index * 47) % 100}%`
    const drift = `${(index % 2 === 0 ? 1 : -1) * (18 + (index % 7) * 8)}px`
    const duration = `${11 + (index % 8)}s`
    const delay = `${-(index * 0.7)}s`
    const scale = 0.7 + (index % 5) * 0.18

    return { left, drift, duration, delay, scale, key: index }
  })

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {petals.map((petal) => (
        <span
          key={petal.key}
          className="petal"
          style={
            {
              left: petal.left,
              '--drift': petal.drift,
              '--dur': petal.duration,
              '--delay': petal.delay,
              transform: `scale(${petal.scale})`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  )
}
