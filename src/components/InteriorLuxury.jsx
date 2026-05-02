import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import interiorImg from '../assets/interior.png';

const InteriorLuxury = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] bg-black overflow-hidden flex flex-col items-center">
            {/* Sticky Background */}
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div
                    style={{ scale }}
                    className="relative w-full h-full"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src={interiorImg}
                        alt="BMW Interior"
                        className="w-full h-full object-cover grayscale-[0.2]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-10" />
                </motion.div>

                {/* Floating Content */}
                <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                    <motion.div
                        style={{ y }}
                        className="text-center px-6"
                    >
                        <h2 className="text-bmw-gold tracking-[0.5em] uppercase text-sm mb-6">Interior Sanctuary</h2>
                        <h3 className="text-5xl md:text-8xl font-thin tracking-tighter mb-8">Crafted Around You</h3>
                        <p className="text-bmw-silver/60 text-lg md:text-xl font-light max-w-2xl mx-auto italic">
                            "The silence is the ultimate luxury. Surround yourself with
                            meticulously crafted leather, ambient lighting, and space."
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Interior Details Grid */}
            <div className="relative z-30 container mx-auto px-6 py-32 bg-black w-full">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { tag: 'Mastery', title: 'Veganza Upholstery', desc: 'Sustainable luxury that feels identical to fine leather.' },
                        { tag: 'Atmosphere', title: 'Sky Lounge', desc: 'Panoramic glass roof with integrated LED light shows.' },
                        { tag: 'Comfort', title: 'Executive Rear', desc: 'First-class seating with reclining lounge functions.' }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="glass-card p-10 rounded-sm"
                        >
                            <div className="text-bmw-gold/60 text-[10px] tracking-[0.3em] uppercase mb-10">{item.tag}</div>
                            <h4 className="text-xl font-light mb-4">{item.title}</h4>
                            <p className="text-bmw-silver/40 text-sm font-light leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InteriorLuxury;
