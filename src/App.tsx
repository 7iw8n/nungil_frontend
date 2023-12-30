import { Global } from '@emotion/react';
import globalStyles from './styles/globalStyles';
import { ThemeProvider } from '@emotion/react';
import theme from './styles/theme';
import Router from './Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      <Router />
    </ThemeProvider>
  );
}

export default App;
