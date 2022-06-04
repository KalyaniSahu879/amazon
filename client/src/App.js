
import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnav/Newnav';
import Maincomp from './components/home/Maincomp';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Newnav/>
      <Maincomp/>
    </div>
  );
}

export default App;
