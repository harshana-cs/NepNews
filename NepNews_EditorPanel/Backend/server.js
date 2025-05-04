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
