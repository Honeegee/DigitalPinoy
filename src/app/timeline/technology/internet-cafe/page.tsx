'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Coffee,
  Gamepad2,
  Monitor,
  Users,
  ArrowLeft,
  Calendar,
  TrendingUp,
  Zap,
  Clock,
  Sparkles,
  Volume2,
  Play,
  Pause
} from 'lucide-react';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

// Simple Snake Game Component
const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gridSize = 20;
    const tileCount = canvas.width / gridSize;

    const snake = [{ x: 10, y: 10 }];
    let food = { x: 15, y: 15 };
    let dx = 0;
    let dy = 0;
    let currentScore = 0;

    const drawGame = () => {
      // Clear canvas
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw snake
      ctx.fillStyle = '#00ff00';
      snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize - 2, gridSize - 2);
      });

      // Draw food
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize - 2, gridSize - 2);
    };

    const updateGame = () => {
      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      // Check wall collision
      if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        setGameOver(true);
        setGameStarted(false);
        return;
      }

      // Check self collision
      if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        setGameStarted(false);
        return;
      }

      snake.unshift(head);

      // Check food collision
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
      if (e.key === 'ArrowUp' && dy === 0) { dx = 0; dy = -1; }
      if (e.key === 'ArrowDown' && dy === 0) { dx = 0; dy = 1; }
      if (e.key === 'ArrowLeft' && dx === 0) { dx = -1; dy = 0; }
      if (e.key === 'ArrowRight' && dx === 0) { dx = 1; dy = 0; }
    };

    window.addEventListener('keydown', handleKeyPress);

    const gameLoop = setInterval(() => {
      updateGame();
      drawGame();
    }, 100);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gameStarted]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border-2 border-green-500 rounded-lg bg-black"
      />
      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg">
          <button
            onClick={() => { setGameStarted(true); setScore(0); setGameOver(false); }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors flex items-center gap-2"
          >
            <Play className="w-5 h-5" /> Start Game
          </button>
        </div>
      )}
      {gameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 rounded-lg">
          <p className="text-red-500 text-2xl font-bold mb-2">Game Over!</p>
          <p className="text-white text-xl mb-4">Score: {score}</p>
          <button
            onClick={() => { setGameStarted(true); setScore(0); setGameOver(false); }}
            className="px-6 py-3 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
      <div className="text-center mt-2 text-green-400 font-mono">
        Score: {score} | Use Arrow Keys
      </div>
    </div>
  );
};

