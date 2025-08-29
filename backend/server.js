// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const dotenv = require('dotenv');
// const path = require('path');


// dotenv.config();


// const app = express();
// app.use(express.json());
// app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));


// // Static for resume upload
// app.use('/uploads', express.static(path.join(__dirname,'uploads')));


// // Routes
// const projectsRoute = require('./routes/projects');
// const contactRoute = require('./routes/contact');
// const resumeRoute = require('./routes/resume');


// app.use('/api/projects', projectsRoute);
// app.use('/api/contact', contactRoute);
// app.use('/api/resume', resumeRoute);


// const PORT = process.env.PORT || 5000;


// mongoose.connect(process.env.MONGO_URI, {
// useNewUrlParser: true,
// useUnifiedTopology: true,
// }).then(() => {
// console.log('MongoDB connected');
// app.listen(PORT, () => console.log('Server running on port', PORT));
// }).catch(err => console.error(err));










const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
app.use(express.json());

// CORS setup
// Allow multiple origins from .env (comma separated) or fallback to localhost
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(',')
  : ['http://localhost:3000', 'https://my-portfolio-chi-six-92.vercel.app'];

app.use(cors({
  origin: function(origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = `CORS policy does not allow access from the specified Origin: ${origin}`;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

// Static folder for resume uploads
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
const projectsRoute = require('./routes/projects');
const contactRoute = require('./routes/contact');
const resumeRoute = require('./routes/resume');

app.use('/api/projects', projectsRoute);
app.use('/api/contact', contactRoute);
app.use('/api/resume', resumeRoute);

const PORT = process.env.PORT || 5000;

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
})
.catch(err => console.error('MongoDB connection error:', err));
