import AudioToggle from "@components/AudioToggle/AudioToggle";
import SlotMachine from "@components/SlotMachine/SlotMachine";

export default function Home() {
  return (
    <div className="bg-page_background flex items-center justify-center min-h-screen w-full">
      <div className="relative flex items-start">
        <SlotMachine />
        <div className="ml-3">
          <AudioToggle />
        </div>
      </div>
    </div>
  );
}