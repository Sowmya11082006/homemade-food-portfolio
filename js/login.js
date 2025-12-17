function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let error = document.getElementById("error");

  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

  if (!email.includes("@")) {
    error.innerText = "Enter a valid email";
    return;
  }

  if (!passwordRegex.test(password)) {
    error.innerText =
      "Password must have letters, numbers & min 6 characters";
    return;
  }

  localStorage.setItem("loggedIn", "true");
  window.location.href = "menu.html";
}
