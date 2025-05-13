document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
    const formTitle = document.getElementById("form-title");
    const switchToSignup = document.getElementById("switchToSignup");
    const switchToLogin = document.getElementById("switchToLogin");

    // Switch to Signup
    switchToSignup.addEventListener("click", (e) => {
        e.preventDefault();
        loginForm.classList.add("hidden");
        signupForm.classList.remove("hidden");
        formTitle.innerText = "Sign Up";
    });

    // Switch back to Login
    switchToLogin.addEventListener("click", (e) => {
        e.preventDefault();
        signupForm.classList.add("hidden");
        loginForm.classList.remove("hidden");
        formTitle.innerText = "Login";
    });
   loginForm.addEventListener("submit",(e)=>{
         e.preventDefault();
         const email = document.getElementById("email").value;
         const password =document.getElementById("password").value;
         if(email && password){
            alert("Login is done....it is redirecting to the dasbord page");
            window.location.href = "dashbord.html";
         }
            else {
                alert("Login failed!!!");
            }
    });
    signupForm.addEventListener("submit",(e)=>{
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("signuppemail").value;
        const password = document.getElementById("signuppassword").value;
        if( name && email && password){
            alert("Sign up is done....it is redirecting to the welcome page");
            window.location.href = "Welcome.html";
        }else{
            alert("Sign Up failed!!!");
        }
    });
});
