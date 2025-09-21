import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🍕 Teknolojik Yemekler</h1>
      <p>Hoş geldiniz! Hemen kendi pizzanızı oluşturun.</p>
      <Link to="/order">
        <button>Siparişe Başla</button>
      </Link>
    </div>
  );
}
