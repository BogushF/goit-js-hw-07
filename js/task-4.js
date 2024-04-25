const loginForm = document.querySelector(".login-form");

const handleSubmit = event => {
  event.preventDefault();
  const login = event.target.elements.login.value.trim();
  const password = event.target.elements.password.value.trim();
  
  if (login === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
};

loginForm.addEventListener("submit", handleSubmit);
