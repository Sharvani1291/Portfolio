import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="
          fixed bottom-8 right-8 z-50 
          bg-[#f5f5dc] 
          border-4 border-[#673147] 
          text-[#673147]
          text-5xl font-bold 
          rounded-full w-20 h-20
          flex items-center justify-center
          shadow-lg 
          hover:scale-110 hover:shadow-2xl
          transition-all duration-300
        "
      >
        ^
      </button>
    )
  );
};

export default ScrollToTopButton;
