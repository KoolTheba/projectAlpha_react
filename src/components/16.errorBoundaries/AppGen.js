import React from 'react'

// Error Boundaries
import Counter from './Counter'
import Counter2 from './Counter2'
import ErrorBoundary from './ErrorBoundary'

function AppGen() {

  return (
    <div className="App">
      <header className="App-header">
        <>
        <h2>Error Boundaries Section</h2>
        <ErrorBoundary><Counter/></ErrorBoundary>
        <ErrorBoundary><Counter2/></ErrorBoundary>
        </>
      </header>
    </div>
  );
}

export default AppGen