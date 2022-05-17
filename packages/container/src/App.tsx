import * as React from 'react';
import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { createBrowserHistory } from 'history';
import MenuAppBar from './components/MenuAppBar';
// @ts-ignore
const Landing = React.lazy(() => import('landing/App'));
// // @ts-ignore
// const MyAccount = React.lazy(() => import('myAccount/App'));
// // @ts-ignore
// const SignIn = React.lazy(() => import('registration/SignIn'));
// // @ts-ignore
// const SignUp = React.lazy(() => import('registration/SignUp'));

const history = createBrowserHistory({ window });

function App() {
  return (
    <Router history={history}>
      <MenuAppBar />
      <React.Suspense fallback={'loading...'}>
        <Routes>
          <Route path={'/'} element={<Landing />} />
          {/*<Route path={'/myaccount'} element={<MyAccount />} />*/}
          {/*<Route path={'/signin'} element={<SignIn />} />*/}
          {/*<Route path={'/signup'} element={<SignUp />} />*/}
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
