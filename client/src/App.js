
import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnav/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Newnav/>
      <Maincomp/>
      <Footer/>
    </div>
  );
}

export default App;
