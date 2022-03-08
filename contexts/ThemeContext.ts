import React from 'react';

const ThemeContext = React.createContext({
  darkMode: true,
  changeColorTheme: () => {},
});
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;
