import { Link } from 'react-router-dom';
import { unstable_ClassNameGenerator as ClassNameGenerator } from '@mui/base/className';

ClassNameGenerator.configure((componentName) => `landing-${componentName}`);

function App() {
  return (
    <div className="App">
      <div>remote-app2</div>
      <Link to={'/myAccount'}>remote</Link>
    </div>
  );
}

export default App;
