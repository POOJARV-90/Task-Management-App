import About from './Components/About/About';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Navabar from './Components/Navabar/Navabar';
import logo from './logo.svg';
import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navabar/>
      
     

      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/About-us' element={<About/>}/>
        <Route exact path='/SignUp' element={<Signup/>}/>
        <Route exact path='/Login' element={<Login/>}/>

      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
