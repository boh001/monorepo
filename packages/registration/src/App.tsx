import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './page/SignIn';
import SignUp from './page/SignUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={'/signIn'} element={<SignIn />} />
        <Route path={'/signUp'} element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
