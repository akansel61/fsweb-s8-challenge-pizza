import React, {useState} from "react";  



export default function Order() {
  const [pizza, setPizza] = useState({
    const [pizza, setPizza] = useState({
    name: 'Position Absolute Acı Pizza',
    price: 85.50,
    rating: 4.9,
    reviews: 200,
  });
  });


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Pizza Sipariş Formu</h1>
      <p>Buraya form gelecek...</p>
    </div>
  );
}
