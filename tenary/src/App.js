import React, { useState } from 'react';
import "./App.css";
const App = () => {
  const employees = ["John", "Mary", "Peter", "Sally"];
  const [logged, setLogged] = useState(true);
  return (
    <div className='App'>
      {logged &&
        (<div>
          <h1>Employees :</h1>
          <br />
          {employees.map(employee => <h1>{employee}</h1>)}
        </div>
        )}
        <br />
      <button onClick={() => (setLogged(!logged))}>submit</button>
    </div>
  )
}

export default App