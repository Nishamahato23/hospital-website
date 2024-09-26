const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const btnPopup = document.querySelector(".btnLogin-popup");
const iconClose = document.querySelector(".icon-close");


const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");









registerLink.addEventListener("click", ()=> {
    wrapper.classList.add("active");
});

loginLink.addEventListener("click", ()=> {
    wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", ()=> {
    wrapper.classList.add("active-popup");
});

iconClose.addEventListener("click", ()=> {
    wrapper.classList.remove("active-popup");
});






form.addEventListener("submit", e =>{
    e.preventDefault();


    validateInputs();
});

const setError =(element,message) =>{
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText = message;
    inputcontrol.classList.add("error");
    inputcontrol.classList.remove("success");

}
const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText ="";
    inputControl.classList.add("success");
    inputControl.classList.remove("error");
};
const isValidEmail = email => {
    const re =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:s@"]+)|)(".+"))@((\[0-9{1-3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}




const validateInputs  =() => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
   // const password2Value = password2.value.trim();//


    if(usernameValue === " "){
        setError(username,"Username is required");
    }  else {
         setSuccess(username);
    }
    if(emailValue === ''){
        setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
        setError(email,"Provide a valid email address");
    } else {
        setSuccess(email);
    }
    if(passwordValue ===''){
        setError(password, "password is required");
    }
    else if (passwordValue.length <8){
        setError(password,"password must be at least of 8 Charcters.");
    } else {
        setSuccess(password);
    }

   
    
};







