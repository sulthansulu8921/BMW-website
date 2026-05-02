import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ModelsSlider from '../components/ModelsSlider';
import InteriorLuxury from '../components/InteriorLuxury';
import TechIntelligence from '../components/TechIntelligence';
import PerformanceStats from '../components/PerformanceStats';

import DetailGallery from '../components/DetailGallery';
import Pricing from '../components/Pricing';
import FooterDashboard from '../components/FooterDashboard';
import Navbar from '../components/Navbar';

const HomePage = () => {
    return (
        <main className="relative min-h-screen bg-bmw-black">
            <Navbar />
            <div id="home"><HeroSlider /></div>
            <div id="models"><ModelsSlider /></div>
            <div id="interior"><InteriorLuxury /></div>
            <div id="tech"><TechIntelligence /></div>
            <div id="performance"><PerformanceStats /></div>

            <div id="gallery"><DetailGallery /></div>
            <div id="price"><Pricing /></div>
            <div id="contact"><FooterDashboard /></div>
        </main>
    );
};

export default HomePage;
