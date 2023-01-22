import logo from './logo.svg';
import './App.css';
import Welcome from './components/welcome';
import Lobbies from './components/lobbies';
import Lobby from './components/lobby';

import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
    <Routes>
    <Route path="/" element={<Welcome />} />
    <Route path="/lobbies" element={<Lobbies/>} />
    <Route path="/lobby" element={<Lobby />} /> 
    </Routes>
    </div>
    </Router>
  );
}

export default App;
