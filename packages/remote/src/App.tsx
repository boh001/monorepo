import { Link } from "react-router-dom";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/base/className";

ClassNameGenerator.configure(componentName => `remote-${componentName}`)

function App() {

  return (
    <div className="App">
      <div>remote-app</div>
      <Link to={"/remote2"}>remote2</Link>
    </div>
  );
}

export default App;
