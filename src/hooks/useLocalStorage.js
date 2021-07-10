import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  return [
    storedValue,
    value => {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  ];
};
