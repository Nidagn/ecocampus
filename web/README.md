# EcoCampus

**Proje Adı:** EcoCampus (Sürdürülebilir Kampüs Pazaryeri)  
**Tema:** Döngüsel Ekonomi ve Öğrenci Dayanışması  
**Ders:** YMH3007 Fullstack Web ve Mobil Uygulama Geliştirme  
**Öğrenci:** Fadime Nida Gün  
**GitHub Repo Linki:** [https://github.com/Nidagn/ecocampus](https://github.com/Nidagn/ecocampus)

---

## 📌 Proje Amacı

EcoCampus, üniversite öğrencilerinin kullanmadıkları ders materyallerini, kitaplarını veya eşyalarını satabilecekleri ya da ihtiyaç sahiplerine ücretsiz bağışlayabilecekleri bir platformdur.  
Bu proje ile Node.js (Backend), React (Web), React Native (Mobil) ve PostgreSQL kullanılarak uçtan uca bir Fullstack uygulama geliştirilmiştir.

---

## 🛠 Teknolojiler

- **Backend:** Node.js, Express.js  
- **Veritabanı:** PostgreSQL  
- **Web Frontend:** React (Vite), React Router  
- **Mobil Frontend:** React Native, Expo  
- **Güvenlik:** Bcrypt (şifre hashleme), JWT (korumalı rotalar)

---

## 💻 Proje Yapısı
ecocampus/
├─ backend/
│ ├─ src/
│ │ ├─ controllers/
│ │ │ └─ authController.js
│ │ ├─ models/
│ │ │ └─ db.js
│ │ ├─ routes/
│ │ │ └─ authRoutes.js
│ │ └─ server.js
│ ├─ package.json
│ └─ .env
├─ web/
│ ├─ src/
│ │ ├─ pages/
│ │ │ ├─ Login.jsx
│ │ │ └─ AddProduct.jsx
│ │ └─ App.jsx
│ ├─ package.json
│ └─ vite.config.js
├─ mobile/
│ ├─ screens/
│ │ ├─ LoginScreen.js
│ │ ├─ AddProductScreen.js
│ │ └─ ProductListScreen.js
│ ├─ services/
│ │ └─ api.js
│ ├─ App.js
│ └─ package.json
└─ README.md


---

## 🔹 Backend Kurulum

1. `backend/` klasörüne git:
```bash
cd backend


Paketleri yükle:

npm install


.env dosyasını oluştur ve PostgreSQL bilgilerini ekle:

PORT=3000
DB_USER=postgres
DB_PASS=1234
DB_HOST=localhost
DB_PORT=5432
DB_NAME=ecocampus
JWT_SECRET=ecocampus_secret_key


Sunucuyu başlat:

npm start


Sunucu çalışıyorsa Server çalışıyor: 3000 mesajını görürsün.

🔹 Web Kurulum

web/ klasörüne git:

cd web


Paketleri yükle:

npm install


Web uygulamasını başlat:

npm run dev


Tarayıcıda http://localhost:5173 adresini aç.

Login sayfası ile giriş yapabilirsin.

Ürün ekleme, silme, listeleme işlemleri Web panelden yapılabilir.

🔹 Mobil Kurulum (Expo)

mobile/ klasörüne git:

cd mobile


Paketleri yükle:

npm install


Expo uygulamasını başlat:

npm start


Telefon veya emülatör ile:

QR kodu Expo Go uygulaması ile tara.

Login, ürün ekleme ve listeleme işlemleri mobilde test edilebilir.

🗄 Veritabanı Tasarımı

Users Table

id (PK), username, email, password, created_at

Categories Table

id (PK), name, icon

Products Table

id (PK), title, price, description, image_url, user_id (FK), category_id (FK)

Mobilden eklenen ürün Web panelde, Web’den silinen ürün mobilde anında görünür.

⚡ API Endpoints

POST /login → Kullanıcı giriş

POST /register → Kullanıcı kayıt

GET /products → Ürün listesi

POST /products → Ürün ekleme (token gerekli)

DELETE /products/:id → Ürün silme (token gerekli)

GET /categories → Kategori listesi

📸 Ekran Görüntüleri

Web Login ve Dashboard

Mobil Login ve Ürün Listesi / Ekleme

Token görünümlü Postman login isteği

✅ Sonuç

Backend ve Frontend (Web + Mobil) tam entegre

JWT ve Bcrypt ile güvenli giriş

Döngüsel ekonomi ve öğrenci dayanışması için platform hazır

💡 Öneriler

Web ve mobilde aynı veritabanı kullanımı ile senkron çalışıyor.

Expo Go ile mobil testi kolayca yapılabilir.

Yeni özellikler eklemek için screens/ ve services/api.js üzerinden geliştirme yapılabilir.

