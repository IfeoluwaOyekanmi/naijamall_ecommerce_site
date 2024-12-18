import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

// Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';


function App() {
  return (
      <Router>
       <Navbar />
       <SideDrawer />
       <Backdrop/>
       <main>
         <Routes>
           <Route path='/' element={<HomeScreen />} /> 
           <Route path='/product/:id' element={<ProductScreen />} />
           <Route path='/cart' element={<CartScreen />} />
         </Routes>
        </main>
      </Router>
    );
}

export default App;
