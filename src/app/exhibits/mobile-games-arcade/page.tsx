'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Smartphone, Play } from 'lucide-react';
import Link from 'next/link';

// Nokia Snake Game Component
const SnakeGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const directionRef = useRef({ dx: 1, dy: 0 });
  const nextDirectionRef = useRef({ dx: 1, dy: 0 });

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Focus canvas to ensure it receives keyboard events
    canvas.focus();

    const gridSize = 10;
    const tileCount = 24;
    const snake = [{ x: 12, y: 12 }];
    let food = { x: 15, y: 15 };
    directionRef.current = { dx: 1, dy: 0 };  // Start moving right
    nextDirectionRef.current = { dx: 1, dy: 0 };  // Buffer for next direction
    let currentScore = 0;

    const drawGame = () => {
      // Nokia greenish-yellow screen
      ctx.fillStyle = '#9BBC0F';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid lines (subtle)
      ctx.strokeStyle = '#8BAC0F';
      ctx.lineWidth = 0.5;
      for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
      }

      // Snake
      ctx.fillStyle = '#0F380F';
      snake.forEach((segment, index) => {
        ctx.fillRect(segment.x * gridSize + 1, segment.y * gridSize + 1, gridSize - 2, gridSize - 2);
      });

      // Food
      ctx.fillStyle = '#0F380F';
      ctx.fillRect(food.x * gridSize + 1, food.y * gridSize + 1, gridSize - 2, gridSize - 2);
    };

    const updateGame = () => {
      // Apply buffered direction at the start of each frame
      directionRef.current.dx = nextDirectionRef.current.dx;
      directionRef.current.dy = nextDirectionRef.current.dy;

      if (directionRef.current.dx === 0 && directionRef.current.dy === 0) return;

      const head = { x: snake[0].x + directionRef.current.dx, y: snake[0].y + directionRef.current.dy };

      // Wall collision
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        setGameOver(true);
        setGameStarted(false);
        return;
      }

      // Self collision
      if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        setGameStarted(false);
        return;
      }

      snake.unshift(head);

      // Food collision
      if (head.x === food.x && head.y === food.y) {
        currentScore += 10;
        setScore(currentScore);
        food = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount)
        };
      } else {
        snake.pop();
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      // Only prevent default for arrow keys to avoid page scrolling
      if (e.key.startsWith('Arrow')) {
        e.preventDefault();
      }

      // Arrow keys
      if (e.key === 'ArrowUp' && directionRef.current.dy === 0) {
        nextDirectionRef.current.dx = 0;
        nextDirectionRef.current.dy = -1;
        console.log('UP pressed');
      }
      if (e.key === 'ArrowDown' && directionRef.current.dy === 0) {
        nextDirectionRef.current.dx = 0;
        nextDirectionRef.current.dy = 1;
        console.log('DOWN pressed');
      }
      if (e.key === 'ArrowLeft' && directionRef.current.dx === 0) {
        nextDirectionRef.current.dx = -1;
        nextDirectionRef.current.dy = 0;
        console.log('LEFT pressed');
      }
      if (e.key === 'ArrowRight' && directionRef.current.dx === 0) {
        nextDirectionRef.current.dx = 1;
        nextDirectionRef.current.dy = 0;
        console.log('RIGHT pressed');
      }

      // Nokia keypad controls (2=up, 4=left, 6=right, 8=down)
      if (e.key === '2' && directionRef.current.dy === 0) {
        nextDirectionRef.current.dx = 0;
        nextDirectionRef.current.dy = -1;
        console.log('2 (UP) pressed');
      }
      if (e.key === '8' && directionRef.current.dy === 0) {
        nextDirectionRef.current.dx = 0;
        nextDirectionRef.current.dy = 1;
        console.log('8 (DOWN) pressed');
      }
      if (e.key === '4' && directionRef.current.dx === 0) {
        nextDirectionRef.current.dx = -1;
        nextDirectionRef.current.dy = 0;
        console.log('4 (LEFT) pressed');
      }
      if (e.key === '6' && directionRef.current.dx === 0) {
        nextDirectionRef.current.dx = 1;
        nextDirectionRef.current.dy = 0;
        console.log('6 (RIGHT) pressed');
      }
    };

    canvas.addEventListener('keydown', handleKeyPress);
    canvas.addEventListener('click', () => canvas.focus());
    const gameLoop = setInterval(() => {
      updateGame();
      drawGame();
    }, 120);

    drawGame();

    return () => {
      clearInterval(gameLoop);
      canvas.removeEventListener('keydown', handleKeyPress);
      canvas.removeEventListener('click', () => canvas.focus());
    };
  }, [gameStarted]);

  const handleDirectionClick = (dx: number, dy: number) => {
    if (!gameStarted || gameOver) return;

    // Prevent 180° turns
    if (dx !== 0 && directionRef.current.dx === 0) {
      nextDirectionRef.current.dx = dx;
      nextDirectionRef.current.dy = 0;
      console.log('D-pad clicked:', dx > 0 ? 'RIGHT' : 'LEFT');
    } else if (dy !== 0 && directionRef.current.dy === 0) {
      nextDirectionRef.current.dx = 0;
      nextDirectionRef.current.dy = dy;
      console.log('D-pad clicked:', dy > 0 ? 'DOWN' : 'UP');
    }
  };

  return (
    <div className="relative inline-block transform hover:scale-105 transition-transform duration-300">
      {/* Nokia Phone Shell with 3D effect */}
      <div className="bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 p-6 rounded-3xl border-4 border-gray-950 shadow-2xl relative" style={{ width: '320px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(34, 197, 94, 0.2)' }}>
        {/* 3D Edge Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

        {/* Phone Top */}
        <div className="bg-gradient-to-b from-gray-950 to-gray-900 p-4 rounded-2xl mb-3 text-center border border-gray-700/50 shadow-inner">
          <div className="text-green-400 text-sm font-bold tracking-widest mb-2 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">NOKIA</div>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(i => (
                <div key={i} className="w-1.5 bg-green-400 rounded-sm shadow-[0_0_4px_rgba(34,197,94,0.8)]" style={{ height: `${i*3}px` }}></div>
              ))}
            </div>
            <div className="text-green-400 text-xs font-mono">100%</div>
          </div>
        </div>

        {/* Screen */}
        <div className="bg-[#9BBC0F] p-2 rounded-lg shadow-inner relative" tabIndex={0}>
          <canvas
            ref={canvasRef}
            width={240}
            height={240}
            className="w-full"
            style={{ imageRendering: 'pixelated' }}
            tabIndex={0}
          />

          {/* Start Overlay */}
          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 rounded-lg">
              <div className="text-[#9BBC0F] text-2xl font-bold mb-4">SNAKE II</div>
              <button
                onClick={() => { setGameStarted(true); setScore(0); setGameOver(false); }}
                className="px-6 py-3 bg-[#9BBC0F] text-[#0F380F] rounded-lg font-bold hover:bg-[#8BAC0F] transition-colors"
              >
                START GAME
              </button>
              <div className="text-[#9BBC0F] text-xs mt-4">Use Arrow Keys</div>
            </div>
          )}

          {/* Game Over Overlay */}
          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 rounded-lg">
              <div className="text-[#9BBC0F] text-3xl font-bold mb-2">GAME OVER</div>
              <div className="text-white text-xl mb-6">Score: {score}</div>
              <button
                onClick={() => { setGameStarted(true); setScore(0); setGameOver(false); }}
                className="px-6 py-3 bg-[#9BBC0F] text-[#0F380F] rounded-lg font-bold hover:bg-[#8BAC0F] transition-colors"
              >
                PLAY AGAIN
              </button>
            </div>
          )}
        </div>

        {/* Score Display */}
        <div className="bg-gray-900 p-3 rounded-b-xl mt-3">
          <div className="text-center text-green-400 text-sm font-mono">
            SCORE: {score.toString().padStart(4, '0')}
          </div>
        </div>

        {/* Nokia Keypad */}
        <div className="mt-4 grid grid-cols-3 gap-2 px-2">
          <button className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105">1</button>
          <button
            onClick={() => handleDirectionClick(0, -1)}
            className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105"
          >
            2<br/><span className="text-xs text-green-400">↑</span>
          </button>
          <button className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105">3</button>

          <button
            onClick={() => handleDirectionClick(-1, 0)}
            className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105"
          >
            4<br/><span className="text-xs text-green-400">←</span>
          </button>
          <button className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105">5</button>
          <button
            onClick={() => handleDirectionClick(1, 0)}
            className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105"
          >
            6<br/><span className="text-xs text-green-400">→</span>
          </button>

          <button className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105">7</button>
          <button
            onClick={() => handleDirectionClick(0, 1)}
            className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105"
          >
            8<br/><span className="text-xs text-green-400">↓</span>
          </button>
          <button className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105">9</button>

          <button className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105">*</button>
          <button className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105">0</button>
          <button className="bg-gradient-to-b from-gray-600 to-gray-700 rounded-xl p-3 text-white font-bold hover:from-gray-500 hover:to-gray-600 active:from-green-600 active:to-green-700 transition-all shadow-lg border border-gray-600/50 hover:scale-105">#</button>
        </div>

        {/* Control Instructions */}
        <div className="mt-4 text-center text-green-300 text-xs bg-black/30 rounded-lg p-3 border border-green-500/30">
          <p className="font-semibold mb-1">Controls: 2↑ 4← 6→ 8↓</p>
          <p className="text-gray-400">Click buttons or use Arrow Keys</p>
        </div>
      </div>
    </div>
  );
};

