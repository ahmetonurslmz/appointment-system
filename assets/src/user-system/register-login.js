import $ from 'jquery';

function EmailValidator(email){
    var emailformat = new RegExp(/^[a-z]{1}[\d\w\.-]+@[\d\w-]{3,}\.[\w]{2,3}(\.\w{2})?$/);
    return emailformat.test(email);
  }


  $('form.form_register').submit(e => {
    e.preventDefault()
    let 
    email=$('#email').val(),
    password=$('#password').val(),
    password2=$('#password2').val()

    $.post("/register/do",
    {
        email,
        password,
        password2
    },
    function(data,status){
      alert("Data: " + data + "\nStatus: " + status);
    });



  })