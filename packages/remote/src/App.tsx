import { Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <div>remote-app</div>
      <Link to={"/remote2"}>remote2</Link>
    </div>
  );
}

export default App;
