import React, { useState, useEffect, useCallback } from 'react';
import './index.css';

function App() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 0) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="App">
      <nav className={`fixed top-0 left-0 right-0 transition-transform duration-200 ease-in-out ${showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'} bg-black text-white z-50`}>
        <div className="flex justify-between items-center px-5 h-20">
          <div className="flex items-center">
            <h1 className="text-5xl ml-6 capitalize">
              <a href='index.html'>Laundrybag</a>
            </h1>
          </div>
          <div className="flex space-x-14 mr-6">
            <a href="#회사소개" className="hover:text-gray-500 text-2xl transition">회사소개</a>
            <a href="#채용" className="hover:text-gray-500 text-2xl transition">채용</a>
            <a href="#소식" className="hover:text-gray-500 text-2xl transition">소식</a>
            <a href="#상품" className="hover:text-gray-500 text-2xl transition">상품</a>
          </div>
        </div>
      </nav>
      
      <header className="h-screen bg-black text-white flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto p-8">
          <div className="mt-16 ml-8 text-left flex flex-col justify-center">
            <h1 className="text-9xl md:text-9xl font-bold leading-snug text-green-500">
              기숙사와 가정용 침구 <br />렌탈 및 세탁 전문
              <br />편안함과 청결을 <br />유지하는 서비스
            </h1>
            <div className="flex justify-end mt-8">
              <a href="#문의하기">
                <button className="px-10 py-4 border-2 border-green-500 text-green-500 text-xl md:text-2xl font-semibold hover:bg-green-500 hover:text-white transition-transform transform hover:scale-105">
                  문의하기
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      
      <main className="bg-white text-black">
        <section className="h-screen flex items-center justify-center">
          <p className="text-2xl capitalize">Scroll to see the effect!</p>
        </section>
        <section className="h-screen flex items-center justify-center">
          <p className="text-2xl capitalize">Keep scrolling...</p>
        </section>
        <section id="문의하기" className="h-screen flex items-center justify-center bg-gray-100">
          <h2 className="text-4xl font-bold">문의하기</h2>
          {/* 문의하기 섹션 내용 추가 */}
        </section>
      </main>
    </div>
  );
}

export default App;