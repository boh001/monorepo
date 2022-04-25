import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>remote-app2</div>
      <Link to={'/myAccount'}>remote</Link>
    </div>
  );
}

export default App;
