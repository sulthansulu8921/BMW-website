import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroImg from '../assets/hero.png';

const Experience360 = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const rotateY = useTransform(scrollYProgress, [0, 1], [-15, 15]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

    return (
        <section ref={containerRef} className="py-32 px-6 bg-bmw-black overflow-hidden">
            <div className="container mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mb-20"
                >
                    <h2 className="text-bmw-gold uppercase tracking-[0.4em] text-xs mb-6">360° Perspective</h2>
                    <h3 className="text-4xl md:text-6xl font-thin tracking-tight">Elegance From Every Angle</h3>
                </motion.div>

                <div className="relative max-w-5xl mx-auto perspective-1000">
                    <motion.div
                        style={{ rotateY, scale }}
                        className="relative transition-all duration-300 ease-out"
                    >
                        <div className="absolute inset-0 bg-bmw-gold/5 blur-[120px] rounded-full z-0" />
                        <img
                            src={heroImg}
                            alt="BMW 360 View"
                            className="relative z-10 w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
                        />

                        {/* Ground shadow/reflection */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-20 bg-black/40 blur-3xl rounded-[100%] z-0" />
                    </motion.div>
                </div>

                <div className="mt-20 flex justify-center gap-12 text-[10px] tracking-[0.4em] uppercase text-bmw-silver/30 font-light underline-offset-8">
                    <span className="text-bmw-gold cursor-pointer underline">Front</span>
                    <span className="hover:text-bmw-gold cursor-pointer transition-colors">Profile</span>
                    <span className="hover:text-bmw-gold cursor-pointer transition-colors">Rear</span>
                    <span className="hover:text-bmw-gold cursor-pointer transition-colors">Wheels</span>
                </div>
            </div>
        </section>
    );
};

export default Experience360;
