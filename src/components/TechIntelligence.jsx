import React from 'react';
import { motion } from 'framer-motion';
import techImg from '../assets/tech_hd.png';

const TechIntelligence = () => {
    return (
        <section className="bg-bmw-black py-32 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="text-bmw-gold uppercase tracking-[0.6em] text-xs mb-8"
                    >
                        Digital Architecture
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-7xl font-thin tracking-tight"
                    >
                        Interactive. Intelligent. Instinctive.
                    </motion.h3>
                </div>

                <div className="relative aspect-video max-w-6xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="relative w-full h-full rounded-2xl overflow-hidden border border-white/5"
                    >
                        <img
                            src={techImg}
                            alt="BMW Curved Display"
                            className="w-full h-full object-cover brightness-[1.1] contrast-[1.1] saturate-[1.15]"
                        />

                        {/* Pulsating UI points */}
                        {[
                            { top: '40%', left: '30%', label: 'Intelligent Personal Assistant' },
                            { top: '50%', left: '60%', label: 'BMW Curved Display' },
                            { top: '30%', left: '80%', label: 'Augmented View' }
                        ].map((point, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1 + i * 0.2 }}
                                style={{ top: point.top, left: point.left }}
                                className="absolute z-20"
                            >
                                <div className="relative group cursor-pointer">
                                    <div className="w-3 h-3 bg-white rounded-full animate-ping absolute inset-0" />
                                    <div className="w-3 h-3 bg-bmw-gold rounded-full relative" />
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 glass px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                        <span className="text-[10px] tracking-widest text-bmw-silver uppercase">{point.label}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: 'Gesture Control', icon: '🖐️', desc: 'Interact with your BMW using simple hand movements.' },
                        { title: 'Harman Kardon', icon: '🔊', desc: 'Immersive surround sound engineered for the cockpit.' },
                        { title: 'Digital Key', icon: '📱', desc: 'Your smartphone becomes your secure vehicle key.' },
                        { title: 'Drive Assist', icon: '👁️', desc: 'Level 2 autonomous features for effortless journeys.' }
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="glass p-8 rounded-sm hover:border-bmw-gold/30 transition-all duration-500 group"
                        >
                            <div className="text-3xl mb-6 group-hover:scale-110 transition-transform inline-block">{feature.icon}</div>
                            <h4 className="text-sm font-medium tracking-wider uppercase mb-4 text-bmw-silver">{feature.title}</h4>
                            <p className="text-bmw-silver/30 text-xs font-light leading-relaxed">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechIntelligence;
