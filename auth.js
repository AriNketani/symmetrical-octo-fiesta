//SIGNUPPP
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('signupUsername').value.trim();
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    const messageElement = document.getElementById('signupMessage');
    if (password !== confirmPassword) {
        messageElement.textContent = 'Passwords do not match.';
        return;
    }
    const user = {
      username: username,
      password: password
    };

    localStorage.setItem('todoUser', JSON.stringify(user));
    alert('Signup successful! You can now log in.');
    window.location.href = 'login.html';
  });
}

//LOGINNN
const loginForm = document.getElementById('loginForm');
if (loginForm) {
  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const message = document.getElementById('loginMessage');
    const savedUser = JSON.parse(localStorage.getItem('todoUser'));

    if (!savedUser) {
      message.textContent = 'User not found. Please sign up first.';
      return;
    }


    if (username === savedUser.username && password === savedUser.password) {
      localStorage.setItem('LoggedIn', 'true');
      window.location.href = 'index.html';
    } else {
      message.textContent = 'Invalid username or password.';
    }
});
}
