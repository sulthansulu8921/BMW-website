import React from 'react';
import { motion } from 'framer-motion';

const DesignPhilosophy = () => {
    return (
        <section className="min-h-screen bg-bmw-black py-32 px-6 overflow-hidden">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        <div className="absolute -inset-4 bg-bmw-gold/5 blur-3xl rounded-full" />
                        <h2 className="text-bmw-gold uppercase tracking-[0.4em] text-xs mb-6">Design Philosophy</h2>
                        <h3 className="text-4xl md:text-6xl font-thin mb-8 leading-tight">Commanding<br />Presence</h3>
                        <p className="text-bmw-silver/60 text-lg font-light leading-relaxed mb-10 max-w-lg">
                            Every line tells a story of performance and elegance. The long wheelbase silhouette
                            exudes an aura of authority, while the sculpted bodywork captures light and shadow
                            in a choreographed dance of aerodynamic excellence.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { title: 'Iconic Glow', desc: 'Illuminated kidney grille that makes a statement even in the dark.' },
                                { title: 'Adaptive LED', desc: 'Sleek headlight design with intelligent glare-free high beam.' },
                                { title: 'Dynamic Curves', desc: 'Precision-engineered sculpted lines for unmatched elegance.' }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                                    className="pl-6 border-l border-bmw-gold/30"
                                >
                                    <h4 className="text-bmw-silver font-medium mb-1 tracking-wider uppercase text-sm">{item.title}</h4>
                                    <p className="text-bmw-silver/40 text-sm font-light">{item.desc}</p>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-bmw-gold/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-700" />
                        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                            <img
                                src="https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=2070"
                                alt="BMW Detail"
                                className="w-full h-full object-cover transition-transform duration-[3s] group-hover:scale-110"
                            />
                        </div>
                        {/* Design detail overlay cards */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute -bottom-8 -left-8 glass p-8 max-w-[240px] hidden md:block"
                        >
                            <div className="text-bmw-gold text-2xl font-thin mb-2 tracking-tighter italic">0.23 Cd</div>
                            <div className="text-bmw-silver/40 text-[10px] tracking-widest uppercase">Drag Coefficient</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DesignPhilosophy;
