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

    if(email && password && password2) {
      $.post("/register/do",
      {
          email,
          password,
          password2
      },
      function(data,status){
        if(data=='passwordError') {
          $('#warning').html('<font color="red">Passwords are not equal.</font>')
        } else if(data==true) {
          window.location.href="/";
        }
      });
    } else {
      $('#warning').html('<font color="red">You must fill blanks </font>')
    }



  })

  $('form.form_login').submit(e => {
    e.preventDefault()
    let 
    email=$('#email').val(),
    password=$('#password').val()

    if(email && password) {
      $.post("/login/do",
      {
          email,
          password
      },
      function(data,status){
        if(data=='passwordError') {
          $('#warning').html('<font color="red">Email and password is incompatible.</font>')
        } else if(data==true) {
          window.location.href="/";
        }
      });
    } else {
      $('#warning').html('<font color="red">You must fill blanks </font>')
    }



  })