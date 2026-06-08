const express = require('express');
const session = require('express-session');
const app = express();

app.set('view engine', 'ejs');
app.set('views', './10.views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('.'));

app.use(session({
  secret: 'autosecretkey',
  resave: false,
  saveUninitialized: true
}));

const adminRoutes = require('./6.routes/admin');
const commentRoutes = require('./6.routes/comment');

app.use('/admin', adminRoutes);
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => {
  res.redirect('/admin');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server chạy tại http://localhost:${PORT}`);
});