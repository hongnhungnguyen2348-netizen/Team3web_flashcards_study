// Danh sách từ xấu (thêm theo ý muốn)
const badWords = ['địt', 'cặc', 'lồn', 'chó', 'cút', 'dm', 'đmm', 'vcl', 'loz'];

// Hàm kiểm tra từ xấu
function containsBadWords(text) {
  const lowerText = text.toLowerCase();
  return badWords.some(badWord => lowerText.includes(badWord));
}

// Xử lý submit form
document.getElementById('commentForm')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const commentContent = document.querySelector('textarea[name="content"]').value;
  
  // Kiểm tra từ xấu
  if (containsBadWords(commentContent)) {
    alert('Bình luận của bạn chứa từ ngữ không phù hợp. Vui lòng chỉnh sửa.');
    return;
  }
  
  const formData = {
    contentId: document.querySelector('input[name="contentId"]').value,
    content: commentContent,
    rating: document.querySelector('select[name="rating"]').value
  };
  
  try {
    const response = await fetch('/api/comments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    const result = await response.json();
    
    if (result.success) {
      // Thêm bình luận mới vào danh sách
      addCommentToUI(result.comment);
      document.getElementById('commentForm').reset();
    } else {
      alert(result.error || 'Gửi thất bại');
    }
  } catch (err) {
    alert('Lỗi kết nối');
  }
});

// Hiển thị bình luận lên giao diện
function addCommentToUI(comment) {
  const commentList = document.getElementById('commentListPublic');
  const commentHtml = `
    <div class="comment-item">
      <strong>${comment.username}</strong>
      <span class="rating">${'★'.repeat(comment.rating)}${'☆'.repeat(5-comment.rating)}</span>
      <p>${escapeHtml(comment.content)}</p>
      <small>${new Date(comment.createdAt).toLocaleString()}</small>
    </div>
  `;
  commentList.insertAdjacentHTML('afterbegin', commentHtml);
}

// Chống XSS
function escapeHtml(str) {
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}