import { useEffect, useRef } from 'react'

function startFluteAmbience(ctx: AudioContext, onInterval: (id: number) => void) {
  const master = ctx.createGain()
  master.gain.value = 0.1
  master.connect(ctx.destination)

  const make = (
    type: OscillatorType,
    frequency: number,
    gainValue: number,
    filterHz?: number,
  ) => {
    const osc = ctx.createOscillator()
    osc.type = type
    osc.frequency.value = frequency
    const gain = ctx.createGain()
    gain.gain.value = gainValue
    if (filterHz) {
      const filter = ctx.createBiquadFilter()
      filter.type = 'lowpass'
      filter.frequency.value = filterHz
      osc.connect(filter)
      filter.connect(gain)
    } else {
      osc.connect(gain)
    }
    gain.connect(master)
    osc.start()
    return osc
  }

  const drone = make('sawtooth', 146.83, 0.2, 620)
  const fifth = make('triangle', 220, 0.12)
  const flute = make('sine', 587.33, 0.09)

  const lfo = ctx.createOscillator()
  lfo.frequency.value = 5.2
  const lfoGain = ctx.createGain()
  lfoGain.gain.value = 8
  lfo.connect(lfoGain)
  lfoGain.connect(flute.frequency)
  lfo.start()

  const notes = [587.33, 659.25, 783.99, 880, 783.99, 659.25]
  let step = 0
  const id = window.setInterval(() => {
    step = (step + 1) % notes.length
    flute.frequency.setTargetAtTime(notes[step], ctx.currentTime, 0.18)
  }, 1600)
  onInterval(id)

  return [drone, fifth, flute, lfo]
}

export function useInvitationMusic(musicOn: boolean) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const ctxRef = useRef<AudioContext | null>(null)
  const nodesRef = useRef<OscillatorNode[]>([])
  const intervalRef = useRef<number | null>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!musicOn) {
      audio?.pause()
      if (intervalRef.current) window.clearInterval(intervalRef.current)
      intervalRef.current = null
      nodesRef.current.forEach((node) => {
        try {
          node.stop()
        } catch {
          /* already stopped */
        }
      })
      nodesRef.current = []
      void ctxRef.current?.close()
      ctxRef.current = null
      return
    }

    const start = async () => {
      if (audio) {
        audio.volume = 0.4
        audio.onerror = () => {
          void startGenerated()
        }
        try {
          await audio.play()
          return
        } catch {
          await startGenerated()
          return
        }
      }
      await startGenerated()
    }

    const startGenerated = async () => {
      if (ctxRef.current) return
      const ctx = new AudioContext()
      ctxRef.current = ctx
      nodesRef.current = startFluteAmbience(ctx, (id) => {
        intervalRef.current = id
      })
      if (ctx.state === 'suspended') await ctx.resume()
    }

    void start()
  }, [musicOn])

  return audioRef
}
