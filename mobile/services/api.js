const BASE_URL = "http://localhost:3000";

export const login = async (email, password) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
};

export const getProducts = async (token) => {
  const res = await fetch(`${BASE_URL}/products`, {
    headers: { Authorization: token },
  });
  return res.json();
};

export const addProduct = async (token, product) => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: token },
    body: JSON.stringify(product),
  });
  return res.json();
};

export const deleteProduct = async (token, id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
    headers: { Authorization: token },
  });
  return res.json();
};

export const getCategories = async () => {
  const res = await fetch(`${BASE_URL}/categories`);
  return res.json();
};
