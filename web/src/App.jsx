import React, { useState } from "react";
import Login from "./Login.jsx";
import AddProduct from "./AddProduct.jsx";
import ProductList from "./ProductList.jsx";

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleLogin = () => setLoggedIn(true);
  const handleAddProduct = () => setRefreshFlag(!refreshFlag);

  return (
    <div style={{ padding: "20px" }}>
      <h1>EcoCampus Dashboard</h1>
      {!loggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <AddProduct onAdd={handleAddProduct} />
          <ProductList refreshFlag={refreshFlag} />
        </>
      )}
    </div>
  );
}

