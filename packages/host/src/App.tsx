import * as React from 'react';
// @ts-ignore
const Remote = React.lazy(() => import('remote/App'));

function App() {
  return (
    <React.Suspense fallback={'loading...'}>
      <Remote />
    </React.Suspense>
  );
}

export default App;
