import { Link } from "react-router-dom";
import { unstable_ClassNameGenerator as ClassNameGenerator } from "@mui/base/className";

ClassNameGenerator.configure(componentName => `remote2-${componentName}`)

function App() {

  return (
    <div className="App">
      <div>remote-app2</div>
      <Link to={"/remote"}>remote</Link>
    </div>
  )
}

export default App
