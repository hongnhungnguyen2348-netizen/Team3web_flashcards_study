// Thêm vào đầu file (các require)
const session = require('express-session');
const adminRoutes = require('./6.routes/admin');
const commentRoutes = require('./6.routes/comment');

// Cấu hình session (thêm sau phần app.use express.json)
app.use(session({
  secret: 'autosecretkey',
  resave: false,
  saveUninitialized: true
}));

// Serve static files (đảm bảo có dòng này)
app.use(express.static('public'));

// View engine setup (nếu dùng EJS)
app.set('view engine', 'ejs');
app.set('views', './views');

// Routes (thêm vào trước app.listen)
app.use('/admin', adminRoutes);
app.use('/api/comments', commentRoutes);