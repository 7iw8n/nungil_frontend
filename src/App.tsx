import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './GlobalStyles';
import { theme } from './theme';
import Router from './Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
