import { Pause, Play } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { WEDDING } from '../data/wedding'
import { GoldCornerFrame, SectionTitle } from './Ornaments'

interface WeddingVideoProps {
  onPlaybackChange: (playing: boolean) => void
}

export default function WeddingVideo({ onPlaybackChange }: WeddingVideoProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [useIframe, setUseIframe] = useState(false)
  const [playbackError, setPlaybackError] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video || useIframe) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry || !video) return

        if (entry.intersectionRatio >= 0.8 && video.paused && !video.ended) {
          void video.play().catch(() => setPlaybackError(true))
        } else if (entry.intersectionRatio < 0.8 && !video.paused) {
          video.pause()
        }
      },
      { threshold: [0, 0.8] },
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [useIframe])

  const toggle = async () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      try {
        await video.play()
      } catch {
        setPlaybackError(true)
      }
    } else {
      video.pause()
    }
  }

  return (
    <section id="film" className="relative scroll-mt-24 px-4 py-12 sm:py-16 md:py-20">
      <SectionTitle
        kicker="Cinematic Blessing"
        title="The Wedding Film"
        subtitle="A glimpse of palaces, pheras, and the music that will carry us down the aisle."
      />

      <div className="ornate-panel relative mx-auto max-w-2xl max-h-screen overflow-hidden rounded-sm p-3 md:p-4">
        <GoldCornerFrame />
        <div
        className="
        relative
        overflow-hidden 
        flex 
        items-center 
        justify-center  
        bg-maroon-deep"
        
        >

          {useIframe ? (
            <iframe
              title="Wedding cinematic film"
              className="w-full "
              src="https://ik.imagekit.io/wbbydpgjl/WhatsApp%20Video%202026-09-24%20at%209.10.23%20PM.mp4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <>
              <video
                ref={videoRef}
                className="max-h-[90vh] w-full object-contain"
                poster={WEDDING.filmPoster}
                playsInline
                controls={playing}
                onError={() => {
                  setUseIframe(true)
                  setPlaying(false)
                  onPlaybackChange(false)
                }}
                onPause={() => {
                  setPlaying(false)
                  onPlaybackChange(false)
                }}
                onPlay={() => {
                  setPlaying(true)
                  setPlaybackError(false)
                  onPlaybackChange(true)
                }}
                onEnded={() => {
                  videoRef.current?.pause()
                  setPlaying(false)
                  onPlaybackChange(false)
                }}
              >
                <source src={WEDDING.filmSrc} type="video/mp4" />
              </video>
              {!playing ? (
                <button
                  type="button"
                  onClick={() => void toggle()}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-maroon/35"
                >
                  <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold bg-maroon/70 text-gold shadow-[0_0_40px_rgba(212,175,55,0.45)]">
                    <Play size={32} fill="currentColor" />
                  </span>
                  <span className="mt-4 font-body text-xs tracking-[0.3em] text-gold uppercase">
                    {playbackError ? 'Tap to play the film' : 'Play the film'}
                  </span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => void toggle()}
                  className="absolute top-4 right-4 rounded-full border border-gold/50 bg-maroon/70 p-2 text-gold"
                  aria-label="Pause film"
                >
                  <Pause size={16} />
                </button>
              )}
            </>
          )}
        </div>
        {/* <button
          type="button"
          onClick={() => setUseIframe((value) => !value)}
          className="mt-2 pb-5 w-full font-body text-[11px] tracking-[0.2em] text-gold/80 uppercase"
        >
          {useIframe ? 'Return to palace film' : 'Open cinematic iframe trailer'}
        </button> */}
      </div>
    </section>
  )
}
