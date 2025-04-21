export function playAudio(audioSrc: string) {
    const audio = new Audio(audioSrc);
    audio.volume = 0.3;
    audio.play().catch((e: unknown) => {
      console.error("Audio play failed:", e);
    });
}