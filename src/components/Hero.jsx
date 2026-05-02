import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, Car, Cpu, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const canvasRef = useRef(null);
    const containerRef = useRef(null);
    const [images, setImages] = useState([]);
    const frameCount = 240;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const preloadedImages = [];
        let loadedCount = 0;

        const currentFrame = (index) => (
            `/herosection/ezgif-frame-${(index + 1).toString().padStart(3, '0')}.png`
        );

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) renderFrame(0);
            };
            preloadedImages.push(img);
        }
        setImages(preloadedImages);

        const renderFrame = (index) => {
            const img = preloadedImages[index];
            if (!img) return;
            const ratio = Math.max(canvas.width / img.width, canvas.height / img.height);
            const newWidth = img.width * ratio;
            const newHeight = img.height * ratio;
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.drawImage(img, (canvas.width - newWidth) / 2, (canvas.height - newHeight) / 2, newWidth, newHeight);
        };

        ScrollTrigger.create({
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            onUpdate: (self) => {
                renderFrame(Math.min(frameCount - 1, Math.floor(self.progress * frameCount)));
            }
        });

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            renderFrame(0);
        };
        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const features = [
        { icon: <Car className="w-5 h-5" />, label: "Longer Wheelbase", sub: "More Comfort" },
        { icon: <Cpu className="w-5 h-5" />, label: "Intelligent", sub: "Technology" },
        { icon: <Sparkles className="w-5 h-5" />, label: "Luxury", sub: "Redefined" }
    ];

    return (
        <section ref={containerRef} className="relative h-[120vh] bg-[#050a12]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full object-cover opacity-60" />

                {/* Dashboard Overlay */}
                <div className="absolute inset-0 z-20 flex flex-col justify-start pt-20 lg:pt-28 px-6 lg:px-16 pointer-events-none">
                    <div className="flex flex-col lg:flex-row items-start justify-between w-full">

                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="max-w-xl text-left pointer-events-auto"
                        >
                            <h2 className="text-bmw-gold tracking-[0.6em] uppercase text-[10px] mb-6 font-bold opacity-80">The New Dimension of Luxury</h2>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-10 text-white leading-[0.95] uppercase">
                                THE BMW<br />5 SERIES LWB
                            </h1>
                            <p className="text-bmw-silver/40 text-sm font-medium max-w-sm mb-16 leading-relaxed">
                                A perfect blend of dynamic performance, intelligent technology, and unparalleled comfort.
                            </p>

                            <div className="flex flex-wrap gap-12">
                                {features.map((f, i) => (
                                    <div key={i} className="flex flex-col gap-4">
                                        <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-bmw-gold/60">
                                            {f.icon}
                                        </div>
                                        <div>
                                            <p className="text-[9px] text-white/80 font-bold tracking-widest uppercase">{f.label}</p>
                                            <p className="text-[8px] text-bmw-silver/30 tracking-widest uppercase mt-1">{f.sub}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Content - Thumbnails & Video */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="hidden lg:flex flex-col items-end gap-16 pointer-events-auto"
                        >
                            {/* Thumbnails */}
                            <div className="flex flex-col gap-6">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-20 h-14 rounded-sm border border-white/10 overflow-hidden grayscale opacity-40 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer group">
                                        <img src={`/herosection/ezgif-frame-0${i}5.png`} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                ))}
                            </div>

                            {/* Watch Video */}
                            <button className="flex items-center gap-6 glass p-2 pr-8 rounded-full group">
                                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-bmw-gold group-hover:text-black transition-all">
                                    <Play className="fill-current w-4 h-4 ml-1" />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] text-white font-bold tracking-widest uppercase">Watch Full Review</p>
                                    <p className="text-[8px] text-bmw-silver/40 tracking-widest uppercase">02:45 MIN</p>
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Vertical Step Indicator (Left) */}
                <div className="absolute left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4 text-white/20">
                    <div className="w-[1px] h-20 bg-white/10 relative">
                        <motion.div
                            style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
                            className="bg-bmw-gold w-full absolute top-0"
                        />
                    </div>
                    <span className="text-[10px] rotate-180 [writing-mode:vertical-lr] tracking-[0.3em]">01 / 04</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
