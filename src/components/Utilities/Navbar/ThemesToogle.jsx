"use client";
import { useEffect, useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { BsSunFill } from "react-icons/bs";

const ThemesToogle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <button
      className="h-8 flex items-center justify-center dark:bg-color-secondary bg-color-primary cursor-pointer rounded-full p-4"
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? (
        <IoMoonOutline className="text-color-dark" size={22} />
      ) : (
        <BsSunFill className="text-color-tertiary" size={22} />
      )}
    </button>
  );
};
export default ThemesToogle;
