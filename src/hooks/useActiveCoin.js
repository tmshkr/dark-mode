import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useActiveCoin = () => {
  const [storedValue, setValue] = useLocalStorage("active-coin", 0);
  const [activeCoin, setActiveCoin] = useState(storedValue);

  return [
    activeCoin,
    index => {
      setActiveCoin(index);
      setValue(index);
    }
  ];
};