// Bounce Game Component
const BounceGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ballRef = useRef({ x: 40, y: 100, dx: 2.5, dy: 0, radius: 8, gravity: 0.4, jumpPower: -7, onGround: false });

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ball = ballRef.current;
    ball.x = 40;
    ball.y = 100;
    ball.dy = 0;
    ball.dx = 2.5;
    ball.onGround = false;
    let platforms: { x: number; y: number; width: number; height: number }[] = [
      { x: 0, y: 220, width: 100, height: 20 },
      { x: 120, y: 180, width: 80, height: 20 },
      { x: 220, y: 140, width: 80, height: 20 },
    ];
    let rings: { x: number; y: number; collected: boolean }[] = [
      { x: 140, y: 150, collected: false },
      { x: 250, y: 110, collected: false }
    ];
    let currentScore = 0;
    let cameraX = 0;

    const draw = () => {
      // Sky background
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Clouds
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.beginPath();
      ctx.arc(60 - (cameraX * 0.5) % 320, 40, 20, 0, Math.PI * 2);
      ctx.arc(200 - (cameraX * 0.5) % 320, 60, 25, 0, Math.PI * 2);
      ctx.fill();

      // Platforms
      ctx.fillStyle = '#8B4513';
      platforms.forEach(p => {
        const screenX = p.x - cameraX;
        if (screenX > -p.width && screenX < canvas.width) {
          ctx.fillRect(screenX, p.y, p.width, p.height);
          // Platform detail
          ctx.fillStyle = '#654321';
          ctx.fillRect(screenX, p.y, p.width, 3);
          ctx.fillStyle = '#8B4513';
        }
      });

      // Rings
      rings.forEach(r => {
        if (!r.collected) {
          const screenX = r.x - cameraX;
          if (screenX > -20 && screenX < canvas.width) {
            ctx.strokeStyle = '#FFD700';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(screenX, r.y, 8, 0, Math.PI * 2);
            ctx.stroke();
            ctx.strokeStyle = '#FFA500';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(screenX, r.y, 5, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      });

      // Ball (red with shine)
      const screenX = ball.x - cameraX;
      const gradient = ctx.createRadialGradient(screenX - 2, ball.y - 2, 2, screenX, ball.y, ball.radius);
      gradient.addColorStop(0, '#FF6B6B');
      gradient.addColorStop(1, '#CC0000');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(screenX, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
      // Shine
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath();
      ctx.arc(screenX - 2, ball.y - 2, 3, 0, Math.PI * 2);
      ctx.fill();
    };

    const update = () => {
      // Physics
      ball.dy += ball.gravity;
      ball.y += ball.dy;
      ball.x += ball.dx;

      // Camera follows ball
      cameraX = ball.x - 120;
      if (cameraX < 0) cameraX = 0;

      // Platform collision
      ball.onGround = false;
      platforms.forEach(p => {
        if (
          ball.x + ball.radius > p.x &&
          ball.x - ball.radius < p.x + p.width &&
          ball.y + ball.radius > p.y &&
          ball.y + ball.radius < p.y + p.height &&
          ball.dy > 0
        ) {
          ball.dy = ball.jumpPower * 0.85;
          ball.onGround = true;
        }
      });

      // Ring collection
      rings.forEach(r => {
        if (!r.collected && Math.abs(ball.x - r.x) < 15 && Math.abs(ball.y - r.y) < 15) {
          r.collected = true;
          currentScore += 100;
          setScore(currentScore);
        }
      });

      // Scroll platforms and spawn new ones
      platforms = platforms.filter(p => p.x > cameraX - 100);
      if (platforms.length < 5) {
        const lastPlatform = platforms[platforms.length - 1];
        platforms.push({
          x: lastPlatform.x + 100 + Math.random() * 60,
          y: 140 + Math.random() * 80,
          width: 60 + Math.random() * 40,
          height: 20
        });
      }

      // Spawn new rings
      rings = rings.filter(r => r.x > cameraX - 100);
      if (rings.length < 3 && Math.random() < 0.02) {
        rings.push({
          x: ball.x + 200 + Math.random() * 100,
          y: 100 + Math.random() * 100,
          collected: false
        });
      }

      // Game over
      if (ball.y > canvas.height) {
        setGameOver(true);
        setGameStarted(false);
      }
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      // Arrow keys and space
      if ((e.key === ' ' || e.key === 'ArrowUp') && ball.onGround) {
        ball.dy = ball.jumpPower;
      }
      // Nokia keypad: 2, 5, or 8 to jump
      if ((e.key === '2' || e.key === '5' || e.key === '8') && ball.onGround) {
        ball.dy = ball.jumpPower;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    const gameLoop = setInterval(() => {
      update();
      draw();
    }, 1000 / 60);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameStarted]);

  const handleJump = () => {
    if (!gameStarted || gameOver) return;
    const ball = ballRef.current;
    if (ball.onGround) {
      ball.dy = ball.jumpPower;
    }
  };

  return (
    <div className="relative inline-block transform hover:scale-105 transition-transform duration-300">
      <div className="bg-gradient-to-br from-red-700 via-red-800 to-red-950 p-6 rounded-3xl border-4 border-red-950 shadow-2xl relative" style={{ width: '360px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(239, 68, 68, 0.2)' }}>
        {/* 3D Edge Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
        <div className="bg-gray-900 p-3 rounded-t-xl mb-3 text-center">
          <div className="text-red-400 text-sm font-bold tracking-wider">NOKIA - BOUNCE</div>
        </div>

        <div className="bg-black p-2 rounded-lg shadow-inner relative">
          <canvas ref={canvasRef} width={320} height={240} className="w-full rounded" />

          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 rounded-lg">
              <div className="text-red-500 text-2xl font-bold mb-4">BOUNCE</div>
              <button onClick={() => { setGameStarted(true); setScore(0); setGameOver(false); }} className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700">
                START
              </button>
              <div className="text-red-300 text-xs mt-4">Press 2, 5, or 8 to Jump</div>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 rounded-lg">
              <div className="text-red-500 text-3xl font-bold mb-2">GAME OVER</div>
              <div className="text-white text-xl mb-6">Score: {score}</div>
              <button onClick={() => { setGameStarted(true); setScore(0); setGameOver(false); }} className="px-6 py-3 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700">
                RETRY
              </button>
            </div>
          )}
        </div>

        <div className="bg-gray-900 p-3 rounded-b-xl mt-3">
          <div className="text-center text-red-400 text-sm font-mono">RINGS: {score / 100} | SCORE: {score}</div>
        </div>

        {/* Nokia Keypad */}
        <div className="mt-4 grid grid-cols-3 gap-2 px-4">
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors">1</button>
          <button
            onClick={handleJump}
            className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors"
          >
            2<br/><span className="text-xs text-gray-400">JUMP</span>
          </button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors">3</button>

          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors">4</button>
          <button
            onClick={handleJump}
            className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors"
          >
            5<br/><span className="text-xs text-yellow-400">JUMP</span>
          </button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors">6</button>

          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors">7</button>
          <button
            onClick={handleJump}
            className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors"
          >
            8<br/><span className="text-xs text-gray-400">JUMP</span>
          </button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors">9</button>

          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors">*</button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors">0</button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-red-600 transition-colors">#</button>
        </div>

        {/* Control Instructions */}
        <div className="mt-4 text-center text-red-400 text-xs">
          <p>Press 2, 5, or 8 to Jump</p>
          <p className="text-gray-500">Click buttons or use keyboard</p>
        </div>
      </div>
    </div>
  );
};

// Space Impact Game Component
const SpaceImpactGame = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shipRef = useRef({ x: 30, y: 100, width: 20, height: 12, dy: 0 });
  const bulletsRef = useRef<{ x: number; y: number }[]>([]);

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ship = shipRef.current;
    ship.x = 30;
    ship.y = 100;
    ship.dy = 0;
    bulletsRef.current = [];
    let enemies: { x: number; y: number; type: number }[] = [];
    let powerups: { x: number; y: number }[] = [];
    let particles: { x: number; y: number; dx: number; dy: number; life: number }[] = [];
    let currentScore = 0;
    let currentLives = 3;
    let enemySpawnTimer = 0;
    const starfield: { x: number; y: number; speed: number }[] = [];
    let powerLevel = 1;

    // Initialize starfield
    for (let i = 0; i < 50; i++) {
      starfield.push({
        x: Math.random() * 320,
        y: Math.random() * 240,
        speed: 0.5 + Math.random() * 1.5
      });
    }

    const draw = () => {
      // Space background
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars
      ctx.fillStyle = '#FFF';
      starfield.forEach(star => {
        const size = star.speed > 1.5 ? 2 : 1;
        ctx.fillRect(star.x, star.y, size, size);
      });

      // Ship
      ctx.fillStyle = '#00FF00';
      ctx.fillRect(ship.x, ship.y, ship.width, ship.height);
      ctx.fillStyle = '#0F0';
      // Ship details
      ctx.fillRect(ship.x + ship.width - 5, ship.y - 3, 8, 3);
      ctx.fillRect(ship.x + ship.width - 5, ship.y + ship.height, 8, 3);
      // Cockpit
      ctx.fillStyle = '#0FF';
      ctx.fillRect(ship.x + 5, ship.y + 3, 6, 6);

      // Bullets
      ctx.fillStyle = powerLevel > 1 ? '#FF0' : '#FFFF00';
      bulletsRef.current.forEach(b => {
        ctx.fillRect(b.x, b.y, 6, 2);
        if (powerLevel > 1) {
          ctx.fillRect(b.x, b.y - 3, 6, 2);
          ctx.fillRect(b.x, b.y + 3, 6, 2);
        }
      });

      // Enemies
      enemies.forEach(e => {
        if (e.type === 0) {
          // Basic enemy
          ctx.fillStyle = '#F00';
          ctx.fillRect(e.x, e.y, 16, 12);
          ctx.fillStyle = '#F88';
          ctx.fillRect(e.x + 4, e.y + 3, 8, 6);
        } else {
          // Advanced enemy
          ctx.fillStyle = '#F0F';
          ctx.fillRect(e.x, e.y, 20, 16);
          ctx.fillStyle = '#FAF';
          ctx.fillRect(e.x + 5, e.y + 4, 10, 8);
        }
      });

      // Power-ups
      ctx.fillStyle = '#0FF';
      powerups.forEach(p => {
        ctx.fillRect(p.x - 4, p.y - 4, 8, 8);
        ctx.fillStyle = '#FFF';
        ctx.fillRect(p.x - 2, p.y - 2, 4, 4);
        ctx.fillStyle = '#0FF';
      });

      // Particles
      particles.forEach(p => {
        ctx.fillStyle = `rgba(255, ${100 + p.life * 5}, 0, ${p.life / 30})`;
        ctx.fillRect(p.x, p.y, 3, 3);
      });

      // HUD
      ctx.fillStyle = '#0F0';
      ctx.font = '12px monospace';
      ctx.fillText(`LIVES: ${currentLives}`, 10, 20);
      ctx.fillText(`SCORE: ${currentScore}`, 10, 35);
      if (powerLevel > 1) {
        ctx.fillStyle = '#FF0';
        ctx.fillText('POWER!', 260, 20);
      }
    };

    const update = () => {
      // Update stars
      starfield.forEach(star => {
        star.x -= star.speed;
        if (star.x < 0) {
          star.x = 320;
          star.y = Math.random() * 240;
        }
      });

      // Ship movement
      ship.y += ship.dy;
      if (ship.y < 0) ship.y = 0;
      if (ship.y > 240 - ship.height) ship.y = 240 - ship.height;

      // Bullets
      bulletsRef.current.forEach(b => b.x += 5);
      bulletsRef.current = bulletsRef.current.filter(b => b.x < 320);

      // Enemies
      enemies.forEach(e => e.x -= 2);
      enemies = enemies.filter(e => e.x > -30);

      // Power-ups
      powerups.forEach(p => p.x -= 1.5);
      powerups = powerups.filter(p => p.x > -10);

      // Particles
      particles.forEach(p => {
        p.x += p.dx;
        p.y += p.dy;
        p.life--;
      });
      particles = particles.filter(p => p.life > 0);

      // Spawn enemies
      enemySpawnTimer++;
      if (enemySpawnTimer > 80) {
        const type = Math.random() < 0.8 ? 0 : 1;
        enemies.push({
          x: 320,
          y: 20 + Math.random() * 200,
          type
        });
        enemySpawnTimer = 0;
      }

      // Spawn power-ups
      if (Math.random() < 0.005) {
        powerups.push({ x: 320, y: 30 + Math.random() * 180 });
      }

      // Bullet-enemy collision
      bulletsRef.current.forEach((b, bi) => {
        enemies.forEach((e, ei) => {
          const eWidth = e.type === 0 ? 16 : 20;
          const eHeight = e.type === 0 ? 12 : 16;
          if (b.x > e.x && b.x < e.x + eWidth && b.y > e.y && b.y < e.y + eHeight) {
            bulletsRef.current.splice(bi, 1);
            enemies.splice(ei, 1);
            currentScore += (e.type === 0 ? 10 : 25);
            setScore(currentScore);
            // Explosion particles
            for (let i = 0; i < 8; i++) {
              particles.push({
                x: e.x + eWidth / 2,
                y: e.y + eHeight / 2,
                dx: (Math.random() - 0.5) * 4,
                dy: (Math.random() - 0.5) * 4,
                life: 30
              });
            }
          }
        });
      });

      // Ship-enemy collision
      enemies.forEach((e, ei) => {
        const eWidth = e.type === 0 ? 16 : 20;
        const eHeight = e.type === 0 ? 12 : 16;
        if (
          ship.x < e.x + eWidth &&
          ship.x + ship.width > e.x &&
          ship.y < e.y + eHeight &&
          ship.y + ship.height > e.y
        ) {
          enemies.splice(ei, 1);
          currentLives--;
          setLives(currentLives);
          // Explosion
          for (let i = 0; i < 15; i++) {
            particles.push({
              x: ship.x + ship.width / 2,
              y: ship.y + ship.height / 2,
              dx: (Math.random() - 0.5) * 6,
              dy: (Math.random() - 0.5) * 6,
              life: 40
            });
          }
          if (currentLives <= 0) {
            setGameOver(true);
            setGameStarted(false);
          }
        }
      });

      // Ship-powerup collision
      powerups.forEach((p, pi) => {
        if (Math.abs(ship.x - p.x) < 15 && Math.abs(ship.y - p.y) < 15) {
          powerups.splice(pi, 1);
          powerLevel = 2;
          setTimeout(() => { powerLevel = 1; }, 5000);
        }
      });
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      e.preventDefault();
      // Arrow keys
      if (e.key === 'ArrowUp') ship.dy = -3;
      if (e.key === 'ArrowDown') ship.dy = 3;

      // Nokia keypad (2=up, 8=down, 5=fire)
      if (e.key === '2') ship.dy = -3;
      if (e.key === '8') ship.dy = 3;

      // Fire controls (Space or 5)
      if (e.key === ' ' || e.key === '5') {
        bulletsRef.current.push({ x: ship.x + ship.width, y: ship.y + ship.height / 2 });
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === '2' || e.key === '8') {
        ship.dy = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const gameLoop = setInterval(() => {
      update();
      draw();
    }, 1000 / 60);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStarted]);

  const handleMoveUp = () => {
    if (!gameStarted || gameOver) return;
    shipRef.current.dy = -3;
  };

  const handleMoveDown = () => {
    if (!gameStarted || gameOver) return;
    shipRef.current.dy = 3;
  };

  const handleStop = () => {
    shipRef.current.dy = 0;
  };

  const handleFire = () => {
    if (!gameStarted || gameOver) return;
    const ship = shipRef.current;
    bulletsRef.current.push({ x: ship.x + ship.width, y: ship.y + ship.height / 2 });
  };

  return (
    <div className="relative inline-block transform hover:scale-105 transition-transform duration-300">
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-950 p-6 rounded-3xl border-4 border-blue-950 shadow-2xl relative" style={{ width: '380px', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.2)' }}>
        {/* 3D Edge Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
        <div className="bg-gray-900 p-3 rounded-t-xl mb-3 text-center">
          <div className="text-blue-400 text-sm font-bold tracking-wider">NOKIA - SPACE IMPACT</div>
        </div>

        <div className="bg-black p-2 rounded-lg shadow-inner relative">
          <canvas ref={canvasRef} width={320} height={240} className="w-full rounded" />

          {!gameStarted && !gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 rounded-lg">
              <div className="text-blue-500 text-2xl font-bold mb-4">SPACE IMPACT</div>
              <button onClick={() => { setGameStarted(true); setScore(0); setLives(3); setGameOver(false); }} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                START MISSION
              </button>
              <div className="text-blue-300 text-xs mt-4">2↑ 8↓ Move | 5 Fire</div>
            </div>
          )}

          {gameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 rounded-lg">
              <div className="text-blue-500 text-3xl font-bold mb-2">MISSION FAILED</div>
              <div className="text-white text-xl mb-6">Final Score: {score}</div>
              <button onClick={() => { setGameStarted(true); setScore(0); setLives(3); setGameOver(false); }} className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700">
                RETRY MISSION
              </button>
            </div>
          )}
        </div>

        <div className="bg-gray-900 p-3 rounded-b-xl mt-3">
          <div className="text-center text-blue-400 text-sm font-mono">
            LIVES: {lives} | SCORE: {score.toString().padStart(5, '0')}
          </div>
        </div>

        {/* Nokia Keypad */}
        <div className="mt-4 grid grid-cols-3 gap-2 px-4">
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors">1</button>
          <button
            onMouseDown={handleMoveUp}
            onMouseUp={handleStop}
            onMouseLeave={handleStop}
            onTouchStart={handleMoveUp}
            onTouchEnd={handleStop}
            className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors"
          >
            2<br/><span className="text-xs text-gray-400">↑</span>
          </button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors">3</button>

          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors">4</button>
          <button
            onClick={handleFire}
            className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-yellow-500 transition-colors"
          >
            5<br/><span className="text-xs text-yellow-400">FIRE</span>
          </button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors">6</button>

          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors">7</button>
          <button
            onMouseDown={handleMoveDown}
            onMouseUp={handleStop}
            onMouseLeave={handleStop}
            onTouchStart={handleMoveDown}
            onTouchEnd={handleStop}
            className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors"
          >
            8<br/><span className="text-xs text-gray-400">↓</span>
          </button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors">9</button>

          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors">*</button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors">0</button>
          <button className="bg-gray-700 rounded-lg p-3 text-white font-bold hover:bg-gray-600 active:bg-blue-600 transition-colors">#</button>
        </div>

        {/* Control Instructions */}
        <div className="mt-4 text-center text-blue-400 text-xs">
          <p>2↑ 8↓ Move | 5 or Space to Fire</p>
          <p className="text-gray-500">Click buttons or use keyboard</p>
        </div>
      </div>
    </div>
  );
};

// Main Component
export default function MobileGamesExhibit() {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);
  const [reactions, setReactions] = useState([
    { emoji: '🎮', count: 1847, label: 'Addicted' },
    { emoji: '🐍', count: 2134, label: 'Snake Pro' },
    { emoji: '🚀', count: 992, label: 'Space Ace' },
    { emoji: '🔴', count: 1543, label: 'Bounce Master' },
    { emoji: '📱', count: 876, label: 'Nokia Fan' }
  ]);

  const games = [
    {
      id: 'snake',
      title: 'Snake II',
      phone: 'Nokia 3310',
      year: '2000',
      icon: '🐍',
      color: 'from-green-600 to-emerald-700',
      description: 'The legendary game that came pre-installed on Nokia phones. Eat dots, grow longer, avoid walls!'
    },
    {
      id: 'bounce',
      title: 'Bounce',
      phone: 'Nokia Series 40',
      year: '2001',
      icon: '🔴',
      color: 'from-red-600 to-orange-600',
      description: 'Guide the bouncing red ball through platforms, collecting rings and avoiding obstacles.'
    },
    {
      id: 'space-impact',
      title: 'Space Impact',
      phone: 'Nokia 3310',
      year: '2000',
      icon: '🚀',
      color: 'from-blue-600 to-cyan-600',
      description: 'Classic space shooter! Destroy enemies, collect power-ups, survive as long as you can.'
    }
  ];

  const liveComments = [
    { user: 'SnakeMaster2003', comment: 'Grabe yung high score ko!!! 284 points!!! 🐍', time: '1 min ago' },
    { user: 'NokiaLover', comment: 'Nakakamiss yung mga games na to!!! 💚', time: '2 min ago' },
    { user: 'BouncePro', comment: 'Ang hirap ng level 5 sa Bounce!!! 😭', time: '3 min ago' },
    { user: 'SpaceImpactFan', comment: 'Sino nakakaalala ng cheat codes? 🚀', time: '4 min ago' },
    { user: 'ClassicGamer', comment: 'Walang kupas ang Nokia games!!!', time: '5 min ago' }
  ];

  const addReaction = (index: number) => {
    setReactions(prev => prev.map((reaction, i) =>
      i === index ? { ...reaction, count: reaction.count + 1 } : reaction
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 via-blue-950 to-purple-950 relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-black/70 via-black/60 to-black/70 backdrop-blur-xl py-8 border-b border-green-500/30 relative z-10"
      >
        <div className="max-w-6xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 mb-6 transition-all hover:gap-3 group">
            <ArrowLeft className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-semibold">Back to Museum</span>
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-1">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-4xl md:text-5xl bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-4 leading-tight"
              >
                Mobile Games Arcade
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-green-200 text-lg max-w-2xl leading-relaxed"
              >
                Step back into the golden age of mobile gaming. Play authentic Nokia classics that defined a generation!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 flex gap-4 flex-wrap"
              >
                <div className="bg-green-500/20 border border-green-400/30 px-4 py-2 rounded-full text-green-300 text-sm font-medium backdrop-blur-sm">
                  🎮 3 Classic Games
                </div>
                <div className="bg-blue-500/20 border border-blue-400/30 px-4 py-2 rounded-full text-blue-300 text-sm font-medium backdrop-blur-sm">
                  📱 100% Authentic
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-right text-white bg-gradient-to-br from-green-600/20 to-blue-600/20 p-6 rounded-2xl border border-green-400/30 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 text-green-300 mb-3">
                <Smartphone className="w-6 h-6" />
                <span className="font-semibold text-lg">Classic Gaming Era</span>
              </div>
              <div className="text-3xl font-mono bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent font-bold">
                2000-2010
              </div>
              <div className="text-sm text-gray-300 mt-2">The Nokia Legacy</div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Player Area */}
          <div className="lg:col-span-2">
            {/* Selected Game Display */}
            {selectedGame && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-black rounded-xl overflow-hidden shadow-2xl mb-6"
              >
                <div className="bg-gray-900 p-4 flex justify-center">
                  {selectedGame === 'snake' && <SnakeGame />}
                  {selectedGame === 'bounce' && <BounceGame />}
                  {selectedGame === 'space-impact' && <SpaceImpactGame />}
                </div>
              </motion.div>
            )}

            {/* Game Description */}
            {selectedGame && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-8 text-white mb-6 border border-white/20 shadow-2xl"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-4xl">{games.find(g => g.id === selectedGame)?.icon}</span>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                        {games.find(g => g.id === selectedGame)?.title}
                      </h3>
                    </div>
                    <p className="text-green-300 text-sm font-semibold mb-1">📱 {games.find(g => g.id === selectedGame)?.phone}</p>
                    <p className="text-gray-200 text-base mt-3 leading-relaxed">{games.find(g => g.id === selectedGame)?.description}</p>
                  </div>
                  <div className="text-right ml-6">
                    <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 px-4 py-2 rounded-xl border border-green-400/30">
                      <div className="text-3xl font-mono font-bold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                        {games.find(g => g.id === selectedGame)?.year}
                      </div>
                      <div className="text-yellow-400 text-sm mt-1 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">⭐ Classic</div>
                    </div>
                  </div>
                </div>

                {/* Live Reactions */}
                <div className="border-t border-white/30 pt-5">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎮</span>
                    <span className="bg-gradient-to-r from-green-300 to-purple-300 bg-clip-text text-transparent">Live Reactions</span>
                  </h4>
                  <div className="flex gap-3 flex-wrap">
                    {reactions.map((reaction, index) => (
                      <motion.button
                        key={index}
                        whileHover={{ scale: 1.15, rotate: [0, -10, 10, 0] }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addReaction(index)}
                        className="bg-gradient-to-br from-white/20 to-white/10 hover:from-white/30 hover:to-white/20 px-5 py-3 rounded-full transition-all flex items-center gap-2 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-xl"
                      >
                        <span className="text-2xl">{reaction.emoji}</span>
                        <div className="text-left">
                          <div className="text-white font-bold text-sm">{reaction.count}</div>
                          <div className="text-gray-300 text-xs">{reaction.label}</div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Game Selection */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl"
            >
              <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-3 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                <span className="text-3xl">📱</span>
                Classic Nokia Games
              </h3>

              <div className="grid grid-cols-1 gap-4">
                {games.map((game, index) => (
                  <motion.div
                    key={game.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.03, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedGame(game.id)}
                    className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                      selectedGame === game.id
                        ? 'bg-gradient-to-br from-green-500/30 to-blue-500/30 border-2 border-green-400 shadow-[0_0_30px_rgba(34,197,94,0.3)]'
                        : 'bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border-2 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div className="flex gap-5 items-center">
                      <div className={`text-5xl transform transition-transform ${selectedGame === game.id ? 'scale-110' : ''}`}>
                        {game.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-white font-bold text-lg truncate pr-2">{game.title}</h4>
                          <span className="text-yellow-400 text-lg flex-shrink-0 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]">⭐</span>
                        </div>
                        <p className="text-green-300 text-sm mb-2 font-medium">{game.phone}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-blue-300 text-sm font-mono bg-blue-500/20 px-2 py-1 rounded">{game.year}</span>
                          <span className="text-purple-300 text-xs bg-purple-500/20 px-2 py-1 rounded">Classic</span>
                        </div>
                      </div>
                    </div>
                    {selectedGame === game.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-4 pt-4 border-t border-white/20"
                      >
                        <p className="text-gray-200 text-sm">{game.description}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <Play className="w-4 h-4 text-green-400" />
                          <span className="text-green-300 text-xs font-semibold">Now Playing</span>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 relative z-10">
            {/* Live Comments */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
            >
              <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-3">
                <span className="text-2xl animate-pulse">💬</span>
                <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Live Comments</span>
              </h3>

              <div className="space-y-3 max-h-80 overflow-y-auto pr-2 custom-scrollbar">
                {liveComments.map((comment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 4 }}
                    className="bg-gradient-to-r from-white/10 to-white/5 p-4 rounded-xl border border-white/10 hover:border-green-400/50 transition-all"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-green-300 text-sm font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        {comment.user}
                      </span>
                      <span className="text-gray-400 text-xs bg-black/30 px-2 py-1 rounded">{comment.time}</span>
                    </div>
                    <p className="text-white text-sm leading-relaxed">{comment.comment}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-5 flex gap-2">
                <input
                  type="text"
                  placeholder="Share your high score..."
                  className="flex-1 bg-white/10 text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none text-sm border border-white/20 focus:border-green-400 focus:bg-white/15 transition-all"
                />
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 px-6 py-3 rounded-xl text-white text-sm font-semibold transition-all shadow-lg hover:shadow-green-500/50 hover:scale-105">
                  Send
                </button>
              </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
            >
              <h3 className="text-white font-bold text-xl mb-5 flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span className="bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">Quick Stats</span>
              </h3>

              <div className="space-y-3">
                {[
                  { label: 'Total Games Played', value: '2,847', emoji: '🎮', color: 'from-green-500 to-emerald-500' },
                  { label: 'High Score (Snake)', value: '284', emoji: '🐍', color: 'from-yellow-500 to-orange-500' },
                  { label: 'Active Players', value: '156', emoji: '👥', color: 'from-blue-500 to-cyan-500' },
                  { label: 'Nokia Phones Used', value: '3.2M', emoji: '📱', color: 'from-purple-500 to-pink-500' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.05, x: 4 }}
                    className={`flex items-center justify-between bg-gradient-to-r ${stat.color} bg-opacity-10 p-4 rounded-xl border border-white/20 hover:border-white/40 transition-all shadow-lg`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{stat.emoji}</span>
                      <span className="text-white text-sm font-medium">{stat.label}</span>
                    </div>
                    <span className="text-green-300 font-bold text-lg bg-black/30 px-3 py-1 rounded-lg">{stat.value}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Historical Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-xl rounded-3xl p-8 text-white border border-green-500/30 shadow-2xl relative z-10 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <h3 className="font-serif text-3xl mb-6 bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent flex items-center gap-3">
              <span className="text-4xl">📱</span>
              The Golden Age of Mobile Gaming (2000-2010)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-br from-green-500/20 to-emerald-500/10 p-6 rounded-2xl border border-green-400/30"
              >
                <h4 className="font-bold text-green-300 mb-4 text-lg flex items-center gap-2">
                  <span className="text-2xl">🌟</span>
                  Cultural Impact
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Defined mobile entertainment before smartphones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Created shared gaming experiences in schools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Made Nokia the undisputed mobile king</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-400 mt-1">▸</span>
                    <span>Inspired a generation of casual gamers</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="bg-gradient-to-br from-blue-500/20 to-cyan-500/10 p-6 rounded-2xl border border-blue-400/30"
              >
                <h4 className="font-bold text-blue-300 mb-4 text-lg flex items-center gap-2">
                  <span className="text-2xl">🎮</span>
                  Iconic Games
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Snake II (Nokia 3310)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Bounce (Nokia Series 40)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Space Impact (Nokia 3310)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Pairs II (Nokia 5110)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Rapid Roll (Nokia 3510)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">▸</span>
                    <span>Beach Rally (Nokia N-Gage)</span>
                  </li>
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 p-6 rounded-2xl border border-purple-400/30"
              >
                <h4 className="font-bold text-purple-300 mb-4 text-lg flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  Social Phenomena
                </h4>
                <ul className="space-y-2 text-gray-200">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>High score competitions in class</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Phone passing during breaks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Snake addiction warnings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>Battery life as gaming currency</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
