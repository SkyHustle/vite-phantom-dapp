import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useWeb3React } from "@web3-react/core";
import Card from "./components/Card";

function App() {
  const { connector, hooks } = useWeb3React();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="App">
        <h1>Web3-React Connector Playbox</h1>
        <div className="card">
          <Card connector={connector} hooks={hooks} name="phantom" />
        </div>
      </div>
    </>
  );
}

export default App;
