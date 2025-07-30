# Telly Node

A Node.js backend for the Telly app.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/telly-node.git`
2. Install the dependencies: `yarn install`
3. Start the server: `yarn dev`

## Environment Variables

The following environment variables are required:

* `FIREBASE_SERVICE_ACCOUNT_KEY`: the path to the Firebase service account key JSON file
* `FIREBASE_PROJECT_ID`: the ID of the Firebase project

You can set these variables in a `.env` file in the root of the project.

## Development

To start the server in development mode, run `yarn dev`. This will start the server with nodemon, which will automatically restart the server when changes are detected.

## Production

To start the server in production mode, run `yarn start`. This will start the server with PM2.

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
