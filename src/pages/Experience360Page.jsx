import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Navbar from '../components/Navbar';
import FooterDashboard from '../components/FooterDashboard';

const frameCount = 240;
const currentFrame = (index) => `/herosection/ezgif-frame-${index.toString().padStart(3, '0')}.png`;

const Experience360Page = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);

    // Preload all high-res sequence images
    useEffect(() => {
        const loadedImages = [];
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll perfectly across 240 frames
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

    // Fire canvas draw rapidly
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (!canvasRef.current || images.length === 0) return;

        const context = canvasRef.current.getContext("2d");
        const idx = Math.min(frameCount - 1, Math.max(0, Math.floor(latest) - 1));
        const img = images[idx];

        if (img && img.complete) {
            if (canvasRef.current.width !== img.width) {
                canvasRef.current.width = img.width;
                canvasRef.current.height = img.height;
            }
            context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            context.drawImage(img, 0, 0, img.width, img.height);
        }
    });

    // Setup initial render loop
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");

        const renderInitial = () => {
            if (images.length > 0 && images[0].complete) {
                canvas.width = images[0].width;
                canvas.height = images[0].height;
                context.drawImage(images[0], 0, 0, images[0].width, images[0].height);
            }
        };

        renderInitial();
        if (images.length > 0) {
            images[0].onload = renderInitial;
        }
    }, [images]);


    /* 
      --- APPLE-STYLE CINEMATIC SCROLL TRIGGER POINTS ---
    */

    // Section 1: Intro (0% to 30%)
    const opacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.25], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.15], [50, 0]);

    // Section 2: Aesthetics (25% to 55%)
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
    const x2 = useTransform(scrollYProgress, [0.25, 0.4], [50, 0]);

    // Section 3: Engineering (55% to 85%)
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75, 0.85], [0, 1, 1, 0]);
    const x3 = useTransform(scrollYProgress, [0.55, 0.7], [-50, 0]);

    // Section 4: Finale (80% to 100%)
    const opacity4 = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);
    const scale4 = useTransform(scrollYProgress, [0.85, 1], [0.9, 1]);

    return (
        <div className="bg-bmw-black">
            <Navbar />

            {/* Massive scroll container forcing scrolling logic */}
            <div ref={containerRef} className="h-[600vh] relative w-full bg-bmw-black">

                {/* Sticky Viewport locks into view */}
                <div className="sticky top-0 h-screen w-full overflow-hidden bg-bmw-black flex items-center justify-center">

                    {/* Primary Canvas Drawing Sequence */}
                    <canvas
                        ref={canvasRef}
                        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none mix-blend-screen scale-100 md:scale-110"
                    />

                    {/* Lower vignette for contrast */}
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-bmw-black to-transparent pointer-events-none z-10 opacity-80" />
                    <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-bmw-black to-transparent pointer-events-none z-10 opacity-80" />

                    {/* Page Header */}
                    <div className="absolute top-16 left-0 w-full text-center z-20 pointer-events-none">
                        <h1 className="text-bmw-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-2">Interactive 360 Experience</h1>
                        <h2 className="text-3xl md:text-5xl font-thin tracking-tighter text-white uppercase opacity-80">BMW 5 Series LWB</h2>
                    </div>

                    {/* Text Features Sequence */}

                    {/* Scene 1 */}
                    <motion.div
                        style={{ opacity: opacity1, y: y1 }}
                        className="absolute z-20 text-center top-1/4 lg:top-1/3 max-w-4xl px-6 pointer-events-none"
                    >
                        <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter text-white mb-4 drop-shadow-2xl">Absolute Presence</h2>
                        <p className="text-bmw-gold tracking-[0.4em] uppercase text-xs font-bold drop-shadow-md">Scroll to explore every curve</p>
                    </motion.div>

                    {/* Scene 2 */}
                    <motion.div
                        style={{ opacity: opacity2, x: x2 }}
                        className="absolute z-20 text-left bottom-1/4 left-10 md:left-24 max-w-lg pointer-events-none"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-4 drop-shadow-2xl">Aerodynamic Supremacy</h2>
                        <p className="text-bmw-silver/80 text-sm md:text-base font-light tracking-wide leading-relaxed drop-shadow-lg">
                            The aggressive kidney grille and sleek side profile cut through the air with minimal drag, maximizing both efficiency and high-speed stability.
                        </p>
                        <div className="w-12 h-1 bg-bmw-gold mt-6" />
                    </motion.div>

                    {/* Scene 3 */}
                    <motion.div
                        style={{ opacity: opacity3, x: x3 }}
                        className="absolute z-20 text-right top-1/3 right-10 md:right-24 max-w-lg pointer-events-none"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tighter text-white mb-4 drop-shadow-2xl">Precision Stance</h2>
                        <p className="text-bmw-silver/80 text-sm md:text-base font-light tracking-wide leading-relaxed drop-shadow-lg">
                            Lightweight M-alloy wheels housed gracefully in sculpted wheel arches command immediate respect on every road surface.
                        </p>
                        <div className="w-12 h-1 bg-bmw-gold mt-6 ml-auto" />
                    </motion.div>

                    {/* Scene 4 */}
                    <motion.div
                        style={{ opacity: opacity4, scale: scale4 }}
                        className="absolute z-20 text-center bottom-20 md:bottom-32 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 pointer-events-none"
                    >
                        <h2 className="text-5xl md:text-8xl font-thin tracking-tighter text-white uppercase drop-shadow-[0_0_50px_rgba(255,255,255,0.3)]">The Icon</h2>
                        <p className="text-bmw-gold tracking-[0.6em] uppercase text-xs md:text-sm mt-4 font-bold drop-shadow-lg">Unmistakably BMW</p>
                    </motion.div>

                </div>
            </div>

            <FooterDashboard />
        </div>
    );
};

export default Experience360Page;
