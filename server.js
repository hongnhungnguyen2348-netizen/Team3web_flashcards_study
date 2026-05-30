const express = require('express');
const session = require('express-session');
const app = express();

// Cấu hình views - đúng với tên thư mục của bạn
app.set('view engine', 'ejs');
app.set('views', './10.view');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'autosecretkey',
  resave: false,
  saveUninitialized: true
}));

// Import routes từ đúng thư mục 6.routes
const adminRoutes = require('./6.routes/admin');
const commentRoutes = require('./6.routes/comment');

app.use('/admin', adminRoutes);
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => {
  res.send('<h1>Auto Quiz đang chạy</h1><p><a href="/admin">Vào Admin</a></p>');
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server chạy tại http://localhost:${PORT}`));