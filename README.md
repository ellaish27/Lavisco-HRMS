# 🏢 Lavisco HRMS

A secure, role-based Human Resource Management System.

## 🛠 Tech Stack
- **Frontend**: React + React Router
- **Backend**: Node.js + Express
- **Database**: MySQL
- **Auth**: JWT + bcrypt + RBAC
- **Security**: AES-256-GCM for sensitive data
- **Email**: Nodemailer + Gmail (App Password)

## ▶️ Local Setup
1. `cp backend/.env.example backend/.env` → fill credentials
2. `cp frontend/.env.example frontend/.env`
3. Create MySQL DB and run `docs/db-schema.sql`
4. `cd backend && npm install && npm start`
5. `cd frontend && npm install && npm start`

> Deployable to Render.com with zero config changes.
