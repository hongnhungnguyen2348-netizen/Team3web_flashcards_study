const express = require('express');
const session = require('express-session');
const { trackHomepageView } = require('./src/middleware/viewCounter');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: 'autosecretkey',
  resave: false,
  saveUninitialized: true
}));

app.use(trackHomepageView);

// === QUAN TRỌNG: Import routes TRƯỚC ===
const adminRoutes = require('./src/routes/admin');
const commentRoutes = require('./src/routes/comment');
const authRoutes = require('./src/routes/authRoutes');
const viewRoutes = require('./src/routes/viewRoutes'); // THÊM DÒNG NÀY
const userRoutes = require('./src/routes/userRoutes');

// === Dùng routes ===
app.use('/admin', adminRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/views', viewRoutes); // THÊM DÒNG NÀY
app.use('/api/users', userRoutes);


// === Static file để ở SAU CÙNG ===
app.use(express.static('public'));

// === Route mặc định ===
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});
