import React from 'react';
import { motion } from 'framer-motion';
import engineImg from '../assets/engine.png';

const PerformanceStats = () => {
    const stats = [
        { label: "Engine Performance", value: "2.0L", sub: "TwinPower Turbo Petrol Engine", img: engineImg },
        { label: "Power", value: "190 HP", sub: "400 Nm Torque" },
        { label: "Acceleration", value: "0-100 km/h", sub: "7.5 s", unit: "s" },
        { label: "Top Speed", value: "233", sub: "km/h", isSpeedo: true },
        { label: "Mileage", value: "16.5", sub: "km/l" },
        { label: "Transmission", value: "8-Speed", sub: "Automatic" }
    ];

    return (
        <section className="bg-[#050a12] py-16 md:py-24 px-6 lg:px-24 border-t border-white/5">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 mb-16 md:mb-24">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col justify-between group transition-colors cursor-default h-36 md:h-48">
                            <div>
                                <p className="text-[9px] text-bmw-silver/20 tracking-[0.3em] uppercase mb-3 md:mb-4 font-bold">{stat.label}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-2xl md:text-4xl font-extralight text-white/90">{stat.value}</span>
                                    {stat.unit && <span className="text-[10px] text-bmw-silver/20">{stat.unit}</span>}
                                </div>
                                <p className="text-[9px] text-bmw-silver/20 mt-2 font-light tracking-wide">{stat.sub}</p>
                            </div>

                            <div className="w-8 h-[1px] bg-white/10 group-hover:bg-bmw-gold/40 transition-colors" />
                        </div>
                    ))}
                </div>

                <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start">
                    <div className="max-w-xl">
                        <h2 className="text-3xl font-medium mb-6 uppercase tracking-tight">Designed To Impress</h2>
                        <p className="text-bmw-silver/40 text-sm font-light leading-relaxed mb-8">
                            Every line, every detail, and every curve of the BMW 5 Series LWB is crafted to make a lasting impression.
                        </p>
                        <a href="#" className="flex items-center gap-4 text-bmw-gold text-[10px] uppercase font-bold tracking-[0.3em] group">
                            Explore More
                            <span className="group-hover:translate-x-2 transition-transform">→</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PerformanceStats;
