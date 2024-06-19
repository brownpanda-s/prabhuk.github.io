
import './App.css';
import Navbar from './components/navbar';
import Navhome from './components/navhome';
import Navskills from './components/navskills';
import Experience from './components/navexperience';
import Contact from './components/navcontact';
import Navresume from './components/navresume';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Navhome/>
      <Navskills/>
      <Experience/>
      <Contact/>
      <Navresume/>    
    </div>
  );
}

export default App;
