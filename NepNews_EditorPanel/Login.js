document.addEventListener("DOMContentLoaded", function () {
    // Get the login button
    const loginBtn = document.getElementById("loginBtn");

    // Add event listener to the button
    loginBtn.addEventListener("click", function () {
        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("loginPassword").value;
    
        fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: email,  // assuming 'username' in DB is the email
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            if (data.success) {
                alert("Login Successful!");
                window.location.href = "Editor_MainPage.html";
            } else {
                alert("Login Failed: " + data.message);
            }
        })
        .catch(err => {
            console.error("Error:", err);
            alert("Something went wrong!");
        });
    });
    
});
  // Get elements
  const loginPage = document.getElementById('loginPage');
  const resetPage = document.getElementById('resetPage');
  const forgotPasswordLink = document.getElementById('forgotPasswordLink');
  const backToLogin = document.getElementById('backToLogin');
  const header = document.getElementById('header');
  
  // Show password reset page when "Forgot Password" is clicked
  forgotPasswordLink.addEventListener('click', function() {
      loginPage.style.display = 'none';
      resetPage.style.display = 'flex';
      header.style.display = 'block';
  });
  
  // Show login page when "Back to Login" is clicked
  backToLogin.addEventListener('click', function() {
      resetPage.style.display = 'none';
      loginPage.style.display = 'flex';
      header.style.display = 'none';
  });
  
  // Toggle password visibility for reset page
  const passwordToggle = document.querySelector('.password-toggle');
  passwordToggle.addEventListener('click', function() {
      const confirmPassword = document.getElementById('confirmPassword');
      const newPassword = document.getElementById('newPassword');
      
      if (confirmPassword.type === 'password') {
          confirmPassword.type = 'text';
          newPassword.type = 'text';
      } else {
          confirmPassword.type = 'password';
          newPassword.type = 'password';
      }
  });
  
  // Toggle password visibility for login page
  const loginPasswordToggle = document.querySelector('.login-password-toggle');
  loginPasswordToggle.addEventListener('click', function() {
      const loginPassword = document.getElementById('loginPassword');
      
      if (loginPassword.type === 'password') {
          loginPassword.type = 'text';
          this.style.opacity = '0.7';
      } else {
          loginPassword.type = 'password';
          this.style.opacity = '1';
      }
  });