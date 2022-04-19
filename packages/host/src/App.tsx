import * as React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/base/className";
// @ts-ignore
const Remote = React.lazy(() => import('remote/App'));
// @ts-ignore
const Remote2 = React.lazy(() => import('remote2/App'));

ClassNameGenerator.configure(componentName => `container-${componentName}`)

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/remote">remote</Link>
          </li>
          <li>
            <Link to="/remote2">remote2</Link>
          </li>
        </ul>
      </nav>
      <React.Suspense fallback={"loading..."}>
        <Routes>
          <Route path={"/remote"} element={<Remote />} />
          <Route path={"/remote2"} element={<Remote2 />} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
