import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { carsData } from '../data/cars';
import { ArrowRight, Zap, Gauge, DollarSign } from 'lucide-react';

const ModelsSlider = () => {
    const containerRef = useRef(null);

    return (
        <section id="models" className="py-32 bg-bmw-black overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black pointer-events-none z-0" />

            <div className="container mx-auto px-6 lg:px-20 relative z-10 mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-bmw-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">The BMW Stable</h2>
                    <h3 className="text-4xl md:text-6xl font-thin tracking-tighter text-white uppercase flex items-center justify-between">
                        Explore Models
                        <div className="flex gap-4">
                            <span className="text-sm font-light tracking-widest text-bmw-silver/40 hidden md:block">Scroll to explore</span>
                        </div>
                    </h3>
                </motion.div>
            </div>

            <div
                ref={containerRef}
                className="flex gap-8 overflow-x-auto snap-x snap-mandatory px-6 lg:px-20 pb-20 no-scrollbar relative z-10 w-full"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {carsData.map((car, i) => (
                    <motion.div
                        key={car.id}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ delay: i * 0.1, duration: 0.8 }}
                        className="snap-center shrink-0 w-[85vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] group"
                    >
                        <Link to={`/models/${car.id}`} className="block relative w-full h-[600px] rounded-3xl overflow-hidden glass border border-white/5 hover:border-bmw-gold/30 transition-all duration-700 bg-white/[0.02]">

                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-bmw-gold/0 group-hover:bg-bmw-gold/10 transition-colors duration-700 mix-blend-overlay z-0" />
                            <div
                                className="absolute -bottom-20 -right-20 w-64 h-64 blur-[100px] rounded-full transition-colors duration-700 z-0"
                                style={{ backgroundColor: car.colors[0] }}
                            />

                            {/* Top Content */}
                            <div className="absolute top-0 left-0 w-full p-8 z-20 flex justify-between items-start">
                                <div>
                                    <h4 className="text-2xl font-bold uppercase tracking-tight text-white mb-2 group-hover:-translate-y-1 transition-transform">{car.name}</h4>
                                    <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-bmw-gold">{car.type}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-bmw-silver/40 mb-1">Starting from</p>
                                    <p className="text-sm tracking-widest text-white">{car.price}</p>
                                </div>
                            </div>

                            {/* Car Image */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] flex justify-center z-10 pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
                                <img
                                    src={car.heroImg}
                                    alt={car.name}
                                    className="w-full h-auto object-contain drop-shadow-2xl brightness-90 group-hover:brightness-110 transition-all duration-700"
                                />
                            </div>

                            {/* Bottom Content / Specs */}
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-bmw-black/90 to-transparent">
                                <div className="grid grid-cols-2 gap-6 mb-8 translate-y-4 opacity-70 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="flex items-center gap-3">
                                        <Zap className="w-4 h-4 text-bmw-gold" />
                                        <div>
                                            <p className="text-[8px] tracking-[0.2em] text-bmw-silver/40 uppercase mb-1">Horsepower</p>
                                            <p className="text-xs font-bold text-white tracking-widest">{car.specs.hp}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <Gauge className="w-4 h-4 text-bmw-gold" />
                                        <div>
                                            <p className="text-[8px] tracking-[0.2em] text-bmw-silver/40 uppercase mb-1">0-100 km/h</p>
                                            <p className="text-xs font-bold text-white tracking-widest">{car.specs.zeroToHundred}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between border-t border-white/10 pt-6 group-hover:border-bmw-gold/30 transition-colors">
                                    <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-bmw-warm-white group-hover:text-bmw-gold transition-colors">Discover Masterpiece</span>
                                    <ArrowRight className="w-4 h-4 text-bmw-gold transform group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>

                        </Link>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ModelsSlider;
