import React, {useState} from 'react'
import Navbar from './components/Navbar/Navbar';
import RouteList from "./utils/Routes";
import './App.css';
import { UserContext } from "./utils/UserContext";

export default function App() {
  const [user, setUser] = useState({ loggedIn: false, name: "", rol: 5150 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Navbar />
      <RouteList />
    </UserContext.Provider>
  );
}