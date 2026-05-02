import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Performance = () => {
    const containerRef = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const speedX = useTransform(scrollYProgress, [0, 1], [-100, 100]);
    const blur = useTransform(scrollYProgress, [0, 0.5, 1], [10, 0, 10]);

    return (
        <section ref={containerRef} className="relative min-h-screen bg-[#0a0a0a] flex items-center overflow-hidden py-32 px-6">
            <div className="container mx-auto relative z-10">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-bmw-gold uppercase tracking-[0.4em] text-xs mb-6"
                    >
                        Engineering Excellence
                    </motion.h2>
                    <h3 className="text-5xl md:text-8xl font-thin tracking-tighter max-w-4xl">Pure Driving<br />Pleasure.</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-end">
                    <div className="space-y-20">
                        {[
                            { label: 'Acceleration', value: '4.8s', sub: '0-100 km/h in Sport Mode' },
                            { label: 'Output', value: '601 hp', sub: 'Combined system power output' },
                            { label: 'Torque', value: '820 Nm', sub: 'Peak electric torque response' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="group cursor-default"
                            >
                                <div className="flex items-baseline gap-6 mb-2">
                                    <span className="text-5xl md:text-7xl font-thin group-hover:text-bmw-gold transition-colors duration-500">{stat.value}</span>
                                    <span className="text-bmw-gold/60 uppercase tracking-widest text-[10px]">{stat.label}</span>
                                </div>
                                <p className="text-bmw-silver/30 text-sm font-light tracking-wide">{stat.sub}</p>
                                <div className="h-[1px] w-full bg-white/10 mt-8 relative overflow-hidden">
                                    <motion.div
                                        initial={{ x: '-100%' }}
                                        whileInView={{ x: '0%' }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.2, duration: 1.5, ease: "circOut" }}
                                        className="absolute inset-0 bg-bmw-gold/30"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="relative">
                        <motion.div
                            style={{ x: speedX, filter: `blur(${blur}px)` }}
                            className="relative aspect-[3/2] w-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-light-sweep" />
                            <img
                                src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&q=80&w=2030"
                                alt="BMW Motion"
                                className="w-full h-full object-cover grayscale opacity-50"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
                        >
                            <div className="text-[120px] font-black text-white/5 tracking-tighter -rotate-12 italic">M SPORT</div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Speed lines background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-[1px] bg-white/20"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: 0,
                            width: `${Math.random() * 200}px`,
                            opacity: Math.random() * 0.5
                        }}
                        animate={{ x: ['-100%', '800%'] }}
                        transition={{
                            duration: 1.5 + Math.random(),
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>
        </section>
    );
};

export default Performance;
