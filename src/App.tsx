import { useEffect, useState } from 'react'

import useDashboardStore from './store/dashboardStore';

import HomePage from './pages/Home'
import Header from './components/header/Header';


function App() {

  const initializeTheme = useDashboardStore(state => state.initializeTheme);
  const isDarkMode = useDashboardStore(state => state.isDarkMode);
  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
     <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
     />
     {/* <HomePage setCurrentPage={setCurrentPage}/> */}
    </div>
  )
}

export default App
