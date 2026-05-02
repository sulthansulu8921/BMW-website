import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { carsData } from '../data/cars';
import Navbar from '../components/Navbar';
import FooterDashboard from '../components/FooterDashboard';
import { Gauge, Zap, BatteryCharging, Flame } from 'lucide-react';

const AnimatedCounter = ({ value, label }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, Math.round);
    const [display, setDisplay] = useState(0);

    useEffect(() => {
        const controls = animate(count, value, { duration: 2, ease: "easeOut" });
        const unsubscribe = rounded.onChange((v) => setDisplay(v));
        return () => { controls.stop(); unsubscribe(); };
    }, [value]);

    return (
        <div className="flex flex-col items-center">
            <h4 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-2 font-mono">
                {display}
            </h4>
            <p className="text-[10px] tracking-widest text-bmw-gold uppercase font-bold">{label}</p>
        </div>
    );
};

const AnimatedSpeedometer = ({ maxSpeed, currentStr }) => {
    return (
        <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
                <motion.circle
                    cx="50" cy="50" r="45" fill="none" stroke="#C8A96B" strokeWidth="8"
                    strokeDasharray="283"
                    initial={{ strokeDashoffset: 283 }}
                    whileInView={{ strokeDashoffset: 283 - (283 * (maxSpeed / 350)) }}
                    transition={{ duration: 2, ease: "easeOut" }}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-2">
                <Gauge className="w-6 h-6 text-bmw-silver/40 mb-2" />
                <span className="text-3xl font-bold text-white tracking-tight">{currentStr}</span>
                <span className="text-[8px] uppercase tracking-widest text-bmw-silver/60">Top Speed</span>
            </div>
        </div>
    );
};

const EVBattery = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="relative w-32 h-64 border-4 border-white/20 rounded-xl overflow-hidden p-1 shadow-[0_0_50px_rgba(10,132,255,0.2)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -mt-2 w-10 h-2 bg-white/20 rounded-t-sm" />
                <div className="absolute bottom-1 w-[calc(100%-8px)] rounded-lg bg-black/50 z-10 flex items-center justify-center pb-2">
                    <BatteryCharging className="w-5 h-5 text-blue-400 absolute bottom-4 animate-pulse opacity-50" />
                </div>
                <motion.div
                    initial={{ height: "0%" }}
                    whileInView={{ height: "100%" }}
                    transition={{ duration: 3, ease: "easeOut" }}
                    className="absolute bottom-1 w-[calc(100%-8px)] rounded-lg bg-gradient-to-t from-blue-600 via-blue-400 to-[#0A84FF]"
                />

            </div>
            <div className="mt-8 text-center">
                <p className="text-lg font-bold text-white mb-1">625 km Range</p>
                <p className="text-[10px] tracking-widest text-bmw-gold uppercase">i7 Electric Core</p>
            </div>
        </div>
    );
};

const PerformancePage = () => {
    const m5 = carsData.find(c => c.id === 'm5-competition');

    return (
        <div className="min-h-screen bg-bmw-black flex flex-col">
            <Navbar />

            <section className="flex-grow pt-40 pb-32">
                <div className="container mx-auto px-6 lg:px-20 text-center mb-32">
                    <h1 className="text-bmw-gold uppercase tracking-[0.4em] text-[10px] font-bold mb-4">Engineering Masterclass</h1>
                    <h2 className="text-4xl md:text-6xl font-thin tracking-tighter text-white uppercase">Performance Core</h2>
                </div>

                <div className="container mx-auto px-6 lg:px-20">

                    {/* Hero Stats */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mb-32 border-b border-white/5 pb-32">
                        <div className="flex flex-col items-center border border-white/5 rounded-3xl p-12 glass hover:border-bmw-gold/30 transition-colors shadow-2xl">
                            <Flame className="w-8 h-8 text-bmw-gold mb-8" />
                            <AnimatedCounter value={625} label="Max Horsepower (M5)" />
                        </div>
                        <div className="flex flex-col items-center border border-white/5 rounded-3xl p-12 glass hover:border-bmw-gold/30 transition-colors shadow-2xl">
                            <Zap className="w-8 h-8 text-bmw-gold mb-8" />
                            <AnimatedCounter value={750} label="Max Torque NM (M5)" />
                        </div>
                        <div className="flex flex-col items-center border border-white/5 rounded-3xl p-12 glass hover:border-bmw-gold/30 transition-colors shadow-2xl">
                            <Gauge className="w-8 h-8 text-bmw-gold mb-8" />
                            <AnimatedCounter value={3} label="0-100 Time SEC (M5)" />
                        </div>
                    </div>

                    {/* Visual Widgets */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* Speedometers */}
                        <div className="glass p-12 rounded-3xl border border-white/5 shadow-2xl">
                            <h3 className="text-center text-white/50 tracking-[0.4em] uppercase text-xs font-bold mb-16">Velocity Limits</h3>
                            <div className="grid grid-cols-2 gap-8">
                                <AnimatedSpeedometer maxSpeed={305} currentStr="305" />
                                <AnimatedSpeedometer maxSpeed={250} currentStr="250" />
                            </div>
                            <div className="grid grid-cols-2 text-center mt-6">
                                <p className="text-[10px] tracking-widest text-bmw-gold uppercase">M5 Competition</p>
                                <p className="text-[10px] tracking-widest text-bmw-gold uppercase">Standard Electronic Limit</p>
                            </div>
                        </div>

                        {/* EV Tech */}
                        <div className="glass p-12 rounded-3xl border border-white/5 flex flex-col items-center justify-center shadow-2xl">
                            <h3 className="text-center text-white/50 tracking-[0.4em] uppercase text-xs font-bold mb-16">Battery Intelligence</h3>
                            <EVBattery />
                        </div>
                    </div>

                </div>
            </section>

            <FooterDashboard />
        </div>
    );
};

export default PerformancePage;
