const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/autoquiz')
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.log('❌ MongoDB error:', err));

app.set('view engine', 'ejs');
app.set('views', './10.views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'autosecretkey',
  resave: false,
  saveUninitialized: true
}));

// === QUAN TRỌNG: Import routes TRƯỚC ===
const adminRoutes = require('./6.routes/admin');
const commentRoutes = require('./6.routes/comment');
//const authRoutes = require('./8.middleware/auth');
// === Dùng routes TRƯỚC ===
app.use('/admin', adminRoutes);
app.use('/api/comments', commentRoutes);
//app.use('/auth', authRoutes);

// === Static file để ở SAU CÙNG ===
app.use(express.static('.'));

// === Route mặc định ===
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));