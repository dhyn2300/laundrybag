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
      <nav
        className={`fixed top-0 left-0 right-0 transition-transform duration-200 ease-in-out ${
          showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
        } bg-black text-white z-50`}
      >
        <div className="flex justify-between items-center px-5 h-20">
          <div className="flex items-center capitalize">
            <h1 className="text-5xl ml-6 capitalize">
              <a className="capitalize select-none" href="/">
                Laundrybag
              </a>
            </h1>
          </div>
          <div className="flex space-x-14 mr-6 select-none">
            <a href="#about" className="hover:text-gray-500 text-2xl transition">
              회사소개
            </a>
            <a
              href="#employment"
              className="hover:text-gray-500 text-2xl transition"
            >
              채용
            </a>
            <a href="#news" className="hover:text-gray-500 text-2xl transition">
              소식
            </a>
            <a
              href="#product"
              className="hover:text-gray-500 text-2xl transition"
            >
              상품
            </a>
          </div>
        </div>
      </nav>
      <header className="h-screen bg-black text-white flex items-center justify-center">
        <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto p-8">
          <div className="mt-16 ml-8 text-left flex flex-col justify-center">
            <h1 className="text-9xl md:text-9xl font-bold leading-snug text-green-500 select-none">
              기숙사와 가정용 침구 <br />
              렌탈 및 세탁 전문
              <br />
              편안함과 청결을 <br />
              유지하는 서비스
            </h1>
            <div className="flex justify-end mt-8">
              <a href="#문의하기">
                <button className=" select-none px-10 py-4 border-2 border-green-500 text-green-500 text-xl md:text-2xl font-semibold hover:bg-green-500 hover:text-white transition-transform transform hover:scale-105">
                  문의하기
                </button>
              </a>
            </div>
          </div>
        </div>
      </header>
      <div className="mt-6 border-gray-400 border-b">
        <div className="mb-6">
          <div className="marquee-wrapper">
            <div className="marquee select-none">
              <span>vscode </span>
              <span> build </span>
              <span> node-modules </span>
              <span> public </span>
              <span> favicon-ico </span>
              <span> logo </span>
              <span> app-js </span>
              <span> index </span>
              <span> package-json </span>
              <span>vscode </span>
              <span> build </span>
              <span> node-modules </span>
              <span> public </span>
              <span> favicon-ico </span>
              <span> logo </span>
              <span> app-js </span>
              <span> index </span>
              <span> package-json </span>
              <span>vscode </span>
              <span> build </span>
              <span> node-modules </span>
              <span> public </span>
              <span> favicon-ico </span>
              <span> logo </span>
              <span> app-js </span>
              <span> index </span>
              <span> package-json </span>
            </div>
          </div>
        </div>
      </div>
      <main className="bg-white text-black -ml-96 ">
        <h2 className=" text-6xl mt-24 -ml-96 select-none ">개발 툴 및 환경</h2>
        <h2 className=" text-xl -ml-36 select-none ">제작기간 ~2일</h2>
        <section className=" border-gray-400 border-b h-1/2 flex justify-center ml-96 mt-10">
          <div className="flex-col text-left px-4 select-none ml-96 ">
            <ul>
              <li className="mb-16">
                <div className="border-black border-b flex justify-between">
                  <div className="">
                    <h3 className="text-3xl mb-5 hover:text-green-500">React</h3>
                    <p className=" text-2xl mb-4 ">라이브러리로 UI를 구성/관리</p>
                  </div>
                  <button className="text-green-500 ml-8">Explore &rarr;</button>
                </div>
              </li>
              <li className="mb-16">
                <div className="border-black border-b flex justify-between">
                  <div>
                    <h3 className="text-3xl mb-5 hover:text-green-500">JavaScript</h3>
                    <p className=" text-2xl mb-4 ">JS, JSX로 React 컴포넌트 작성</p>
                  </div>
                  <button className="text-green-500 ml-8">Explore &rarr;</button>
                </div>
              </li>
              <li className="mb-16">
                <div className="border-black border-b flex justify-between mb-40">
                  <div className="">
                    <h3 className="text-3xl mb-5 hover:text-green-500">CSS</h3>
                    <p className=" text-2xl mb-4 ">유틸리티-퍼스트 TailwindCSS 프레임워크 적용</p>
                  </div>
                  <button className="text-green-500 ml-8">Explore &rarr;</button>
                </div>
              </li>
            </ul>
          </div>
        </section>
        {/* 다른 흰 화면 섹션 추가 */}
        
        
        
      </main>
    </div>
  );
}

export default App;