// Simple Pong Game Component
const PongGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState({ player: 0, computer: 0 });

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ball = { x: 200, y: 200, dx: 3, dy: 3, radius: 8 };
    const playerPaddle = { x: 10, y: 150, width: 10, height: 80, dy: 0 };
    const computerPaddle = { x: 380, y: 150, width: 10, height: 80 };

    const draw = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw center line
      ctx.strokeStyle = '#444';
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(200, 0);
      ctx.lineTo(200, 400);
      ctx.stroke();
      ctx.setLineDash([]);

      // Draw paddles
      ctx.fillStyle = '#fff';
      ctx.fillRect(playerPaddle.x, playerPaddle.y, playerPaddle.width, playerPaddle.height);
      ctx.fillRect(computerPaddle.x, computerPaddle.y, computerPaddle.width, computerPaddle.height);

      // Draw ball
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fill();
    };

    const update = () => {
      // Move ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Ball collision with top/bottom
      if (ball.y - ball.radius < 0 || ball.y + ball.radius > 400) {
        ball.dy *= -1;
      }

      // Ball collision with paddles
      if (
        ball.x - ball.radius < playerPaddle.x + playerPaddle.width &&
        ball.y > playerPaddle.y &&
        ball.y < playerPaddle.y + playerPaddle.height
      ) {
        ball.dx *= -1;
      }

      if (
        ball.x + ball.radius > computerPaddle.x &&
        ball.y > computerPaddle.y &&
        ball.y < computerPaddle.y + computerPaddle.height
      ) {
        ball.dx *= -1;
      }

      // Score
      if (ball.x < 0) {
        setScore(prev => ({ ...prev, computer: prev.computer + 1 }));
        ball.x = 200;
        ball.y = 200;
      }
      if (ball.x > 400) {
        setScore(prev => ({ ...prev, player: prev.player + 1 }));
        ball.x = 200;
        ball.y = 200;
      }

      // Move player paddle
      playerPaddle.y += playerPaddle.dy;
      if (playerPaddle.y < 0) playerPaddle.y = 0;
      if (playerPaddle.y + playerPaddle.height > 400) playerPaddle.y = 400 - playerPaddle.height;

      // AI for computer paddle
      if (ball.x > 200) {
        if (computerPaddle.y + computerPaddle.height / 2 < ball.y) {
          computerPaddle.y += 2;
        } else {
          computerPaddle.y -= 2;
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') playerPaddle.dy = -5;
      if (e.key === 'ArrowDown') playerPaddle.dy = 5;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') playerPaddle.dy = 0;
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

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border-2 border-blue-500 rounded-lg bg-black"
      />
      {!gameStarted && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg">
          <button
            onClick={() => { setGameStarted(true); setScore({ player: 0, computer: 0 }); }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-bold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Play className="w-5 h-5" /> Start Game
          </button>
        </div>
      )}
      <div className="text-center mt-2 text-blue-400 font-mono">
        You: {score.player} | CPU: {score.computer} | Arrow Keys
      </div>
    </div>
  );
};

// Brick Breaker Game Component
const BrickBreakerGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameStarted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const ball = { x: 200, y: 350, dx: 4, dy: -4, radius: 8 };
    const paddle = { x: 150, y: 380, width: 100, height: 10, dx: 0 };
    const bricks: { x: number; y: number; status: number }[][] = [];
    let currentScore = 0;
    let currentLives = 3;

    // Create bricks
    const brickRowCount = 5;
    const brickColumnCount = 8;
    const brickWidth = 45;
    const brickHeight = 20;
    const brickPadding = 5;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 10;

    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = '#fff';
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = () => {
      ctx.fillStyle = '#0095DD';
      ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    };

    const drawBricks = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;

            const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff'];
            ctx.fillStyle = colors[r % 5];
            ctx.fillRect(brickX, brickY, brickWidth, brickHeight);
          }
        }
      }
    };

    const collisionDetection = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          const b = bricks[c][r];
          if (b.status === 1) {
            if (
              ball.x > b.x &&
              ball.x < b.x + brickWidth &&
              ball.y > b.y &&
              ball.y < b.y + brickHeight
            ) {
              ball.dy = -ball.dy;
              b.status = 0;
              currentScore += 10;
              setScore(currentScore);
            }
          }
        }
      }
    };

    const draw = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawBricks();
      drawBall();
      drawPaddle();
      collisionDetection();

      // Ball collision with walls
      if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
      }
      if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
      } else if (ball.y + ball.dy > canvas.height - ball.radius) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
          ball.dy = -ball.dy;
        } else {
          currentLives--;
          setLives(currentLives);
          if (currentLives === 0) {
            setGameOver(true);
            setGameStarted(false);
            return;
          }
          ball.x = 200;
          ball.y = 350;
          ball.dx = 4;
          ball.dy = -4;
        }
      }

      // Move ball
      ball.x += ball.dx;
      ball.y += ball.dy;

      // Move paddle
      paddle.x += paddle.dx;
      if (paddle.x < 0) paddle.x = 0;
      if (paddle.x + paddle.width > canvas.width) paddle.x = canvas.width - paddle.width;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') paddle.dx = -7;
      if (e.key === 'ArrowRight') paddle.dx = 7;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') paddle.dx = 0;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const gameLoop = setInterval(draw, 1000 / 60);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStarted]);

  return (
    <div className="relative">
      <canvas
        ref={canvasRef}
        width={400}
        height={400}
        className="border-2 border-purple-500 rounded-lg bg-black"
      />
      {!gameStarted && !gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 rounded-lg">
          <button
            onClick={() => { setGameStarted(true); setScore(0); setLives(3); setGameOver(false); }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <Play className="w-5 h-5" /> Start Game
          </button>
        </div>
      )}
      {gameOver && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 rounded-lg">
          <p className="text-red-500 text-2xl font-bold mb-2">Game Over!</p>
          <p className="text-white text-xl mb-4">Score: {score}</p>
          <button
            onClick={() => { setGameStarted(true); setScore(0); setLives(3); setGameOver(false); }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg font-bold hover:bg-purple-700 transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
      <div className="text-center mt-2 text-purple-400 font-mono">
        Score: {score} | Lives: {lives} | Arrow Keys
      </div>
    </div>
  );
};

export default function InternetCafePage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-black">
      {/* Background */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-amber-950 via-black to-black"></div>

      {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-10 min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/grid-pattern.png')] opacity-5"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-amber-500/50"
          >
            <Coffee className="w-10 h-10 text-white" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 bg-clip-text text-transparent"
          >
            Internet Café Culture
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl text-gray-300 mb-6"
          >
            The ₱15/Hour Gateway to Digital Worlds
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="inline-block px-6 py-3 bg-amber-900/30 backdrop-blur-sm border border-amber-500/50 rounded-full"
          >
            <p className="text-sm text-amber-300 font-semibold">
              2002-2010: The Digital Tambayan Era
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12"
          >
            <p className="text-gray-500 text-sm mb-3">Scroll to explore</p>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="inline-block"
            >
              <div className="w-5 h-8 border-2 border-amber-500/50 rounded-full flex items-start justify-center p-1">
                <div className="w-1 h-2 bg-amber-500 rounded-full"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Story Section 1 */}
      <section className="relative z-10 py-16 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span className="text-amber-400 font-semibold text-sm">Year 2002</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                The <span className="text-amber-400">Digital Tambayan</span> is Born
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Before smartphones, before home broadband—there were internet cafés. 
                  For just ₱15 per hour, Filipinos could access the entire digital world.
                </p>
                <p>
                  The smell of instant noodles mixed with the sound of keyboard clicks and competitive gaming rage. 
                  These weren't just places to use the internet—they were social hubs where friendships were forged, 
                  gaming skills were honed, and digital culture was born.
                </p>
                <div className="bg-amber-900/20 border-l-4 border-amber-500 rounded p-4 mt-4">
                  <p className="text-amber-300 font-semibold">
                    ₱15 per hour. ₱100 overnight. Air-conditioned digital paradise.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-900/30 to-orange-900/30 rounded-xl border border-amber-500/30 overflow-hidden">
                <img 
                  src="/DigitalPinoy/technology/icafe.jpg" 
                  alt="Classic internet café setup"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Rows of CRT monitors, ₱15 per hour, ₱100 overnight packages.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classic Setup Section */}
      <section className="relative z-10 py-16 bg-black/50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              The <span className="text-amber-400">Classic Setup</span>
            </h2>
            <p className="text-gray-400">Everything you needed for ₱15/hour</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Computer Setup Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl border border-amber-500/40 p-8 backdrop-blur-sm">
              <div className="w-full h-full bg-black/50 rounded-xl border border-amber-500/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/DigitalPinoy/images/icafe.png')] bg-contain bg-center bg-no-repeat opacity-90"></div>
                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <p className="text-white text-xs bg-black/70 backdrop-blur-sm rounded-lg py-2 px-3">
                    💻 Classic Internet Café Computer
                  </p>
                </div>
              </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full shadow-lg font-bold text-sm"
              >
                ₱15/Hour!
              </motion.div>
            </motion.div>

            {/* Setup Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-white mb-4">The Perfect Setup</h3>
              
              <div className="space-y-3">
                {[
                  { icon: '💻', title: 'CRT Monitor', desc: '17-inch, 1024x768 resolution' },
                  { icon: '⌨️', title: 'PS/2 Keyboard', desc: 'Click-clack mechanical feel' },
                  { icon: '🖱️', title: 'Ball Mouse', desc: 'Clean the ball every week' },
                  { icon: '🎧', title: 'Headphones', desc: 'For gaming and music' },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 bg-amber-900/20 border border-amber-500/20 rounded-lg p-3 hover:border-amber-500/40 transition-colors"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{feature.title}</h4>
                      <p className="text-xs text-gray-400">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Playable Retro Games Arcade */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black via-purple-950/10 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <Gamepad2 className="w-12 h-12 text-purple-400 mx-auto" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">
              The <span className="text-purple-400">Internet Café</span> Arcade
            </h2>
            <p className="text-gray-400 text-lg">Play the classic games that kept us coming back for ₱15/hour</p>
            <p className="text-amber-500 text-sm mt-2 font-mono">Click to play! Use arrow keys to control</p>
          </motion.div>

          {/* Playable Games Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Snake Game */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-900/40 to-emerald-900/40 rounded-2xl border border-green-500/30 p-6 hover:border-green-500/60 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Classic Snake</h3>
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  ARCADE
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                The timeless classic. Eat the food, grow longer, don't hit the walls or yourself!
              </p>
              <div className="flex justify-center">
                <SnakeGame />
              </div>
            </motion.div>

            {/* Pong Game */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded-2xl border border-blue-500/30 p-6 hover:border-blue-500/60 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Retro Pong</h3>
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  VS CPU
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                The game that started it all. Beat the computer in this classic paddle battle!
              </p>
              <div className="flex justify-center">
                <PongGame />
              </div>
            </motion.div>

            {/* Brick Breaker Game */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl border border-purple-500/30 p-6 hover:border-purple-500/60 transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">Brick Breaker</h3>
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  PUZZLE
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">
                Break all the bricks! Keep the ball in play and clear each level.
              </p>
              <div className="flex justify-center">
                <BrickBreakerGame />
              </div>
            </motion.div>
          </div>

          {/* Nostalgia Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-block bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl px-8 py-6 backdrop-blur-sm max-w-3xl">
              <p className="text-purple-300 italic mb-3 text-lg">
                "These simple games were just the warm-up before Ragnarok, DOTA, and Counter-Strike."
              </p>
              <p className="text-gray-400 text-sm">
                While we waited for friends to arrive at the café, we'd play quick arcade games.
                ₱15 could buy you hours of entertainment, whether you were grinding in MMORPGs
                or just playing Snake on the desktop.
              </p>
            </div>
          </motion.div>

          {/* The Big Games - Text Only Tribute */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center text-white mb-8">
              The <span className="text-amber-400">Legendary</span> Internet Café Games
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Ragnarok Online',
                  quote: 'Wanna party? Priest LF Orc Dungeon!',
                  desc: 'The MMORPG that became our second life. Prontera City, guild wars, and endless grinding.',
                  color: 'from-purple-500/20 to-pink-500/20 border-purple-500/30',
                  icon: '⚔️'
                },
                {
                  title: 'DOTA',
                  quote: 'Mid or feed! GG team noob!',
                  desc: 'The Warcraft 3 mod that birthed the MOBA genre. 5v5 battles that lasted for hours.',
                  color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
                  icon: '🛡️'
                },
                {
                  title: 'Counter-Strike 1.6',
                  quote: 'The bomb has been planted!',
                  desc: 'LAN tournaments, de_dust2, AWP sniper battles. Every headshot echoed through the café.',
                  color: 'from-orange-500/20 to-red-500/20 border-orange-500/30',
                  icon: '🎯'
                },
                {
                  title: 'StarCraft',
                  quote: 'My life for Aiur!',
                  desc: 'Strategic RTS brilliance. Zerg rush, Protoss carriers, Terran marines.',
                  color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30',
                  icon: '👾'
                },
                {
                  title: 'Gunbound',
                  quote: 'Perfect angle! Nice shot!',
                  desc: 'Physics-based artillery fun. Calculate wind, power, and angle for the perfect shot.',
                  color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
                  icon: '🎮'
                },
                {
                  title: 'Red Alert 2',
                  quote: 'Kirov reporting!',
                  desc: 'Base building, Tesla coils, mammoth tanks. The RTS that taught us strategy.',
                  color: 'from-red-500/20 to-yellow-500/20 border-red-500/30',
                  icon: '⚡'
                }
              ].map((game, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, borderColor: 'rgba(168, 85, 247, 0.6)' }}
                  className={`bg-gradient-to-br ${game.color} rounded-xl border p-6 backdrop-blur-sm transition-all`}
                >
                  <div className="text-4xl mb-3">{game.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-2">{game.title}</h4>
                  <div className="bg-black/50 rounded-lg p-3 mb-3 font-mono text-amber-400 text-center text-xs">
                    "{game.quote}"
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{game.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Social Experience */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-amber-950/20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-xl border border-blue-500/30 overflow-hidden relative">
                <img 
                  src="/DigitalPinoy/technology/tambayan.jpg" 
                  alt="Internet café social scene"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs">Where "tambayan" met technology - friendships forged over games.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-blue-400" />
                <span className="text-blue-400 font-semibold text-sm">Social Hub</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                More Than Just <span className="text-blue-400">Games</span>
              </h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>
                  Internet cafés were the original Filipino digital community centers. 
                  They were places where friendships were forged, rivalries were born, 
                  and memories were made.
                </p>
                <p>
                  From LAN parties to overnight gaming sessions, from sharing instant noodles 
                  to teaching each other gaming strategies—these spaces created bonds that 
                  lasted beyond the ₱15/hour sessions.
                </p>
                <div className="bg-blue-500/10 border-l-4 border-blue-500 rounded-lg p-4 mt-4">
                  <p className="text-blue-300 font-semibold italic">
                    "We didn't just play games. We built communities."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-2">
              By the <span className="text-amber-400">Numbers</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: '₱15', label: 'Hourly rate', icon: Coffee, color: 'amber' },
              { number: '₱100', label: 'Overnight package', icon: Clock, color: 'orange' },
              { number: '24/7', label: 'Operating hours', icon: Zap, color: 'yellow' },
              { number: '#1', label: 'Social hub', icon: Users, color: 'blue' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-amber-900/20 to-black border border-amber-500/30 rounded-xl p-6 text-center hover:border-amber-500/60 transition-all"
              >
                {(() => {
                  const IconComponent = stat.icon;
                  return <IconComponent className={`w-8 h-8 text-${stat.color}-400 mx-auto mb-3`} />;
                })()}
                <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Legacy */}
      <section className="relative z-10 py-16 bg-gradient-to-b from-black to-amber-950/30">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Gamepad2 className="w-12 h-12 text-amber-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">The Legacy Lives On</h2>
            <div className="space-y-3 text-gray-300 leading-relaxed">
              <p>
                Today, we have high-speed internet at home, powerful gaming PCs, and mobile gaming. 
                But none of them captured the magic of the internet café era.
              </p>
              <p>
                Internet cafés taught us that <span className="text-amber-400 font-semibold">community matters</span>. That the best gaming experiences 
                are shared. That ₱15 could buy you not just internet access, but friendship, 
                competition, and memories that would last a lifetime.
              </p>
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mt-6">
                <p className="text-lg text-amber-300 font-semibold italic">
                  "We didn't just play games. We built communities. We forged friendships. 
                  We created memories—₱15 at a time."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="relative z-10 py-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/timeline/technology">
              <motion.button
                whileHover={{ scale: 1.02, x: -3 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2 bg-amber-900/30 border border-amber-500/30 rounded-lg text-amber-300 text-sm hover:bg-amber-900/50 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Technology Hall
              </motion.button>
            </Link>

            <div className="flex gap-3">
              <Link href="/timeline/technology/sms-revolution">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-5 py-2 bg-green-900/30 border border-green-500/30 rounded-lg text-green-300 text-sm hover:bg-green-900/50 transition-all"
                >
                  ← Previous: SMS Revolution
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
