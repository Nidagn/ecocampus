import React, { useEffect, useState } from "react";

export default function ProductList({ refreshFlag }) {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  const fetchProducts = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      console.error(err);
      setMessage("Ürünler alınamadı");
    }
  };

  const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setMessage(data.message);
      fetchProducts();
    } catch (err) {
      console.error(err);
      setMessage("Silme işlemi başarısız");
    }
  };

  useEffect(() => { fetchProducts(); }, [refreshFlag]);

  return (
    <div>
      <h3>Ürünlerim</h3>
      {message && <p>{message}</p>}
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <strong>{p.title}</strong> - {p.price === 0 ? "Bağış" : `${p.price} TL`} - {p.category || "Kategori Yok"}
            <button onClick={() => deleteProduct(p.id)} style={{ marginLeft: "10px" }}>Sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
