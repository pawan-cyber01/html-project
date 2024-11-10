function validateEmail(){
    const email = document.getElementById("email").value;
    const emailInput = document.getElementById("email");
    const emailMessage = document.getElementById("emailMessage");
    const emailPattern = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(email.Pattern.test(email)){
        emailInput.style.borderColor = "green";
        emailMessage.textContent = "Valid email";
        emailMessage.style.color = "green";
        return true;
    }
    else{
        emailInput.style.borderColor = "red";
        emailMessage.textContent.Content = "Enter a valid email address" ;
        emailMessage.style.color = "red";
        return false;

    }
    
}
function validatePassword(){
    const password = document.getElementById("password").value;
    const passwordInput = document.getElementById("password");
    const passwordMessage = document.getElementById("passwordMessage");
    if(password.length >= 6){
        passwordInput.style.borderColor = "green";
        passwordMessage.textContent = "Strong password";
        passwordMessage.style.color = "green";
        return true;
    }
    else{
        passwordInput.style.borderColor = "red";
        passwordMessage.textContent.Content = "password should be atleast of 6 characters" ;
        passwordMessage.style.color = "red";
        return false;

    }
}
document.getElementById("myform").addEventListener("submit", function(event){
    const isvalidName = validateName();
    const isvalidEmail = validateEmail();
    const isvalidPassword = validatePassword();
    if(!isvalidName || !isvalidEmail || !isvalidPassword){
        event.preventDefault();

    }
});