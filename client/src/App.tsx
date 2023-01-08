import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Admin, Home, Login, NotFound, Profile, Register } from './pages';
import { Navbar } from './utils';
import { AuthProvider } from './context/Auth';
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
          <Routes>
              <Route path='' element={<Home />}/>
              <Route path='/login' element={<Login />}/>
              <Route path='/register' element={<Register />}/>
              <Route path='/profile/:name' element={<Profile />}/>
              <Route path='/admin' element={<Admin />}/>
              <Route path='*' element={<NotFound />}/>
          </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
