import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const navLinks = [
        "Home", "Models", "Reviews", "Interior", "Performance", "Gallery", "Price", "Contact"
    ];

    const getRoute = (link) => {
        if (link === 'Home') return '/';
        if (link === 'Models') return '/models';
        if (link === 'Reviews') return '/reviews';
        if (link === 'Compare') return '/compare';
        if (link === 'Performance') return '/performance';
        return `/page/${link.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    };

    const handleMobileNav = (link) => {
        setMenuOpen(false);
        // Smooth scroll for on-page sections
        const sectionMap = {
            'Interior': 'interior',
            'Gallery': 'gallery',
            'Price': 'price',
            'Contact': 'contact',
            'Performance': 'performance',
        };
        if (sectionMap[link]) {
            const el = document.getElementById(sectionMap[link]);
            if (el) { el.scrollIntoView({ behavior: 'smooth' }); return; }
        }
        navigate(getRoute(link));
    };

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-[100] px-5 lg:px-16 py-5 md:py-8 flex items-center justify-between bg-gradient-to-b from-bmw-black/95 to-transparent">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center p-1 shadow-2xl">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
                            alt="BMW Logo"
                            className="w-full h-full object-contain drop-shadow-lg"
                        />
                    </div>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 + 0.5 }}
                        >
                            <Link
                                to={getRoute(link)}
                                className="text-[10px] uppercase font-bold tracking-[0.25em] text-bmw-warm-white/70 hover:text-bmw-gold transition-all duration-300 relative group"
                            >
                                {link}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-bmw-gold transition-all group-hover:w-full" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-bmw-warm-white hover:text-bmw-gold transition-colors p-2 glass rounded-full"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </button>
            </nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMenuOpen(false)}
                            className="fixed inset-0 z-[98] bg-black/70 backdrop-blur-sm"
                        />

                        {/* Drawer */}
                        <motion.div
                            key="drawer"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                            className="fixed top-0 right-0 h-full w-[75vw] max-w-xs z-[99] bg-bmw-black border-l border-white/10 flex flex-col pt-24 pb-12 px-8 shadow-2xl"
                        >
                            {/* Gold accent line */}
                            <div className="w-8 h-[2px] bg-bmw-gold mb-10" />

                            <nav className="flex flex-col gap-1 flex-1">
                                {navLinks.map((link, i) => (
                                    <motion.button
                                        key={link}
                                        initial={{ opacity: 0, x: 30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 + 0.1 }}
                                        onClick={() => handleMobileNav(link)}
                                        className="text-left text-[11px] uppercase font-bold tracking-[0.3em] text-bmw-warm-white/60 hover:text-bmw-gold transition-all duration-300 py-4 border-b border-white/5 hover:border-bmw-gold/30 hover:pl-2"
                                    >
                                        {link}
                                    </motion.button>
                                ))}
                            </nav>

                            <div className="flex items-center gap-3 mt-auto">
                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center p-1">
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg" alt="BMW" className="w-full h-full object-contain" />
                                </div>
                                <p className="text-[8px] text-bmw-silver/30 tracking-[0.4em] uppercase font-bold">Sheer Driving Pleasure</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
