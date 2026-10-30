import { useState } from 'react'
import CountdownTimer from './components/CountdownTimer'
import DestinationGuide from './components/DestinationGuide'
import Footer from './components/Footer'
import HeroEnvelope from './components/HeroEnvelope'
import type { Language } from './data/translations'
import Navbar from './components/Navbar'
import MandalaWatermark from './components/Ornaments'
import PetalField from './components/PetalField'
import PhotoGallery from './components/PhotoGallery'
import RsvpSection from './components/RsvpSection'
import ScratchCardDate from './components/ScratchCardDate'
import StoryTimeline from './components/StoryTimeline'
import WeddingVideo from './components/WeddingVideo'
import { WEDDING } from './data/wedding'
import { useInvitationMusic } from './hooks/useInvitationMusic'

export default function App() {
  const [opened, setOpened] = useState(false)
  const [language, setLanguage] = useState<Language>('en')
  const [musicOn, setMusicOn] = useState(false)
  const [videoPlaying, setVideoPlaying] = useState(false)
  const audioRef = useInvitationMusic(musicOn && !videoPlaying)

  const openInvitation = () => {
    setOpened(true)
    setMusicOn(true)
  }

  return (
    <div lang={language} className="relative min-h-svh overflow-x-hidden bg-maroon font-body text-ivory">
      <audio ref={audioRef} loop preload="none" src={WEDDING.audioSrc} />
      {!opened ? (
        <HeroEnvelope
          language={language}
          onToggleLanguage={() => setLanguage((current) => (current === 'en' ? 'hi' : 'en'))}
          onOpen={openInvitation}
        />
      ) : null}

      {opened ? (
        <>
          <Navbar
            language={language}
            onToggleLanguage={() => setLanguage((current) => (current === 'en' ? 'hi' : 'en'))}
            musicOn={musicOn && !videoPlaying}
            onToggleMusic={() => setMusicOn((value) => !value)}
          />
          <main className="relative pt-16">
            <div className="pointer-events-none fixed inset-0 z-0">
              <div 
              className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.12),transparent_36%),radial-gradient(circle_at_80%_0%,rgba(122,20,36,0.4),transparent_40%)]"/>
              <MandalaWatermark />
              <PetalField count={16} />
            </div>
            <div className="relative z-10">
              <ScratchCardDate language={language} />
              <CountdownTimer language={language} />
              <PhotoGallery language={language} />
              <WeddingVideo language={language} onPlaybackChange={setVideoPlaying} />
              <StoryTimeline language={language} />
              <DestinationGuide language={language} />
              <RsvpSection language={language} />
              <Footer language={language} />
            </div>
          </main>
        </>
      ) : null}
    </div>
  )
}
