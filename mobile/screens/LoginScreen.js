import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import * as API from "../services/api";

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    const data = await API.login(email, password);
    if (data.user) {
      onLogin(data.user.id); // ya da JWT token
    } else {
      setMessage(data.message || "Hata oluştu");
    }
  };

  return (
    <View>
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <TextInput placeholder="Şifre" value={password} secureTextEntry onChangeText={setPassword} style={{ borderWidth: 1, marginBottom: 10, padding: 5 }} />
      <Button title="Giriş Yap" onPress={handleSubmit} />
      {message ? <Text>{message}</Text> : null}
    </View>
  );
}
