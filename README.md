# telly-node
📦 Node.js Backend – Telly Plus API
Overview
This Express-based Node.js API handles authentication, secure two-factor verification (2FA), and user data persistence using Firebase Admin SDK and Firestore. It integrates with EmailJS to send one-time passcodes (OTPs) after Firebase login.

🚀 Features
✅ Firebase Authentication with email/password

🔐 Two-Factor Authentication via Email

📬 EmailJS integration for sending OTPs

🧠 Firestore for storing OTPs securely

⚙️ Redux Toolkit (RTK) client integration for session state

🌐 API endpoints for registration, login, code generation, and verification

📁 Project Structure
.
├── config/
│   ├── firebase.js       # Firebase Admin SDK setup
│   └── service.json      # Firebase service account credentials
├── controllers/
│   ├── authController.js # Login, create user, OTP generation & verification
├── routes/
│   ├── auth.js           # API routes for auth flow
├── views/
│   └── Authentication.tsx, Dashboard.tsx # React SPA frontend
└── server.js             # Express app entry point

🔧 Setup Instructions
1. Install Dependencies
bash
npm install express firebase-admin emailjs dotenv
2. Add Firebase Credentials
Save your service account JSON to config/service.json. Example:

json
{
  "type": "service_account",
  "project_id": "telly-plus-test-2025",
  "private_key": "...",
  "client_email": "..."
}
3. Start the Server
bash
node server.js
📌 API Endpoints
➤ POST /api/login
Authenticates using Firebase and triggers 2FA code generation.

➤ POST /api/generate-code
Generates a 6-digit OTP, saves it to Firestore, and returns it for email dispatch.

➤ POST /api/verify-code
Validates OTP from Firestore. Checks expiration and marks code as used.

🧠 Sample 2FA Flow
Frontend logs in using signInWithEmailAndPassword

Dispatches postLogin(email) → backend generates & stores OTP

Frontend calls EmailJS to send email with code

User enters code → dispatches postVerify(email, code)

Backend verifies code and grants session access

🛡️ Security Notes
OTP codes expire after 15 minutes

Firestore uses the email as the document ID for efficient lookup

Codes are marked used: true after verification to prevent reuse

🧪 Testing With Postman
🔐 Register User
http
POST /api/users
{
  "name": "Keith",
  "email": "keith@example.com",
  "password": "securePass123"
}
🔑 Login + Trigger 2FA
http
POST /api/login
{
  "email": "keith@example.com",
  "password": "securePass123"
}
✅ Verify OTP
http
POST /api/verify-code
{
  "email": "keith@example.com",
  "code": "123456"
