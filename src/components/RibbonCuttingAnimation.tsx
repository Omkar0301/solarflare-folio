import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  rotation: number;
  velocityX: number;
  velocityY: number;
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
}

const RibbonCuttingAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState<
    "waiting" | "scissors" | "cutting" | "falling" | "confetti" | "complete"
  >("waiting");
  const [confettiPieces, setConfettiPieces] = useState<ConfettiPiece[]>([]);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const [isScissorsCursor, setIsScissorsCursor] = useState(false);

  const colors = [
    "#FF6B6B",
    "#4ECDC4",
    "#45B7D1",
    "#FFA07A",
    "#98D8C8",
    "#FFD700",
    "#FF69B4",
    "#87CEEB",
  ];

  useEffect(() => {
    const ribbonTimer = setTimeout(() => {
      setStage("scissors");
      setIsScissorsCursor(true);
    }, 800);
    return () => clearTimeout(ribbonTimer);
  }, []);

  const handleRibbonCut = () => {
    if (stage === "scissors") {
      setStage("cutting");
      generateConfetti();
      generateSparkles();

      setTimeout(() => setStage("falling"), 600);
      setTimeout(() => setStage("confetti"), 1400);
      setTimeout(() => {
        setStage("complete");
        setIsScissorsCursor(false);
        setTimeout(onComplete, 500);
      }, 3400);
    }
  };

  const generateConfetti = () => {
    const pieces: ConfettiPiece[] = [];
    for (let i = 0; i < 80; i++) {
      pieces.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: window.innerHeight / 2 - 50,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        velocityX: (Math.random() - 0.5) * 15,
        velocityY: Math.random() * -10 - 5,
      });
    }
    setConfettiPieces(pieces);
  };

  const generateSparkles = () => {
    const sparkleArray: Sparkle[] = [];
    for (let i = 0; i < 20; i++) {
      sparkleArray.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10,
        duration: Math.random() * 1 + 0.5,
      });
    }
    setSparkles(sparkleArray);
  };

  useEffect(() => {
    if (isScissorsCursor) {
      // Set cursor on the ribbon container element
      const ribbonElement = document.querySelector(".fixed.inset-0");
      if (ribbonElement) {
        ribbonElement.setAttribute("style", "cursor: pointer !important");
        console.log("Set pointer cursor on ribbon element");
      }
    } else {
      // Reset cursor
      const ribbonElement = document.querySelector(".fixed.inset-0");
      if (ribbonElement) {
        ribbonElement.removeAttribute("style");
      }
      document.body.style.cursor = "auto";
    }

    return () => {
      document.body.style.cursor = "auto";
    };
  }, [isScissorsCursor]);

  return (
    <AnimatePresence>
      {stage !== "complete" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-purple-900/30 via-pink-900/30 to-blue-900/30 backdrop-blur-md"
          onClick={stage === "scissors" ? handleRibbonCut : undefined}
        >
          {/* Ribbon */}
          <motion.div
            className="absolute top-1/2 left-0 right-0 h-20 -translate-y-1/2"
            initial={{ scaleX: 0 }}
            animate={{
              scaleX: 1,
              opacity: stage === "falling" || stage === "confetti" ? 0 : 1,
            }}
            transition={{
              scaleX: { duration: 0.8, ease: "easeOut" },
              opacity: { duration: 0.3 },
            }}
            style={{ transformOrigin: "center" }}
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-yellow-400/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-red-800/50 to-transparent"></div>
              </div>
              {/* Gold edges */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"></div>
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400"></div>
            </div>
          </motion.div>

          {/* Scissors */}
          {stage === "scissors" && (
            <motion.div
              className="absolute z-10"
              initial={{ scale: 0, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, ease: "backOut" }}
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                className="drop-shadow-2xl"
              >
                <defs>
                  <linearGradient
                    id="scissorsGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#C0C0C0" />
                    <stop offset="50%" stopColor="#FFFFFF" />
                    <stop offset="100%" stopColor="#808080" />
                  </linearGradient>
                  <radialGradient id="handleGradient">
                    <stop offset="0%" stopColor="#FFD700" />
                    <stop offset="100%" stopColor="#FFA500" />
                  </radialGradient>
                </defs>

                {/* Left blade */}
                <path
                  d="M 30 40 L 60 60 L 60 65 L 35 50 Z"
                  fill="url(#scissorsGradient)"
                  stroke="#666"
                  strokeWidth="0.5"
                />

                {/* Right blade */}
                <path
                  d="M 90 40 L 60 60 L 60 65 L 85 50 Z"
                  fill="url(#scissorsGradient)"
                  stroke="#666"
                  strokeWidth="0.5"
                />

                {/* Center pivot */}
                <circle cx="60" cy="60" r="4" fill="#666" />

                {/* Left handle */}
                <ellipse
                  cx="35"
                  cy="35"
                  rx="12"
                  ry="18"
                  fill="url(#handleGradient)"
                  stroke="#FF8C00"
                  strokeWidth="1"
                />
                <ellipse
                  cx="35"
                  cy="35"
                  rx="8"
                  ry="12"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="1"
                  opacity="0.6"
                />

                {/* Right handle */}
                <ellipse
                  cx="85"
                  cy="35"
                  rx="12"
                  ry="18"
                  fill="url(#handleGradient)"
                  stroke="#FF8C00"
                  strokeWidth="1"
                />
                <ellipse
                  cx="85"
                  cy="35"
                  rx="8"
                  ry="12"
                  fill="none"
                  stroke="#FFD700"
                  strokeWidth="1"
                  opacity="0.6"
                />
              </svg>
            </motion.div>
          )}

          {/* Falling ribbon pieces */}
          {stage === "falling" && (
            <>
              <motion.div
                className="absolute top-1/2 left-0 w-1/2 h-20 -translate-y-1/2 bg-gradient-to-r from-red-600 via-red-500 to-transparent"
                initial={{ rotate: 0, y: 0 }}
                animate={{ rotate: 15, y: 200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                style={{ transformOrigin: "right center" }}
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-300 to-transparent"></div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 right-0 w-1/2 h-20 -translate-y-1/2 bg-gradient-to-l from-red-600 via-red-500 to-transparent"
                initial={{ rotate: 0, y: 0 }}
                animate={{ rotate: -15, y: 200, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeIn" }}
                style={{ transformOrigin: "left center" }}
              >
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-l from-yellow-400 via-yellow-300 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-l from-yellow-400 via-yellow-300 to-transparent"></div>
              </motion.div>
            </>
          )}

          {/* Confetti */}
          {stage === "confetti" && (
            <div className="absolute inset-0 pointer-events-none">
              {confettiPieces.map((piece) => (
                <motion.div
                  key={piece.id}
                  className="absolute"
                  initial={{
                    x: piece.x,
                    y: piece.y,
                    rotate: piece.rotation,
                    scale: 0,
                  }}
                  animate={{
                    x: piece.x + piece.velocityX * 20,
                    y: piece.y + piece.velocityY * 20 + 200,
                    rotate: piece.rotation + 720,
                    scale: [0, 1, 1, 0],
                    opacity: [1, 1, 0.8, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className="rounded-sm"
                    style={{
                      width: piece.size,
                      height: piece.size,
                      backgroundColor: piece.color,
                      boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                    }}
                  />
                </motion.div>
              ))}
            </div>
          )}

          {/* Sparkles */}
          {sparkles.map((sparkle) => (
            <motion.div
              key={sparkle.id}
              className="absolute pointer-events-none"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 0],
                opacity: [0, 1, 0],
                rotate: 360,
              }}
              transition={{
                duration: sparkle.duration,
                ease: "easeOut",
                repeat: 1,
              }}
              style={{
                left: sparkle.x,
                top: sparkle.y,
              }}
            >
              <svg
                width={sparkle.size}
                height={sparkle.size}
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2L14.09 8.26L20.18 8.27L15.04 12.14L17.13 18.4L12 14.54L6.87 18.4L8.96 12.14L3.82 8.27L9.91 8.26L12 2Z"
                  fill="#FFD700"
                  stroke="#FFA500"
                  strokeWidth="0.5"
                />
              </svg>
            </motion.div>
          ))}

          {/* Celebration text */}
          {stage === "confetti" && (
            <motion.div
              className="absolute text-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                🎉 Grand Opening! 🎉
              </h1>
              <p className="text-2xl text-white/90 drop-shadow-lg">
                Welcome to KRISHIVA INNOVATIVES
              </p>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RibbonCuttingAnimation;
