import React, { useState } from "react";

export const AppContext = React.createContext();

export const AppContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <>
      <AppContext.Provider value={{ theme, toggle }}>
        {children}
      </AppContext.Provider>
    </>
  );
};
