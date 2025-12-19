import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2 } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioLevel, setAudioLevel] = useState(0);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    let animationId: number;
    if (isPlaying) {
      const animate = () => {
        setAudioLevel(Math.random() * 100);
        animationId = requestAnimationFrame(animate);
      };
      animationId = requestAnimationFrame(animate);
    }
    return () => {
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div data-player className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-[#050b1a] via-[#0a1428] to-[#050b1a]/95 backdrop-blur-lg border-t border-[#e0e0e0]/10 shadow-2xl">
      <audio
        ref={audioRef}
        src="https://stream-178.zeno.fm/asa9nfcu0a6tv"
        preload="none"
      />

      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center gap-4">
          <button
            onClick={togglePlay}
            className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 flex items-center justify-center shadow-lg shadow-red-900/50 transition-all duration-300 hover:scale-110 border-2 border-red-500/30"
            aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
          >
            {isPlaying ? (
              <Pause size={28} className="text-white" fill="white" />
            ) : (
              <Play size={28} className="text-white ml-1" fill="white" />
            )}
          </button>

          <div className="flex-1 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex-1 h-12 bg-[#050b1a]/50 rounded-lg border border-[#e0e0e0]/10 overflow-hidden flex items-center px-3">
                <div className="flex items-end gap-0.5 h-8">
                  {[...Array(40)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-gradient-to-t from-red-600 to-[#e0e0e0] rounded-full transition-all duration-75"
                      style={{
                        height: isPlaying
                          ? `${Math.max(10, (Math.sin((audioLevel + i * 10) / 10) + 1) * 50)}%`
                          : '10%',
                      }}
                    />
                  ))}
                </div>
                <span className="ml-4 text-[#e0e0e0] text-sm font-medium flex-1 text-center">
                  {isPlaying ? 'Ao Vivo - Rede RC Sat' : 'Clique para ouvir'}
                </span>
              </div>

              <div className="hidden sm:flex items-center gap-2 bg-[#050b1a]/50 rounded-lg border border-[#e0e0e0]/10 px-3 py-2">
                <Volume2 size={20} className="text-[#e0e0e0]" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-20 accent-red-600"
                  aria-label="Volume"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
