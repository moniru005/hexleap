"use client";
import Collection from "@/components/Collection";
import Sports from "@/components/Sports";
import React, { useState } from "react";

const Main = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={`${darkMode && "dark" } font-poppins`}
    >
      <div className="bg-[#F7F7F8] dark:bg-[#292B32]">
        
        <Sports toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Collection />
      </div>
    </div>
  );
};

export default Main;
