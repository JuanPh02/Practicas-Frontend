import React from 'react'
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home/Home';
import { Students } from './pages/Students/Students';
import { Companies } from './pages/Companies/Companies';
import { Oferts } from './pages/Oferts/Oferts';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/oferts" element={<Oferts />} />
      </Routes>
    </BrowserRouter>
  );
}