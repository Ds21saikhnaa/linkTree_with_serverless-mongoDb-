import React from 'react';
// import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Login, NotFound, Profile, Register } from './pages';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/profile/:name' element={<Profile />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
