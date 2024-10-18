import Personajes from './componentes/Personajes';
import Home from './componentes/Home';
import { Nadvar } from './componentes/Nadvar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'; 
import injectContext from "./store/context"; 
import { Footer } from './componentes/Footer';
import  StarBackground from './componentes/StarBackground';

function App() {
  return (
    <BrowserRouter>
     <StarBackground stars={300} vel={1} radius={1} />
    <Nadvar />
    <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/Personajes/:id" element={<Personajes />} />
     </Routes>
     <Footer/>
    </BrowserRouter> 
  );
}

export default injectContext(App);
