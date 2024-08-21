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
      <div className="App-body">Login to access the full dashboard</div>
      <div className="App-footer">
        Copyright {getFullYear()} - {getFooterCopy(true)}
      </div>
    </div>
  );
}

export default App;
