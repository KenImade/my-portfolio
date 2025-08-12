import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'

import useDashboardStore from './store/dashboardStore';

import HomePage from './pages/Home'
import Header from './components/header/Header';
import About from './pages/About';



function App() {

  const initializeTheme = useDashboardStore(state => state.initializeTheme);
  const isDarkMode = useDashboardStore(state => state.isDarkMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <Router>
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      <Header 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>

      </div>
    </Router>
  );
}

export default App
