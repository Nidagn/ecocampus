import { pool } from "../models/db.js";

// Ürün ekleme (sadece login olmuş kullanıcı)
export const addProduct = async (req, res) => {
  const { title, price, description, image_url, category_id } = req.body;
  const user_id = req.user.id; // JWT middleware'den gelen kullanıcı id

  try {
    const result = await pool.query(
      `INSERT INTO products (title, price, description, image_url, user_id, category_id)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [title, price, description, image_url, user_id, category_id]
    );

    res.json({ message: "Ürün eklendi ✅", product: result.rows[0] });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ürün eklenirken hata oluştu" });
  }
};

// Ürünleri listeleme (herkes görebilir)
export const getProducts = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT p.*, u.email AS owner_email, c.name AS category_name
       FROM products p
       LEFT JOIN users u ON p.user_id = u.id
       LEFT JOIN categories c ON p.category_id = c.id
       ORDER BY p.created_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ürünler alınırken hata oluştu" });
  }
};

// Ürün silme (sadece sahibi silebilir)
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const user_id = req.user.id; // JWT’den gelen kullanıcı id

  try {
    const product = await pool.query("SELECT * FROM products WHERE id = $1", [id]);

    if (product.rows.length === 0)
      return res.status(404).json({ message: "Ürün bulunamadı" });

    if (product.rows[0].user_id !== user_id)
      return res.status(403).json({ message: "Bu ürünü silemezsin" });

    await pool.query("DELETE FROM products WHERE id = $1", [id]);
    res.json({ message: "Ürün silindi ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ürün silinirken hata oluştu" });
  }
};


