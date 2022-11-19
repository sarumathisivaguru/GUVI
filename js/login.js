const login = document.querySelector(".login ");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const msg = document.querySelector("#msg");

login.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = {
        email: email.value,
        password: password.value
    }
    console.log(formData)
    $.ajax({
        type: "POST",
        url: "./php/login.php",
        data: formData,
        dataType: "json",
        encode: true,
      })
        .done(function(data) {
          msg.innerText = data["message"];
          console.log(data);
          localStorage.setItem("auth_token", data["token"]);
          setTimeout(function () {
            window.location = "/guvi/profile.html";
          }, 2000);
        })
        .fail(function (data) {
            msg.innerText = data["responseText"];
        });
})