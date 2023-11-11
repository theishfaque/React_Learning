import React, { useRef } from "react";



function App() {
const formInputRef = React.useRef(null)

  const focusInput = () => {
    formInputRef.current.focus()
    
  }
  return (
    <div className="App">
      <h1>using useRef to access underlying DOM</h1>
      <input ref={formInputRef} type="text"/>
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

export default App;
