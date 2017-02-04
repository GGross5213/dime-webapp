var onSignUp = function(){
  var name = $('#name').val();
  var email = $('#name').val();
  var password = $('#psw').val();
  var reTypePassword = $('#pswRetype').val();

  fetch('/signUp', {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      username: email,
      email: email,
      password: password
    })
  }).then(function(response){
    return response.json();
  }).then(function(data){
    if(data.error){
      console.log('ERORRR!!!!!!!! ', data.message);
    }
    else {
      window.location.replace(data.url);
    }
  });
}

$('#submit').on('click', onSignUp);
