import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/base/className';
import MenuAppBar from './components/MenuAppBar';
// @ts-ignore
const Landing = React.lazy(() => import('landing/App'));
// @ts-ignore
const MyAccount = React.lazy(() => import('myAccount/App'));
// @ts-ignore
const SignIn = React.lazy(() => import('registration/SignIn'));
// @ts-ignore
const SignUp = React.lazy(() => import('registration/SignUp'));

ClassNameGenerator.configure((componentName) => `container-${componentName}`);

function App() {
  return (
    <Router>
      <MenuAppBar />
      <React.Suspense fallback={'loading...'}>
        <Routes>
          <Route path={'/'} element={<Landing />} />
          <Route path={'/myaccount'} element={<MyAccount />} />
          <Route path={'/signin'} element={<SignIn />} />
          <Route path={'/signup'} element={<SignUp />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
