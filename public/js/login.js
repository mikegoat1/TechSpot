const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("homepage")
      document.location.replace('/');
    } else {
      alert('Failed to log in.');
    }
  }
};

document
  .querySelector('#loginBtn')
  .addEventListener('click', loginFormHandler);

// document
//   .querySelector('#signUpBtn')
//   .addEventListener('click', 
//     console.log("YOOOO"),
//     document.location.replace("/signUp")
//   );
