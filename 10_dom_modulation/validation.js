document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("errorMessage");

  if (name === "" && name <= 2) {
    return (errorMessage.innerText = "Name is required");
  }
  if (email === "") {
    return (errorMessage.innerText = "Email is required");
  }

  if (password === "" && password.length < 6) {
    return (errorMessage.innerText = "Password must be 6 characters long");
  }

  errorMessage.innerText = "";

  alert("Login successfully");
});
