import React, {useState} from "react";  



export default function Order() {
  const [pizza, setPizza] = useState({
    
    ad: 'Position Absolute Acı Pizza',
    fiyat: 85.50,
    puan: 4.9,
    yorumSayisi: 200,
  });







  


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Pizza Sipariş Formu</h1>
      <p>Buraya form gelecek...</p>
    </div>
  );
}
