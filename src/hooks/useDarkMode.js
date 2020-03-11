import { useState, useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = () => {
  const [storedValue, setStoredValue] = useLocalStorage("dark-mode", false);
  const [darkMode, setDarkMode] = useState(storedValue);

  // load initial state from localStorage
  useEffect(() => {
    darkMode
      ? document.body.classList.add("dark-mode")
      : document.body.classList.remove("dark-mode");
  }, []);

  return [
    darkMode,
    () => {
      setDarkMode(!darkMode);
      setStoredValue(!darkMode);
      darkMode
        ? document.body.classList.remove("dark-mode")
        : document.body.classList.add("dark-mode");
    }
  ];
};
