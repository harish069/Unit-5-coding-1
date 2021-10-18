import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Login from './Components/Login';
// import Signup from './Components/Signup';

function App() {
  //const [switchPage, setSwitchPage] = useState(false);
  return (
    // <div className="App">
    //   {switchPage ? <Login /> : <Signup />}
    //   <button onClick={() => setSwitchPage((e) => !(e))}>{switchPage ? "Signup" : "Login"}</button>
    // </div>
    <Login/>
  );
}

export default App;
