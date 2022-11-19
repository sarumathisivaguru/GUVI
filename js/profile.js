const profile = document.querySelector(".profile form");
const name = document.querySelector("#name");
const dob= document.querySelector("#dob");
const age = document.querySelector("#age");
const mobilenum = document.querySelector("#mobile-number");
const msg = document.querySelector("#msg");

profile.addEventListener("submit", (e) => {
    e.preventDefault();
    const token = localStorage.getItem("auth_token");
    console.log(token)
    const formData = {
        auth_token: token,
        name: name.value,
        dob: dob.value,
        age: age.value,
        phone: mobilenum.value
    }
    $.ajax({
        type: "POST",
        url: "./php/profile.php",
        data: formData,
        dataType: "json",
        encode: true,
      })
        .done(function(data) {
          msg.innerText = data.message;
        })
        .fail(function (data) {
            console.log(data["responseText"])
          msg.innerText = data["responseText"] 
          // setTimeout(function () {
          //   window.location = "/guvi/login.html";
          // }, 2000)
        });
})