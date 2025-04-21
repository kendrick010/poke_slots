import { ReactNode, createContext, useContext, useEffect, useRef, useState } from 'react';

type AudioContextType = {
  isMuted: boolean;
  toggleMute: () => void;
};

const AudioContext = createContext<AudioContextType | undefined>(undefined);

type AudioProviderProps = {
  children: ReactNode;
  audioSrc?: string;
};

export function AudioProvider({ children, audioSrc }: AudioProviderProps) {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize audio
  useEffect(() => {
    if (!audioSrc) return;

    audioRef.current = new Audio(audioSrc);
    audioRef.current.volume = 1.0;
    audioRef.current.loop = true;
    audioRef.current.muted = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [audioSrc]);

  // Handle mute state changes
  useEffect(() => {
    if (!audioRef.current) return;
    
    audioRef.current.muted = isMuted;
    
    if (!isMuted) {
      audioRef.current.play().catch((_: unknown) => {
        console.log("Audio playback failed");
      });
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted(prev => !prev);
  };

  return (
    <AudioContext.Provider value={{ isMuted, toggleMute }}>
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error('useAudio must be used within an AudioProvider');
  }
  return context;
}