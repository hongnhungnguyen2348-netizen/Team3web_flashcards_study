const signinbtn=document.querySelector('.signinbtn')
const signupbtn=document.querySelector('.signupbtn')
const formbox=document.querySelector('.form-box')
const body=document.querySelector('body')
signupbtn.onclick=function(){
    formbox.classList.add('active')
    body.classList.add('active')

}
signinbtn.onclick=function(){
    formbox.classList.remove('active')
    body.classList.remove('active')
}
// ===== 2. Đăng ký: gửi dữ liệu lên API signup =====
const signupForm = document.getElementById('signupForm');
const signupMsg = document.getElementById('signupMsg');

signupForm.onsubmit = async function (e) {
    e.preventDefault(); // chặn form tự gửi & load lại trang, để mình tự xử lý

    // Lấy dữ liệu người dùng nhập (theo name của input)
    const data = {
        username: signupForm.username.value,
        email: signupForm.email.value,
        password: signupForm.password.value,
        confirmPassword: signupForm.confirmPassword.value
    };

    // Gửi lên API bằng fetch
    const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = await res.json();

    // Hiện thông báo server trả về
    signupMsg.textContent = result.msg;
};

// ===== 3. Đăng nhập: gửi dữ liệu lên API signin =====
const signinForm = document.getElementById('signinForm');
const signinMsg = document.getElementById('signinMsg');

signinForm.onsubmit = async function (e) {
    e.preventDefault();

    const data = {
        username: signinForm.username.value,
        password: signinForm.password.value
    };

    const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    const result = await res.json();

    signinMsg.textContent = result.msg;

    // Đăng nhập đúng → chuyển trang theo role
    if (result.ok) {
        if (result.user.role === 'admin') {
            window.location.href = '';        //  đổi sang trang admin của nhóm
        } else {
            window.location.href = '../2.page/library1.html';   //  đổi sang trang user (home/flashcard)
        }
    }
};