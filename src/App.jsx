import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ModelsPage from './pages/ModelsPage';
import ModelPage from './pages/ModelPage';
import ComparePage from './pages/ComparePage';
import ReviewsPage from './pages/ReviewsPage';
import PerformancePage from './pages/PerformancePage';
import Experience360Page from './pages/Experience360Page';
import GenericPage from './pages/GenericPage';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/models" element={<ModelsPage />} />
                <Route path="/models/:id" element={<ModelPage />} />
                <Route path="/compare" element={<ComparePage />} />
                <Route path="/reviews" element={<ReviewsPage />} />
                <Route path="/performance" element={<PerformancePage />} />
                <Route path="/360-view" element={<Experience360Page />} />
                <Route path="/page/:slug" element={<GenericPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
