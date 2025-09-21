import { Link } from "react-router-dom";
import React from "react";
import './home.css';
import anaSayfaBanner from './images/iteration-1-images/home-banner.png';

export default function Home() {
   
  };


  return (
    <div style={{
    textAlign: "center", 
    marginTop: "50px", 
    backgroundImage: `url(${anaSayfaBanner})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    position: 'relative'
    }}>

      <h1>🍕 Teknolojik Yemekler</h1>
      <p>Hoş geldiniz! Hemen kendi pizzanızı oluşturun.</p>
      <Link to="/order">
        <button>Siparişe Başla</button>
      </Link>
    </div>
  );

