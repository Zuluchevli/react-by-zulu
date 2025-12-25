import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css';
import Contact from './compontents/Contact';
import Login from './compontents/Login'
import RagisterUser from './compontents/Ragister';
import Navbar from './compontents/Navbar';
import Showcontact from './compontents/Show-contact';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/login' element={<Login />}/> 
          <Route path='/register' element={<RagisterUser />}> </Route>
          <Route path='/contact' element={<Contact />}> </Route>
          <Route path='/Show_contact' element={<Showcontact/>}> </Route>
          <Route path='*' element={<Login/>}></Route>
        </Routes>

      </BrowserRouter>


    </>
  );
}
export default App;
