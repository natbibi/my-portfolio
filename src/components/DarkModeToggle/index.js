import React, { useEffect, useState } from "react";
import Toggle from "react-toggle";
import "react-toggle/style.css";

export const DarkModeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.body.dataset.theme = isDark ? "dark" : "light";

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <Toggle
      checked={isDark}
      onChange={(event) => setIsDark(event.target.checked)}
      icons={{
        checked: "🌒",
        unchecked: "🌖",
      }}
      aria-label="Dark mode toggle"
    />
  );
};