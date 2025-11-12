import { useEffect, useState } from "react";

export default function useLocalStorage(key: string) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    if (localStorage.getItem(key) !== null)
      return JSON.parse(localStorage.getItem(key)!);
    else return "1";
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(currentTheme));
    document.documentElement.setAttribute("data-theme", currentTheme!);
  }, [key, currentTheme]);

  return [currentTheme, setCurrentTheme] as [string, typeof setCurrentTheme];
}
