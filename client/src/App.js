import './App.css';
import Nav from './pages/Nav';
import Router from './pages/Router';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
     <BrowserRouter>
      <div className="App">
        
        <Router/>
        <Nav/>

      </div>
    </BrowserRouter>
  );
}

export default App;
