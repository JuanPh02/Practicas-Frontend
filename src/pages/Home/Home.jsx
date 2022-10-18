import React from "react";
import udemLogo from "../../assets/images/udem_logo.png";
import "./Home.css";

export default function Home() {
  return (
    <div className="contenedor">
      <img id="logo" src={udemLogo} alt="Udem Logo" />
    </div>
  )
}