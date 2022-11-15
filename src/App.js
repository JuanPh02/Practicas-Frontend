import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import RouteList from "./utils/Routes";
import './App.css';
import Home from './pages/Home/Home';
import { Students } from './pages/Students/Students';
import { Companies } from './pages/Companies/Companies';
import { Oferts } from './pages/Offers/Offers';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { UserContext } from "./utils/UserContext";

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, name: "", rol: 5150 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <RouteList />
    </UserContext.Provider>
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/students" element={<Students />} />
    //     <Route path="/companies" element={<Companies />} />
    //     <Route path="/oferts" element={<Oferts />} />
    //   </Routes>
    // </BrowserRouter>
  );
}