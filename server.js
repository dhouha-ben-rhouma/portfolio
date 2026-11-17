// server.js — Optional Node.js & Express server
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// API route: contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  console.log('📬 New contact message received:', {
    timestamp: new Date().toISOString(),
    name,
    email,
    subject: subject || 'General Inquiry',
    message,
  });

  return res.status(200).json({
    success: true,
    message: 'Thank you! Your message has been received.',
  });
});

// Serve production static assets from Vite dist/
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Portfolio server running at http://localhost:${PORT}`);
});
