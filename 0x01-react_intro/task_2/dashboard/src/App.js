import logo from "./holberton-logo.jpg";
import "./App.css";
import { getFooterCopy, getFullYear } from "./utils";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} alt="School dashboar" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        Login to access the full dashboard
        <div className="login">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
          <label htmlFor="pwd">Password</label>
          <input type="password" name="pwd" id="pwd" />
          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </div>
  );
}

export default App;
