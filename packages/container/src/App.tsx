import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import MenuAppBar from './components/MenuAppBar';
// @ts-ignore
const Landing = React.lazy(() => import('landing/App'));
// @ts-ignore
const Registration = React.lazy(() => import('registration/App'));
// // @ts-ignore
// const MyAccount = React.lazy(() => import('myAccount/App'));
// // @ts-ignore
// const SignUp = React.lazy(() => import('registration/SignUp'));

function App() {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <MenuAppBar />
        <React.Suspense fallback={'loading...'}>
          <Routes>
            <Route path={'/'} element={<Landing />} />
            <Route path={'/registration/*'} element={<Registration />} />
            {/*<Route path={'/myaccount'} element={<MyAccount />} />*/}
            {/*<Route path={'/signin'} element={<SignIn />} />*/}
            {/*<Route path={'/signup'} element={<SignUp />} />*/}
          </Routes>
        </React.Suspense>
      </Router>
    </ThemeProvider>
  );
}

export default App;
