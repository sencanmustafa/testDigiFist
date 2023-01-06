
function checkUsername() {
  var username = document.getElementById("password").value;
  if (username === "test123") {
    window.location.href = "/testDigiFist/store.html";
  } else {
    alert("ERROR");
  }
}

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();
  checkUsername();
});

