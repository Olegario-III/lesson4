import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState('annonymous');
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {isLoggedIn ? (
        <div>
          <h1>Welcome, {name}!</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please log in.</h1>
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
          <button onClick={() => {setIsLoggedIn(true); setName('Jacob');}}>Login as Jacob</button>
          <button onClick={() => {setIsLoggedIn(true); setName('Robert');}}>Login as Robert</button>
        </div>
      )}
    </div>
  );
}

export default App;
