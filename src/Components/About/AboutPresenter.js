import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'Theme';

export default () => (
  <ThemeProvider theme={theme}>
    <div>About</div>
  </ThemeProvider>
);
