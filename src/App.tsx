import { ThemeProvider } from '@emotion/react';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
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
