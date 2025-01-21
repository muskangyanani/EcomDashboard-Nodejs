import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App bg-neutral-100 min-h-screen">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<Products/>}/>
            <Route path='/add' element={<AddProduct/>}/>
            <Route path='/logout' element={<h1>Logout</h1>}/>
            <Route path='/profile' element={<Profile/>}/>
          </Route>
          <Route path='/signup' element={<Signup/>}/> 
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
