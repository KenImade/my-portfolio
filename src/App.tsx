import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'

import useDashboardStore from './store/dashboardStore';

import HomePage from './pages/Home'
import Header from './components/header/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import SingleArticle from './components/article/SingleArticle';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Drafts from './pages/Drafts';
import Editor from './components/editor/Editor';
import NotFoundPage from './pages/NotFoundPage';



function App() {

  const initializeTheme = useDashboardStore(state => state.initializeTheme);
  const isDarkMode = useDashboardStore(state => state.isDarkMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gradient-to-b from-blue-100 via-blue-50 to-gray-100'}`}>
        <Header
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<SingleArticle />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/drafts" element={<Drafts />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="/editor/:id" element={<Editor />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

      </div>
    </Router>
  );
}

export default App
