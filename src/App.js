import React, { useState, useEffect, useCallback } from 'react';
import './index.css';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    if (window.scrollY > lastScrollY && window.scrollY > 0) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.body.style.overflow = 'auto';
    };
  }, [handleScroll]);

  return (
    <div className="App">
      <nav className={`fixed top-0 left-0 right-0 transition-transform duration-200 ease-in-out ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'} bg-black text-white z-50`}>
        <div className="flex justify-between items-center px-5 h-20">
          <div className="flex items-center">
            <h1 className="text-5xl ml-6">런드리백</h1>
          </div>
          <div className="flex space-x-14 mr-6">
            <a href="#회사소개" className="hover:text-gray-500 text-2xl transition  ">회사소개</a>
            <a href="#채용" className="hover:text-gray-500 text-2xl transition  ">채용</a>
            <a href="#상품" className="hover:text-gray-500 text-2xl transition ">상품</a>
            <a href="#문의하기" className="hover:text-gray-500 text-2xl transition ">문의하기</a>
          </div>
        </div>
      </nav>
      <header className="h-screen bg-black text-white flex items-center justify-center">
        <h1 className="text-5xl capitalize">Welcome!</h1>
      </header>
      <main className="bg-white text-black">
        <section className="h-screen flex items-center justify-center">
          <p className="text-2xl capitalize">Scroll to see the effect!</p>
        </section>
        <section className="h-screen flex items-center justify-center">
          <p className="text-2xl capitalize">Keep scrolling...</p>
        </section>
      </main>
    </div>
  );
}

export default App;