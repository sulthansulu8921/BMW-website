import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

const frameCount = 240;
const currentFrame = (index) =>
    `/herosection/ezgif-frame-${index.toString().padStart(3, '0')}.png`;

const HeroSlider = () => {
    const canvasRef = useRef(null);
    const images = useRef([]);
    const [loaded, setLoaded] = useState(false);
    const currentFrameRef = useRef(0);

    // Raw mouse X (0 to 1 across viewport width)
    const mouseX = useMotionValue(0.5);
    // Smooth spring-damped version
    const smoothX = useSpring(mouseX, { stiffness: 60, damping: 18 });
    // Map to frame index
    const frameIndex = useTransform(smoothX, [0, 1], [0, frameCount - 1]);

    // Preload all frames
    useEffect(() => {
        let loadedCount = 0;
        const total = frameCount;

        for (let i = 1; i <= total; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === 1) {
                    // Draw first frame immediately
                    drawFrame(0);
                }
                if (loadedCount === total) setLoaded(true);
            };
            images.current.push(img);
        }
    }, []);

    const drawFrame = useCallback((idx) => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const img = images.current[Math.floor(idx)];
        if (!img || !img.complete || !img.naturalWidth) return;
        const ctx = canvas.getContext('2d');
        if (canvas.width !== img.naturalWidth) {
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        currentFrameRef.current = idx;
    }, []);

    // Connect spring-smoothed frameIndex to canvas draw
    useEffect(() => {
        const unsub = frameIndex.on('change', (latest) => {
            drawFrame(Math.max(0, Math.min(frameCount - 1, Math.round(latest))));
        });
        return unsub;
    }, [frameIndex, drawFrame]);

    // Track mouse/touch position
    const handleMouseMove = useCallback((e) => {
        const x = e.clientX / window.innerWidth;
        mouseX.set(x);
    }, [mouseX]);

    const handleTouchMove = useCallback((e) => {
        const x = e.touches[0].clientX / window.innerWidth;
        mouseX.set(x);
    }, [mouseX]);

    // Gentle auto-drift when idle
    useEffect(() => {
        let timeout;
        let autoAnim;

        const resetAuto = () => {
            clearTimeout(timeout);
            if (autoAnim) autoAnim.stop();
            timeout = setTimeout(() => {
                // Slowly drift back to center
                autoAnim = animate(mouseX, 0.5, { duration: 3, ease: 'easeInOut' });
            }, 3000);
        };

        window.addEventListener('mousemove', resetAuto, { passive: true });
        window.addEventListener('touchmove', resetAuto, { passive: true });

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('mousemove', resetAuto);
            window.removeEventListener('touchmove', resetAuto);
        };
    }, [mouseX]);

    return (
        <section
            className="relative w-full h-screen overflow-hidden bg-black md:cursor-none"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
        >
            {/* Sequence Canvas */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Cinematic vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60 pointer-events-none z-10" />

            {/* Hero text */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between pointer-events-none px-5 sm:px-8 md:px-20 py-20 md:py-24">
                {/* Top badge */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    className="text-center"
                >
                    <span className="text-amber-400 tracking-[0.4em] uppercase text-[9px] md:text-[10px] font-bold">
                        <span className="hidden md:inline">Interactive • Move cursor to rotate</span>
                        <span className="md:hidden">Touch &amp; drag to rotate</span>
                    </span>
                </motion.div>

                {/* Center title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    className="text-center relative"
                >
                    {/* Dark glow behind text for contrast */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] md:w-[120%] h-[150%] bg-black/50 blur-[60px] md:blur-[100px] -z-10 rounded-[100%] pointer-events-none" />

                    <h1 className="text-4xl sm:text-5xl md:text-8xl lg:text-[7rem] font-black tracking-tighter uppercase text-white drop-shadow-[0_4px_50px_rgba(0,0,0,1)] leading-none">
                        THE BMW<br />
                        <span className="text-amber-400">5 SERIES</span>
                    </h1>
                    <p className="text-white/60 text-[10px] sm:text-sm md:text-base tracking-[0.3em] uppercase font-light mt-3 md:mt-4">
                        Luxury Executive Sedan
                    </p>
                </motion.div>

                {/* Bottom spec strip – 3-col grid on all sizes */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.0, duration: 1 }}
                    className="grid grid-cols-3 items-end gap-2"
                >
                    <div>
                        <p className="text-amber-400 text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold mb-1">Horsepower</p>
                        <p className="text-white text-2xl md:text-5xl font-thin">258 <span className="text-xs text-white/50">hp</span></p>
                    </div>
                    <div className="text-center">
                        <p className="text-amber-400 text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold mb-1">0–100 km/h</p>
                        <p className="text-white text-2xl md:text-5xl font-thin">6.5 <span className="text-xs text-white/50">s</span></p>
                    </div>
                    <div className="text-right">
                        <p className="text-amber-400 text-[8px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold mb-1">Top Speed</p>
                        <p className="text-white text-2xl md:text-5xl font-thin">250 <span className="text-xs text-white/50">km/h</span></p>
                    </div>
                </motion.div>
            </div>

            {/* Custom cursor glow – desktop only */}
            <motion.div
                className="hidden md:block absolute w-16 h-16 rounded-full border border-amber-400/40 bg-amber-400/10 pointer-events-none z-30 -translate-x-1/2 -translate-y-1/2"
                style={{
                    left: useTransform(mouseX, [0, 1], ['0%', '100%']),
                    top: '50%',
                }}
            />
        </section>
    );
};

export default HeroSlider;
