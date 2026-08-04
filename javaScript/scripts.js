function login() {
    const email = document.getElementById("email").value
    const password = document.getElementById("pass").value
    const error = document.getElementById("error")

    

if(email === "abc@gmail.com" && password === "123456") {
    localStorage.setItem("isLoggedIn","true")
    localStorage.setItem("user",email)
    
    window.location.href= "index.html";
}
else {
    error.innerText="Invalid email or Password";
}
}

function togglePassword() {
    const password = document.getElementById("pass");
    console.log(password);

    const icon = document.getElementById("togglePassword");
    console.log(icon);

    if(password.type === "password"){
        password.type= "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    }
    else {
        password.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye")
    }
}
