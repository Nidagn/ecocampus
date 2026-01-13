import React, { useState, useEffect } from "react";

export default function AddProduct({ onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
      .catch(err => console.error(err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ title, price, description, category_id }),
      });
      const data = await res.json();
      if (!res.ok) {
        setMessage(data.message);
        return;
      }
      setMessage("Ürün eklendi ✅");
      setTitle(""); setPrice(""); setDescription(""); setCategoryId("");
      if (onAdd) onAdd();
    } catch (err) {
      console.error(err);
      setMessage("Sunucu hatası");
    }
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Yeni Ürün Ekle</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Başlık" value={title} onChange={e => setTitle(e.target.value)} required />
        <input type="number" placeholder="Fiyat" value={price} onChange={e => setPrice(e.target.value)} required />
        <input type="text" placeholder="Açıklama" value={description} onChange={e => setDescription(e.target.value)} />
        <select value={category_id} onChange={e => setCategoryId(e.target.value)} required>
          <option value="">Kategori Seç</option>
          {categories.map(cat => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
        <button type="submit">Ekle</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
