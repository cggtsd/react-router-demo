import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { Home } from './components/Home';

import { Navbar } from './components/Navbar';
import { OrderSummary } from './components/OrderSummary';
import { PageNotFound } from './components/PageNotFound';
import { Product } from './components/Product';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import React from 'react';
const LazyAbout=React.lazy(()=>import('./components/About'))
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
         <Route path='*' element={<PageNotFound/>}/>
         <Route path='/' element={<Home/>}/>
         <Route path='about' element={<React.Suspense fallback='Loading...'><LazyAbout/></React.Suspense>}/>
         <Route path='order-summary' element={<OrderSummary/>}/>
         <Route path='products' element={<Product/>}>
          <Route index element={<FeaturedProducts/>}/>
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
         </Route>
        
    </Routes>
    </>
  );
  
}

export default App;
