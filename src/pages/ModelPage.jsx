import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { carsData } from '../data/cars';
import Navbar from '../components/Navbar';
import FooterDashboard from '../components/FooterDashboard';
import { Zap, Gauge, Flame, Battery, Download, Calendar, Check } from 'lucide-react';

const ModelPage = () => {
    const { id } = useParams();
    const car = carsData.find(c => c.id === id);

    const colorOptions = car?.colors.map((hex, i) => {
        const names = {
            "#050505": "Carbon Black",
            "#FFFFFF": "Alpine White",
            "#1c2e4a": "Phytonic Blue",
            "#8c8c8c": "Skyscraper Grey",
            "#db161b": "Toronto Red",
            "#0A84FF": "Portimao Blue",
            "#293226": "Manhattan Green",
            "#D9D9D9": "Space Silver"
        };
        const filters = [
            car.imgFilter || 'none',
            `${car.imgFilter || ''} hue-rotate(90deg) saturate(1.5)`.trim(),
            `${car.imgFilter || ''} hue-rotate(-90deg) saturate(1.2)`.trim(),
            `${car.imgFilter || ''} invert(0.1) sepia(1) hue-rotate(180deg) saturate(0.5)`.trim(),
        ];
        return {
            name: names[hex] || `Color ${i + 1}`,
            hex: hex,
            filter: filters[i % filters.length]
        };
    }) || [];

    const [selectedColor, setSelectedColor] = useState(colorOptions[0] || null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (car) setSelectedColor(colorOptions[0]);
    }, [id, car]);

    if (!car) return <Navigate to="/" />;

    return (
        <div className="min-h-screen bg-bmw-black flex flex-col overflow-x-hidden">
            <Navbar />

            {/* Hero */}
            <section className="relative w-full h-screen flex flex-col items-center justify-start pt-40 px-6">
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-bmw-black via-bmw-black to-black" />
                <motion.div
                    animate={{ backgroundColor: selectedColor.hex }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] blur-[160px] opacity-20 rounded-full z-0 pointer-events-none"
                />
                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-bmw-gold uppercase tracking-[0.5em] text-[10px] font-bold mb-6">
                        {car.type}
                    </motion.p>
                    <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}
                        className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-4">
                        {car.name}
                    </motion.h1>
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                        className="text-bmw-silver/60 text-sm md:text-lg tracking-widest max-w-2xl font-light italic mb-3">
                        "{car.tagline}"
                    </motion.p>
                </div>

                {/* Car image with live CSS filter */}
                <div className="absolute bottom-10 w-full flex justify-center z-20 pointer-events-none">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={selectedColor.name}
                            initial={{ opacity: 0.6, scale: 1.03 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0.6, scale: 0.98 }}
                            transition={{ duration: 0.4 }}
                            src={car.heroImg}
                            alt={`${car.name} - ${selectedColor.name}`}
                            className="w-[90%] max-w-6xl object-contain drop-shadow-[0_40px_50px_rgba(0,0,0,0.9)]"
                            style={{ filter: selectedColor.filter, transition: 'filter 0.6s ease' }}
                        />
                    </AnimatePresence>
                </div>
            </section>

            {/* Performance Specs */}
            <section className="py-32 bg-black border-t border-white/5 relative z-30">
                <div className="container mx-auto px-6 lg:px-20 text-center">
                    <h2 className="text-bmw-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-16">Uncompromising Performance</h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        {[
                            { icon: Flame, label: 'Engine', value: car.specs.engine },
                            { icon: Zap, label: 'Horsepower', value: car.specs.hp },
                            { icon: Gauge, label: '0-100 km/h', value: car.specs.zeroToHundred },
                            { icon: Battery, label: 'Efficiency', value: car.specs.range },
                        ].map(({ icon: Icon, label, value }) => (
                            <div key={label} className="glass p-8 rounded-2xl border border-white/5 group hover:border-bmw-gold/30 transition-all shadow-2xl">
                                <Icon className="w-5 h-5 text-bmw-gold mb-6 mx-auto group-hover:scale-110 transition-transform" />
                                <p className="text-[8px] uppercase tracking-[0.3em] text-bmw-silver/40 mb-2 font-bold">{label}</p>
                                <p className="text-sm md:text-xl font-bold text-white tracking-widest">{value}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Color Configurator */}
            <section className="py-32 bg-bmw-black border-t border-white/5 relative z-30">
                <div className="container mx-auto px-6 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <h2 className="text-bmw-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Aesthetics</h2>
                            <h3 className="text-4xl md:text-5xl font-thin tracking-tighter text-white uppercase mb-8">Personalize Your {car.name}</h3>
                            <p className="text-bmw-silver/60 text-sm font-light leading-relaxed mb-12 max-w-md">
                                Choose from our curated selection of premium metallic and matte finishes.
                            </p>
                            <div className="space-y-6">
                                <p className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-bold">Select Exterior Color</p>
                                <div className="flex gap-5 flex-wrap">
                                    {colorOptions.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setSelectedColor(option)}
                                            title={option.name}
                                            className={`relative w-14 h-14 rounded-full transition-all duration-300 shadow-2xl flex items-center justify-center
                                                ${selectedColor.name === option.name
                                                    ? 'ring-2 ring-amber-400 ring-offset-4 ring-offset-bmw-black scale-110'
                                                    : 'hover:scale-105 ring-1 ring-white/20 hover:ring-white/40'
                                                }`}
                                            style={{ backgroundColor: option.hex }}
                                        >
                                            {selectedColor.name === option.name && (
                                                <Check className="w-4 h-4 drop-shadow-md"
                                                    style={{ color: ['#050505', '#1c2e4a', '#003680', '#1a2a5a', '#2c2c2c'].includes(option.hex) ? '#fff' : '#000' }}
                                                />
                                            )}
                                        </button>
                                    ))}
                                </div>
                                <motion.div
                                    animate={{ backgroundColor: selectedColor.hex }}
                                    transition={{ duration: 0.6 }}
                                    className="h-px w-full mt-4 opacity-50"
                                />
                            </div>
                        </div>

                        <div className="glass p-12 lg:p-16 rounded-3xl border border-white/5 relative overflow-hidden shadow-2xl">
                            <motion.div animate={{ backgroundColor: selectedColor.hex }} transition={{ duration: 0.8 }}
                                className="absolute inset-0 opacity-10 blur-[80px] z-0" />
                            <div className="relative z-10 flex flex-col justify-center h-full">
                                <p className="text-[9px] uppercase tracking-[0.4em] text-bmw-gold font-bold mb-4">Starting Price</p>
                                <p className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-16">{car.price}</p>
                                <div className="space-y-4">
                                    <button className="w-full flex items-center justify-center gap-4 py-5 bg-bmw-gold text-black rounded-lg uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white transition-colors active:scale-95 shadow-xl">
                                        <Calendar className="w-4 h-4" /> Book a Test Drive
                                    </button>
                                    <button className="w-full flex items-center justify-center gap-4 py-5 border border-white/10 text-bmw-silver rounded-lg uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-white/5 hover:border-white/30 hover:text-white transition-all active:scale-95">
                                        <Download className="w-4 h-4" /> Download Brochure
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <FooterDashboard />
        </div>
    );
};

export default ModelPage;
