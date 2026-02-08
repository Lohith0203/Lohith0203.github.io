import { useEffect, useState } from "react";
import "./theme.css";

import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "10px 14px",
          borderRadius: "8px",
          border: "none",
          background: "var(--accent)",
          color: "#fff",
          cursor: "pointer"
        }}
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      <Header />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
    </>
  );
}

export default App;
