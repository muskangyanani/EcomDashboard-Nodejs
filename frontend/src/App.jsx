import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<h1>Product listing</h1>}/>
            <Route path='/add' element={<h1>Add Products</h1>}/>
            <Route path='/update' element={<h1>Update Products</h1>}/>
            <Route path='/logout' element={<h1>Logout</h1>}/>
            <Route path='/profile' element={<h1>User Profile</h1>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/> 
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
