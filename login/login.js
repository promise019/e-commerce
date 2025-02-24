let loginForm =  document.getElementById("login-form")
let progressFail = document.getElementById("progress-fail")
let submit = document.getElementById("submit")
let signup = document.getElementById("signup")
let signup_form = document.getElementById('signup-form')

signup.addEventListener('click', e=>{
    e.preventDefault()

    login_form.style.display="none";
    signup_form.style.display="block";
    document.getElementsByTagName('title')[0].textContent="signup"; 
})


submit.addEventListener('click', e=>{
    e.preventDefault();

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    const logins ={
        Email : email,
        Password : password
    }

    if (email == "") {
        progressFail.innerHTML="please input email";
        progressFail.style.backgroundColor="red";
        progressFail.style.color="white"
        document.getElementById("email").style.border="1px solid red";

    } else  if (password == ""){
        progressFail.innerHTML="please input password";
        progressFail.style.backgroundColor="red";
        progressFail.style.color="white"
        document.getElementById("password").style.border="1px solid red";
        document.getElementById("email").style.border=""

    } else if (email && password == ""){
        progressFail.innerHTML="please fill in the form";
        progressFail.style.backgroundColor="red";
        progressFail.style.color="white"
        
    } else{
        localStorage.setItem('logins', JSON.stringify(logins))
        

        let user_data = JSON.parse(localStorage.getItem('user data'))
        let login_data = JSON.parse(localStorage.getItem('logins'))

        setTimeout(()=>{
            switch (user_data.Email === login_data.Email && user_data.Password === login_data.Password) {
                case true:
                    progressFail.innerHTML="login successfull"
                    progressFail.style.backgroundColor="green";
                    progressFail.style.color="white"
                    document.getElementsByClassName('load')[0].style.display="block"
                    setTimeout(()=>location.href="../HomePage.html", 5000)
                    break;
            
                case false:
                    progressFail.innerHTML="incorrect password or gmail";
                    progressFail.style.backgroundColor="red";
                    progressFail.style.color="white"
                    break;
            }
        }, 5000)
    }
    


    
})