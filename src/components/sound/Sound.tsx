import React, { useState, useRef, useEffect } from "react";
import SoundIcon from "@/src/components/assets/SoundIcon";
import SoundOffIcon from "@/src/components/assets/SoundOffIcon";

const Sound = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    // 컴포넌트가 마운트되었을 때 자동 재생 시작
    if (audioRef.current) {
      audioRef.current.play();
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute top-4 right-4 z-50">
      <audio ref={audioRef} loop={true} autoPlay={true}>
        <source src="/audio.mp3" />
      </audio>
      <button onClick={togglePlayPause} className=" text-[#777]">
        {isPlaying ? <SoundIcon /> : <SoundOffIcon />}
      </button>
    </div>
  );
};

export default Sound;
