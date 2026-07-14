import React, { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Navbar ثابت (Eager Loading)
import Navbar from "./components/Navbar/Navbar";

// Lazy Loading للصفحات
const Home = lazy(() => import("./components/Home/Home"));
const About = lazy(() => import("./components/About/About"));
const Skills = lazy(() => import("./components/Skills/Skills"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const Projects = lazy(() => import("./components/Projects/Projects"));

/**
 * Scroll To Top Component
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null;
};

/**
 * Loader Component
 */
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      backgroundColor: "#030303",
      flexDirection: "column",
      gap: "12px",
    }}
  >
    <div
      style={{
        width: "40px",
        height: "40px",
        border: "3px solid rgba(124, 58, 237, 0.15)",
        borderTopColor: "#7c3aed",
        borderRadius: "50%",
        animation: "spin 0.8s linear infinite",
      }}
    />

    <style>{`
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

function App() {
  return (
    // 🛡️ الحاوية الخارجية الكبرى: إجبار السواد التام على الشاشة كلها من الحافة للحافة
    <div 
      style={{ 
        width: "100%", 
        minHeight: "100vh", 
        backgroundColor: "#030303", 
        margin: 0, 
        padding: 0,
        overflowX: "hidden"
      }}
    >
      {/* Scroll reset */}
      <ScrollToTop />

      {/* Navbar ثابت */}
      <Navbar />

      {/* Main content */}
      <main
        style={{
          width: "100%",
          maxWidth: "100vw",
          overflow: "hidden",
          backgroundColor: "#030303", // ⬅️ تأمين خلفية الـ main بنفس السواد
          margin: "0 auto",
        }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />

            {/* أي Route غلط يرجع Home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;