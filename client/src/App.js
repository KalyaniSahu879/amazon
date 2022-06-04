import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnav/Newnav';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Newnav/>
    </div>
  );
}

export default App;
