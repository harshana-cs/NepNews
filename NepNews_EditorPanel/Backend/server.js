require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch((error) => {
    console.error('❌ MongoDB connection error:', error);
});

// Import and use article routes
const articleRoutes = require('./routes/articleroutes'); // ✅ Correct
app.use('/api', articleRoutes);


// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});

const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const loginRoutes = require('./routes/loginRoutes');
const editorRoutes = require('./routes/editorRoutes');
const cors = require('cors');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/login', loginRoutes);
app.use('/api/editor', editorRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

