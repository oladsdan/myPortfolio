import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home';
import Contact from './components/Contact/Contact';
import Abouts from './components/Abouts/Abouts';


function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
        <div className="flex">
          <div className="px-[2rem]">
            <Navbar />
          </div>
          <Sidebar />

        </div>
        

        <div className="px-[2rem]">

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element= {<Abouts />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>

      
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
