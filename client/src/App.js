
import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/newnav/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Signin from './components/signup/Signin';
import Signup from './components/signup/Signup';
import {Routes , Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Newnav/>
      <Routes>
        <Route path={"/"} element={<Maincomp/>} />
        <Route path={"/login"} element={<Signin/>} />
        <Route path={"/register"} element={<Signup/>} />
      </Routes>
      {/* <Maincomp/> */}
      <Footer/>
    </div>
  );
}

export default App;
