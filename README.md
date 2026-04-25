# 🏡 Airbnb Clone

A full-stack Airbnb clone where users can browse properties, view details, and book stays. Built with modern web technologies focusing on performance and scalability.

---

## 🚀 Features

- 🔐 User Authentication (Signup / Login)
- 🏠 Add & View Property Listings
- 🔍 Search and Filter Listings
- 📄 Property Details Page
- ❤️ Wishlist / Favorites
- 📅 Booking System
- 📱 Fully Responsive UI

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Tailwind CSS / CSS Modules
- Redux / Context API

### Backend
- Node.js
- Express.js

### Database
- MongoDB

### Other Tools
- JWT (Authentication)
- Cloudinary (Image Uploads)
- Stripe (Payments - optional)

---

## 📁 Folder Structure

airbnb-clone/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.js
│   │   └── index.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
├── .env
├── package.json
└── README.md

---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/your-username/airbnb-clone.git
cd airbnb-clone

---

### 2. Install dependencies

#### Frontend
cd client
npm install

#### Backend
cd server
npm install

---

### 3. Setup Environment Variables

Create a `.env` file in the server folder:

PORT=5000  
MONGO_URI=your_mongodb_connection  
JWT_SECRET=your_secret_key  
CLOUDINARY_API_KEY=your_key  

---

### 4. Run the project

#### Start backend
cd server  
npm run dev  

#### Start frontend
cd client  
npm start  


## 🤝 Contributors

- Abhay Raj  
- shivam bilwadiya 
- saurabh singh airee

---

## 📌 Future Improvements

- Map integration
- Reviews & ratings
- Advanced filtering
- Admin dashboard
