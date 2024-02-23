import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import Productos from './pages/Productos';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<Aboutus />} />
      <Route path="productos" element={<Productos />} />

    </Routes>
    
    
  );
}

    


export default App;
