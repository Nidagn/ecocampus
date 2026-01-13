import React, { useState, useEffect } from "react";
import { View, TextInput, Button, Text, Picker } from "react-native";
import * as API from "../services/api";

export default function AddProductScreen({ token, onAdd }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    API.getCategories().then(setCategories).catch(console.error);
  }, []);

  const handleSubmit = async () => {
    const product = { title, price, description, category_id };
    const data = await API.addProduct(token, product);
    setMessage(data.message || "Ürün eklendi");
    setTitle(""); setPrice(""); setDescription(""); setCategoryId("");
    if (onAdd) onAdd();
  };

  return (
    <View style={{ marginBottom: 20 }}>
      <TextInput placeholder="Başlık" value={title} onChangeText={setTitle} style={{ borderWidth: 1, marginBottom: 5, padding: 5 }} />
      <TextInput placeholder="Fiyat" value={price} onChangeText={setPrice} keyboardType="numeric" style={{ borderWidth: 1, marginBottom: 5, padding: 5 }} />
      <TextInput placeholder="Açıklama" value={description} onChangeText={setDescription} style={{ borderWidth: 1, marginBottom: 5, padding: 5 }} />
      <Picker selectedValue={category_id} onValueChange={setCategoryId}>
        <Picker.Item label="Kategori Seç" value="" />
        {categories.map(cat => <Picker.Item key={cat.id} label={cat.name} value={cat.id} />)}
      </Picker>
      <Button title="Ürün Ekle" onPress={handleSubmit} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}
