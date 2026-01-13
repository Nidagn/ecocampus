// Kullanıcı ürünlerini listeleme
router.get("/api/products", verifyToken, async (req, res) => {
  const user_id = req.user.id;

  try {
    const result = await pool.query(
      "SELECT * FROM products WHERE user_id = $1 ORDER BY id DESC",
      [user_id]
    );

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ürünler alınamadı" });
  }
});

// Ürün silme
router.delete("/api/products/:id", verifyToken, async (req, res) => {
  const user_id = req.user.id;
  const product_id = req.params.id;

  try {
    const result = await pool.query(
      "DELETE FROM products WHERE id = $1 AND user_id = $2 RETURNING *",
      [product_id, user_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Ürün bulunamadı veya yetkiniz yok" });
    }

    res.json({ message: "Ürün başarıyla silindi" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Ürün silinirken hata oluştu" });
  }
});

