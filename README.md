<div align="center">
  <img src="public/logo.svg" alt="Shikkha Logo" width="120" />
  <h1>Shikkha: School & Donation Platform 🎓 🤝</h1>
  <p><em>Empowering Education through Transparent Giving</em></p>
</div>

---

## 🌟 Overview

**Shikkha** is a sophisticated, full-stack web application designed to bridge the gap between quality education and charitable contributions. It serves as a dual-purpose platform: a **School Management System** to showcase and track educational programs, and a **Transparent Donation Engine** that ensures every penny contributed is accounted for.

Built with a focus on **Radical Transparency**, Shikkha allows donors to see exactly how their contributions are allocated through real-time financial reporting and impact tracking.

## 🚀 Key Features

### 🏫 Educational Management
- **Program Showcase**: Browse various educational initiatives and school projects.
- **Impact Tracking**: View detailed statistics on student progress and program reach.
- **Gallery**: Visual updates of on-ground activities and student achievements.

### 💰 Donation & Transparency
- **Multi-Method Donations**: Securely donate via various digital payment gateways.
- **Transparency Engine**: A dedicated module showing real-time fund utilization and audit logs.
- **AI-Powered Assistance**: Integrated with Google Gemini for intelligent guidance and data processing.
- **Contribution History**: Users can track their donation impact over time.

### 🛠 Administrative Tools
- **Robust Admin Dashboard**: Centralized control for managing donations, programs, and blog content.
- **User Management**: Secure authentication and role-based access control.
- **Real-time Reporting**: Instant generation of financial and impact reports.

## 💻 Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend** | React 19, TypeScript, Vite |
| **Styling** | Tailwind CSS v4, Lucide React, Shadcn UI, Next-themes |
| **Animations** | Framer Motion (`motion`) |
| **Backend** | Firebase (Auth, Firestore, Storage), Express (Hybrid Server) |
| **AI** | Google Gemini SDK (`@google/genai`) |
| **Utilities** | React Router v7, Recharts, Sonner, jsPDF, date-fns |

## 📁 Project Structure

```text
├── src/
│   ├── components/      # Reusable UI & Layout components
│   ├── context/         # Auth and App state context providers
│   ├── pages/           # Page-level components (Home, Donate, Admin, etc.)
│   ├── lib/             # Utility functions and shared instances
│   ├── firebase.ts      # Firebase initialization and error handling
│   ├── main.tsx         # Entry point
│   └── App.tsx          # Route definitions
├── server.ts            # Hybrid Express-Vite development server
├── firebase-blueprint.json # Database schema and security rules
├── components.json      # Shadcn-UI configuration
└── tailwind.config.ts   # Design theme tokens
```

## 🛠 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/Shikkha-School-Donation-Platform.git
   cd Shikkha-School-Donation-Platform
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Setup:**
   Create a `.env` file in the root directory and add your credentials:
   ```env
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_GEMINI_API_KEY=your_gemini_key
   ```

4. **Run for Development:**
   ```bash
   npm run dev
   ```
   *This starts the Express server which proxies Vite middleware at `http://localhost:3000`.*

### Building for Production
```bash
npm run build
npm start
```

## 🚀 Deployment

### Deploy to Vercel
The easiest way to deploy Shikkha is using the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbeingmushfiq%2FShikkha-School-Donation-Platform)

**Prerequisites for Vercel:**
1.  **Environment Variables**: Ensure you add your Firebase and Gemini keys in the Vercel Project Settings.
2.  **Output Directory**: Set to `dist`.
3.  **Install Command**: `npm install`.
4.  **Build Command**: `npm run build`.

*Note: The hybrid Express server (`server.ts`) is designed for development and local production testing. For production serverless environments like Vercel, API endpoints should ideally be migrated to Vercel Functions.*

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contribution
Contributions are welcome! Please feel free to submit a Pull Request.

---
<div align="center">
  Built with ❤️ for a better future of education.
</div>
