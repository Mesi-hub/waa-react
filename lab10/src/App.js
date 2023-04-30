import "./App.css";
import { BrowserRouter } from 'react-router-dom';
import Dashboard from "./containers/Dashboard/Dashboard";



function App() {
  return (

    <div className="App">
      <BrowserRouter>
        <h1>Posts</h1>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
