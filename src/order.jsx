import React, {useState} from "react";  



export default function Order() {
  const [pizza, setPizza] = useState({
    
    ad: 'Position Absolute Acı Pizza',
    fiyat: 85.50,
    puan: 4.9,
    yorumSayisi: 200,
  });

  const [secilenBoyut, setSecilenBoyut] = useState('orta');
  const [secilenHamur, setSecilenHamur] = useState('');
  const [ekMalzemeler, setEkMalzemeler] = useState([]);
  const [siparisNotu, setSiparisNotu] = useState('');
  const [adet, setAdet] = useState(1);
  const [toplamFiyat, setToplamFiyat] = useState(0);

  useEffect(() => {
    const bazFiyat = pizza.fiyat;
    const ekMalzemeFiyati = 5;
    const ekMalzemeToplam = ekMalzemeler.length * ekMalzemeFiyati;
    if (secilenBoyut === 'küçük') {
      setToplamFiyat((bazFiyat - 10 + ekMalzemeToplam) * adet);
    } else if (secilenBoyut === 'orta') {
      setToplamFiyat((bazFiyat + ekMalzemeToplam) * adet);
    } else if (secilenBoyut === 'büyük') {
      setToplamFiyat((bazFiyat + 10 + ekMalzemeToplam) * adet);
    }
    const toplam = (bazFiyat + ekMalzemeToplam) * adet;
    setToplamFiyat(toplam);
  }, [secilenBoyut, ekMalzemeler, adet, pizzaBilgileri.fiyat]);
  const boyutDegistir = (e) => {
    setSecilenBoyut(e.target.value);
  };

  const hamurDegistir = (e) => {
    setSecilenHamur(e.target.value);
  };

  const malzemeDegistir = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setEkMalzemeler([...ekMalzemeler, value]);
    } else {
      setEkMalzemeler(ekMalzemeler.filter(malzeme => malzeme !== value));
    }
  };

  const adetAzalt = () => {
    setAdet(prev => Math.max(1, prev - 1));
  };

  const adetArttir = () => {
    setAdet(prev => prev + 1);
  };

 const formGonder = (e) => {
    e.preventDefault();
    console.log("Sipariş Bilgileri:", {
      pizzaBilgileri,
      secilenBoyut,
      secilenHamur,
      ekMalzemeler,
      siparisNotu,
      adet,
      toplamFiyat,
    });
  };

  


  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Pizza Sipariş Formu</h1>
      <p>Buraya form gelecek...</p>
    </div>
  );
}
