const express = require('express');
const session = require('express-session');
const app = express();
const db = require('./database');  // ← thêm dòng này

app.set('view engine', 'ejs');
app.set('views', './10.views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'autosecretkey',
  resave: false,
  saveUninitialized: true
}));

// Import routes
const adminRoutes = require('./6.routes/admin');
const commentRoutes = require('./6.routes/comment');

// Dùng routes
app.use('/admin', adminRoutes);
app.use('/api/comments', commentRoutes);

// Static file
app.use(express.static('.'));

// Route mặc định
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Server chạy tại http://localhost:${PORT}`));