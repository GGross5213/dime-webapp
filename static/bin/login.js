var onLogin = function(){
  var email = $('#email').val();
  var psw = $('#psw').val();

  if(email != null && psw != null){
    fetch('/login', {
      method: 'POST',
      headers: {
        'credentials': 'include'
      },
      body: JSON.stringify({
        username: email,
        password: psw
      })
    }).then(function(response){
      return response.json();
    }).then(function(data){
      if(data.error){
        console.log('Error!!!!! ', data.message);
      }
      else {
        window.location.replace(data.url)
      }
    })
  }
}

$('#submit').on('click', onLogin);
