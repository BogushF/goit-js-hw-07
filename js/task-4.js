const loginForm = document.querySelector(".login-form");

const submitTo = event => {
  event.preventDefault();
  const email = event.target.elements.email.value.trim();
  const password = event.target.elements.password.value.trim();
  
  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(`Login: ${email}, Password: ${password}`);
  event.target.reset();
};

loginForm.addEventListener("submit", submitTo);
