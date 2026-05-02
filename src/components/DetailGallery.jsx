import React from 'react';
import engine from '../assets/engine.png';
import wheel from '../assets/wheel.png';
import light from '../assets/light.png';

const DetailGallery = () => {
    const details = [
        { img: engine, label: "Engine Performance" },
        { img: wheel, label: "Precision Control" },
        { img: light, label: "Iconic Glow" }
    ];

    return (
        <section className="bg-[#050a12] pb-40 px-6 lg:px-20">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {details.map((detail, i) => (
                        <div key={i} className="relative aspect-square lg:aspect-video overflow-hidden border border-white/5 group">
                            <img
                                src={detail.img}
                                alt={detail.label}
                                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 grayscale-[0.5] group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                                <p className="text-[10px] text-bmw-gold font-bold tracking-[0.4em] uppercase">{detail.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DetailGallery;
