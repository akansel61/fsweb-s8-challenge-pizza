import { useEffect } from "react";
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
<header className="order-header">
        <h1>Teknolojik Yemekler</h1>
      </header>

      <main className="order-main">
        <form onSubmit={formGonder}>
          <section className="pizza-details">
            <h2>{pizzaBilgileri.ad}</h2>
            <div className="pizza-info">
              <span className="pizza-price">{pizzaBilgileri.fiyat}₺</span>
              <span>{pizzaBilgileri.puan} ({pizzaBilgileri.yorumSayisi})</span>
            </div>
            <p className="pizza-description">
              Frontent dev olarak hala position-absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak ve düz bir mayalı hamur tabanından oluşan, İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.
            </p>
          </section>

          <section className="options-section">
            <div className="size-option">
              <h3>Boyut Seç *</h3>
              <label><input type="radio" name="size" value="küçük" checked={secilenBoyut === 'küçük'} onChange={boyutDegistir} /> Küçük</label>
              <label><input type="radio" name="size" value="orta" checked={secilenBoyut === 'orta'} onChange={boyutDegistir} /> Orta</label>
              <label><input type="radio" name="size" value="büyük" checked={secilenBoyut === 'büyük'} onChange={boyutDegistir} /> Büyük</label>
            </div>

            <div className="dough-option">
              <h3>Hamur Seç *</h3>
              <select value={secilenHamur} onChange={hamurDegistir}>
                <option value="">Hamur Kalınlığı</option>
                <option value="ince">İnce</option>
                <option value="orta">Orta</option>
                <option value="kalin">Kalın</option>
              </select>
            </div>
          </section>

          <section className="ingredients-section">
            <h3>Ek Malzemeler</h3>
            <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
            <div className="ingredients-grid">
              <label><input type="checkbox" name="pepperoni" value="pepperoni" onChange={malzemeDegistir} /> Pepperoni</label>
              <label><input type="checkbox" name="domates" value="domates" onChange={malzemeDegistir} /> Domates</label>
              <label><input type="checkbox" name="biber" value="biber" onChange={malzemeDegistir} /> Biber</label>
              <label><input type="checkbox" name="sosis" value="sosis" onChange={malzemeDegistir} /> Sosis</label>
              <label><input type="checkbox" name="misir" value="misir" onChange={malzemeDegistir} /> Mısır</label>
              <label><input type="checkbox" name="sucuk" value="sucuk" onChange={malzemeDegistir} /> Sucuk</label>
              <label><input type="checkbox" name="kanada-jambonu" value="kanada-jambonu" onChange={malzemeDegistir} /> Kanada Jambonu</label>
              <label><input type="checkbox" name="ananas" value="ananas" onChange={malzemeDegistir} /> Ananas</label>
              <label><input type="checkbox" name="tavuk-izgara" value="tavuk-izgara" onChange={malzemeDegistir} /> Tavuk Izgara</label>
              <label><input type="checkbox" name="jalapeno" value="jalapeno" onChange={malzemeDegistir} /> Jalapeno</label>
              <label><input type="checkbox" name="kabak" value="kabak" onChange={malzemeDegistir} /> Kabak</label>
              <label><input type="checkbox" name="sogan" value="sogan" onChange={malzemeDegistir} /> Soğan</label>
              <label><input type="checkbox" name="sarimsak" value="sarimsak" onChange={malzemeDegistir} /> Sarımsak</label>
            </div>
          </section>

          <hr />

          <section className="notes-section">
            <h3>Sipariş Notu</h3>
            <textarea placeholder="Siparişine eklemek istediğin bir not var mı?" value={siparisNotu} onChange={(e) => setSiparisNotu(e.target.value)}></textarea>
          </section>

          <hr />

          <section className="order-summary">
            <div className="quantity-controls">
              <button type="button" onClick={adetAzalt}>-</button>
              <span>{adet}</span>
              <button type="button" onClick={adetArttir}>+</button>
            </div>
            <div className="summary-details">
              <h4>Sipariş Toplamı</h4>
              <div className="summary-item"><span>Seçimler</span><span>{ekMalzemeler.length * 5}₺</span></div>
              <div className="summary-item total"><span>Toplam</span><span>{toplamFiyat.toFixed(2)}₺</span></div>
            </div>
          </section>

          <button type="submit" className="submit-button">SİPARİŞ VER</button>
        </form>
      </main>
    </div>
  );
}
