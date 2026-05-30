// Xóa bình luận (AJAX)
document.querySelectorAll('.delete-comment').forEach(btn => {
  btn.addEventListener('click', async function() {
    const row = this.closest('tr');
    const commentId = row.dataset.id;
    
    if (confirm('Xóa bình luận này?')) {
      try {
        const res = await fetch(`/admin/comment/${commentId}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json();
        
        if (data.success) {
          row.remove();
          // Cập nhật lại tổng số bình luận (tuỳ chọn)
          const countSpan = document.querySelector('.stat-card:first-child + .stat-card .stat-number');
          if(countSpan) {
            let current = parseInt(countSpan.innerText);
            countSpan.innerText = current - 1;
          }
        } else {
          alert('Xóa thất bại');
        }
      } catch(err) {
        alert('Lỗi kết nối');
      }
    }
  });
});