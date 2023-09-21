import React from 'react';
import { ThemeProvider as GlobalThemeProvider } from 'styled-components';

import { GlobalStyle, THEME } from '..';

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return (
    <GlobalThemeProvider theme={THEME}>
      <GlobalStyle />
      {children}
    </GlobalThemeProvider>
  );
};

export default ThemeProvider;
