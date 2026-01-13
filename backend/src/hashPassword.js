import bcrypt from "bcrypt";

async function createHash() {
  const password = "123456";  // 👉 Login ekranında yazacağın gerçek şifre

  const hash = await bcrypt.hash(password, 10);
  console.log("Hash:", hash);
}

createHash();

