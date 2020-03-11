import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [storedValue, setValue] = useLocalStorage("dark-mode", false);
  const [darkMode, setDarkMode] = useState(storedValue);
  const toggleMode = () => {
    setDarkMode(!darkMode);
    setValue(!darkMode);
    darkMode
      ? document.body.classList.remove("dark-mode")
      : document.body.classList.add("dark-mode");
  };

  // load initial state from localStorage
  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, []);

  return [darkMode, toggleMode];
};
