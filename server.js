const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// ✅ CORS Setup (allow from your Vercel domain)
app.use(cors({
  origin: function (origin, callback) {
    // Allow localhost for dev, your Vercel domain for prod, and .vercel.app subdomains
    if (
      !origin ||
      origin === 'http://localhost:5173' ||
      origin === 'https://dhilleswara-portfolio.vercel.app' ||
      origin.endsWith('.vercel.app')
    ) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  credentials: true,
}));


app.use(express.json());

// ✅ MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB error:', err));

// ✅ Schema and Model
const ContactSchema = new mongoose.Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  timestamp: { type: Date, default: Date.now }
});
const Contact = mongoose.model('Contact', ContactSchema);

// ✅ POST /api/contact
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ message: 'Message saved successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to save contact' });
  }
});

// ✅ Server Start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
