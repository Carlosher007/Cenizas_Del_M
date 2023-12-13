import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [background, setBackground] = useState('#48494a');

  const changeBackground = (color) => {
    setBackground(color);
  };

  return (
    <ThemeContext.Provider value={{ background, changeBackground }}>
      <div style={{ backgroundColor: background }}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
