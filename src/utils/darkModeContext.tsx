import { createContext, useContext, useEffect, useState } from "react";

// Definiamo il tipo per il contesto
type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

// Creiamo il contesto con un valore iniziale
const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

// Provider del contesto
const DarkModeProvider = ({ children }: { children: React.ReactNode }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  useEffect(() => {
    // Recupera la preferenza dal localStorage o dalle preferenze di sistema
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    }

    // Aggiunge o rimuove la classe "dark" dal body quando cambia darkMode
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Custom hook per usare il contesto
const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error("contesto non trovato");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkModeContext };
