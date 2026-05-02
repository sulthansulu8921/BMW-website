import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { carsData } from '../data/cars';
import Navbar from '../components/Navbar';
import FooterDashboard from '../components/FooterDashboard';
import { ChevronDown, Scale } from 'lucide-react';

const ComparePage = () => {
    const [car1, setCar1] = useState(carsData[0]);
    const [car2, setCar2] = useState(carsData[1]);

    const renderStatBar = (label, val1, val2, maxVal) => {
        const p1 = (val1 / maxVal) * 100;
        const p2 = (val2 / maxVal) * 100;

        return (
            <div className="mb-10">
                <div className="flex justify-between text-[10px] tracking-widest uppercase mb-4 text-bmw-silver/60">
                    <span>{val1}</span>
                    <span className="font-bold text-white tracking-[0.3em]">{label}</span>
                    <span>{val2}</span>
                </div>
                <div className="flex gap-4 items-center">
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden flex justify-end relative">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p1}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute top-0 right-0 h-full bg-bmw-gold"
                            style={{ backgroundColor: car1.colors[0] === '#050505' ? '#D9D9D9' : car1.colors[0] }}
                        />
                    </div>
                    <Scale className="w-4 h-4 text-white/30 shrink-0" />
                    <div className="flex-1 h-3 bg-white/5 rounded-full overflow-hidden relative">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${p2}%` }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute top-0 left-0 h-full bg-blue-500"
                            style={{ backgroundColor: car2.colors[0] === '#050505' ? '#0A84FF' : car2.colors[0] }}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-bmw-black flex flex-col">
            <Navbar />

            <section className="flex-grow pt-40 pb-32">
                <div className="container mx-auto px-6 lg:px-20 text-center mb-20">
                    <h1 className="text-bmw-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Compare Models</h1>
                    <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-white uppercase">Head to Head</h2>
                </div>

                <div className="container mx-auto px-6 lg:px-20">
                    {/* Selectors */}
                    <div className="grid grid-cols-2 gap-8 lg:gap-20 mb-20">
                        {/* Car 1 Selector */}
                        <div className="relative">
                            <select
                                value={car1.id}
                                onChange={(e) => setCar1(carsData.find(c => c.id === e.target.value))}
                                className="w-full bg-white/5 border border-white/10 px-6 py-5 text-sm md:text-lg font-bold text-white tracking-widest uppercase outline-none focus:border-bmw-gold appearance-none cursor-pointer shadow-2xl"
                            >
                                {carsData.map(c => <option key={c.id} value={c.id} className="bg-bmw-black text-white">{c.name}</option>)}
                            </select>
                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-bmw-gold pointer-events-none" />
                        </div>

                        {/* Car 2 Selector */}
                        <div className="relative">
                            <select
                                value={car2.id}
                                onChange={(e) => setCar2(carsData.find(c => c.id === e.target.value))}
                                className="w-full bg-white/5 border border-white/10 px-6 py-5 text-sm md:text-lg font-bold text-white tracking-widest uppercase outline-none focus:border-bmw-gold appearance-none cursor-pointer shadow-2xl"
                            >
                                {carsData.map(c => <option key={c.id} value={c.id} className="bg-bmw-black text-white">{c.name}</option>)}
                            </select>
                            <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-bmw-gold pointer-events-none" />
                        </div>
                    </div>

                    {/* Images */}
                    <div className="grid grid-cols-2 gap-8 lg:gap-20 mb-24 border-b border-white/5 pb-24">
                        <motion.div key={`left-${car1.id}`} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center">
                            <img src={car1.heroImg} alt={car1.name} className="w-full h-auto max-w-[500px] object-contain drop-shadow-2xl mb-12 mix-blend-screen scale-x-[-1]" />
                            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white uppercase mb-2 text-center">{car1.name}</h3>
                            <p className="text-bmw-gold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 font-bold text-center">{car1.type}</p>
                            <p className="text-xl md:text-3xl font-light text-bmw-silver/80">{car1.price}</p>
                        </motion.div>

                        <motion.div key={`right-${car2.id}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex flex-col items-center">
                            <img src={car2.heroImg} alt={car2.name} className="w-full h-auto max-w-[500px] object-contain drop-shadow-2xl mb-12 mix-blend-screen" />
                            <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white uppercase mb-2 text-center">{car2.name}</h3>
                            <p className="text-bmw-gold tracking-[0.3em] uppercase text-[10px] md:text-xs mb-6 font-bold text-center">{car2.type}</p>
                            <p className="text-xl md:text-3xl font-light text-bmw-silver/80">{car2.price}</p>
                        </motion.div>
                    </div>

                    {/* Specs Comparison Bars */}
                    <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-3xl border border-white/5 shadow-2xl">
                        <h4 className="text-center text-white/40 tracking-[0.6em] uppercase text-[10px] mb-16 font-bold">Performance Metrics</h4>

                        {renderStatBar("Horsepower (HP)", parseInt(car1.specs.hp), parseInt(car2.specs.hp), 800)}
                        {renderStatBar("Torque (NM)", parseInt(car1.specs.torque), parseInt(car2.specs.torque), 1000)}
                        {renderStatBar("Top Speed (KM/H)", parseInt(car1.specs.topSpeed), parseInt(car2.specs.topSpeed), 350)}

                        <h4 className="text-center text-white/40 tracking-[0.6em] uppercase text-[10px] mb-16 mt-32 font-bold">Experience Scores</h4>

                        {renderStatBar("Luxury", car1.scores.luxury, car2.scores.luxury, 100)}
                        {renderStatBar("Performance", car1.scores.performance, car2.scores.performance, 100)}
                        {renderStatBar("Comfort", car1.scores.comfort, car2.scores.comfort, 100)}
                    </div>
                </div>
            </section>

            <FooterDashboard />
        </div>
    );
};

export default ComparePage;
