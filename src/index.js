import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Restrict from './components/Restricted';
import Dashboard from './components/User';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
   <Routes> 
    <Route path='/' element={<Login/>}/>
    <Route path='/admin/dashboard' element={<App/>}/>
    <Route path='/restrict' element={<Restrict/>}/>
    <Route path='/admin/dashboard/restrict' element={<Restrict/>}/>
    </Routes>
    </BrowserRouter>


  </React.StrictMode>
);


