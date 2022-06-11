function showPassword(){
    const eye = document.getElementById('eye');
    const eyeClosed= document.getElementById('closed-eye');
    const fieldPassword= document.getElementById ('field-password')

    if(eye.style.display == 'none'){
        eye.style.display = 'block';
        eyeClosed.style.display = 'none';    
        fieldPassword.type='text';
    }else{
        eye.style.display = 'none';
        eyeClosed.style.display = 'block';    
        fieldPassword.type='password';
    }
};

document.getElementById('Login-Page').addEventListener('click',function(e){
    e.preventDefault();
    alert("Login realizado com sucesso!");
});