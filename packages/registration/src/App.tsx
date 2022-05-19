import * as React from 'react';
import { Route, Routes, Link } from "react-router-dom";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";

function App() {
  return (
    <div>
      <Link to={'/signin'}>signin</Link>
      <Link to={'/signup'}>signup</Link>
      <Routes>
        <Route path="signin" element={<Signin />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
