let formSubmit = document.querySelector('.register form');
let error = document.querySelector('.error message');

formSubmit.addEventListener('submit',function (e){
    e.preventDefault();
    let name = $("#username").val();
    let phone = $("#phone").val();
    let email = $("#email").val();
    let DOB= $("#DOB").val();
    let password = $("#password").val();
    let confirmpassword = $("#confirmpassword").val();
 
      //  if (password!=confirmpassword)
      //     alert('password does not match with confirm password');
       if(1) {
          $.ajax({
                 url:"/guvi/php/register.php",
                 method: "post",
                 data: {
                         username:name,
                         phone:phone,
                         email:email,
                         DOB:DOB,
                         password:password,
                         confirmpassword:confirmpassword,
                       },
                 async:true,
                 success: function (response){
                 if(response){
                   // error.textContent = response;
               alert(response);
         }
        }
    });
    }
});