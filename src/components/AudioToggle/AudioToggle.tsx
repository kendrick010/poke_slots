import { useAudio } from '@contexts/AudioContext';
import { FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6';

export default function AudioToggle() {
  const { isMuted, toggleMute } = useAudio();

  return (
    <button 
      onClick={toggleMute}
      className="text-white"
    >
      {isMuted ? (
        <FaVolumeXmark className="w-6 h-6" />
      ) : (
        <FaVolumeHigh className="w-6 h-6" />
      )}
    </button>
  );
}