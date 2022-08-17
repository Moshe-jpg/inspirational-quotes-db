const signupForm = document.querySelector(".signup-form");
const loginForm = document.querySelector(".login-form");

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}

async function loginFormHandler(event) {
  event.preventDefault();

  //const email = document.querySelector("#email-login").value.trim();
  //const password = document.querySelector("#password-login").value.trim();
  const email = document.querySelector('input[name="email-login"]').value;
  const password = document.querySelector('input[name="password-login"]').value;


  if (email && password) {
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
}

signupForm.addEventListener("submit", signupFormHandler);
loginForm.addEventListener("submit", loginFormHandler);
