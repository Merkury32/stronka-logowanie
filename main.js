const myForm = document.getElementById('form-login')

myForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const formData =  new FormData (this);

    fetch('https://www.example.com',{
        method: 'get',
    }).then(function(response){
        return response.text();
    }).then(function(text){
        console.log(text);
    }).catch(function(error){
        console.error(error);
    })
});