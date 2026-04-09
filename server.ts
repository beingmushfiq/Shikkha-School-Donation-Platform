import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Simulated Payment Endpoints
  app.post("/api/donations/initiate", (req, res) => {
    const { amount, method, donorInfo } = req.body;
    // In a real app, you'd call SSLCommerz/Stripe/bKash API here
    console.log(`Initiating ${amount} donation via ${method} for ${donorInfo.email}`);
    res.json({ 
      success: true, 
      redirectUrl: "/donation/success", // Simulated redirect
      transactionId: `TXN_${Math.random().toString(36).substr(2, 9).toUpperCase()}`
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
