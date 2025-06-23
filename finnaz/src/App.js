
import './App.css';
import { Routes, Route } from "react-router-dom";
import MainScreen from './Pages/MainScreen/MainScreen';
import Financials from './Pages/Financials/Financials'
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/financials" element={<Financials />} />
        <Route path="/dashboard" element={<Dashboard />} />
      
      </Routes>
        
       
      </header>
    </div>
  );
}

export default App;
