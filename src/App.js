import { BrowserRouter,Routes ,Route } from 'react-router-dom';

import Renvenue from './Renvenue'
import Services from './Services'
import Register from './Register'
import Login from './Login'


function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>  

     <Route path="/" element={<Register/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/renvenue" element={<Renvenue/>}/>
     <Route path="/services" element={<Services/>}/> 

       
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
