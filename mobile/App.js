import React, { useState } from "react";
import { SafeAreaView, View, Button } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import AddProductScreen from "./screens/AddProductScreen";
import ProductListScreen from "./screens/ProductListScreen";

export default function App() {
  const [token, setToken] = useState("");
  const [refreshFlag, setRefreshFlag] = useState(false);

  const handleLogin = (newToken) => setToken(newToken);
  const handleLogout = () => setToken("");
  const triggerRefresh = () => setRefreshFlag(!refreshFlag);

  return (
    <SafeAreaView style={{ flex: 1, padding: 20 }}>
      {!token ? (
        <LoginScreen onLogin={handleLogin} />
      ) : (
        <View style={{ flex: 1 }}>
          <Button title="Çıkış Yap" onPress={handleLogout} />
          <AddProductScreen token={token} onAdd={triggerRefresh} />
          <ProductListScreen token={token} refreshFlag={refreshFlag} />
        </View>
      )}
    </SafeAreaView>
  );
}
