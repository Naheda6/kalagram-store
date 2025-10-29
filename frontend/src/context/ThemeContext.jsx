import React, { createContext, useContext } from 'react';

// Define your theme colors
const themeColors = {
  // Brown theme
  primary: '#7B4B24',
  primaryDark: '#5F391A',
  primaryLight: '#9B6B3F',
  
  // Accent colors
  accent: '#D4A574',
  cream: '#FFF8F0',
  
  // Text colors
  textDark: '#3B2A1B',
  textLight: '#6B5B4F',
  
  // Emerald (for cart/buttons)
  emerald: '#10b981',
  emeraldDark: '#059669',
};

// Create the context
const ThemeContext = createContext(themeColors);

// Provider component
export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={themeColors}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ThemeContext;