import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
 //import Projet from './Pages/projet';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
