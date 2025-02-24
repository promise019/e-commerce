let signupForm = document.getElementById("signup-form")
let login_form =  document.getElementById("login-form")

let progress_fail = document.getElementById("progress-fail")

let signup_submit = document.getElementById("signup-submit")
let login = document.getElementById("login")

login.addEventListener('click', e=>{
    e.preventDefault()

    signup_form.style.display="none";
    login_form.style.display="block";
    document.getElementsByTagName('title')[0].textContent="login"; 
})

signup_submit.addEventListener('click', e=>{
    e.preventDefault()

    let signup_email = document.getElementById("signup-email").value
    let firstName = document.getElementById("first-name").value
    let lastName = document.getElementById("last-name").value
    let signup_password = document.getElementById("signup-password").value

    const data = {
        Email : signup_email,
        Password : signup_password,
        FirstName : firstName,
        LastName : lastName
    }

    if(lastName && firstName && signup_email && signup_password === ""){
        document.getElementById("last-name").style.border="1px solid red";
        document.getElementById("first-name").style.border="1px solid red";
        document.getElementById("signup-password").style.border="1px solid red";
        document.getElementById("signup-email").style.border="1px solid red";

    } else if (signup_email === "") {
        progress_fail.innerText="please input email";
        progress_fail.style.backgroundColor="red";
        progress_fail.style.color="white"
        document.getElementById("signup-email").style.border="1px solid red";
        document.getElementById("signup-password").style.border="";
        document.getElementById("last-name").style.border="";
        document.getElementById("first-name").style.border="";
        
    } else if (signup_password === "") {
        progress_fail.innerText="please input password";
        progress_fail.style.backgroundColor="red";
        progress_fail.style.color="white"
        document.getElementById("signup-password").style.border="1px solid red";
        document.getElementById("signup-email").style.border="";
        document.getElementById("last-name").style.border="";
        document.getElementById("first-name").style.border="";

    } else if (lastName && firstName === "") {
        progress_fail.innerText="please input password";
        progress_fail.style.backgroundColor="red";
        progress_fail.style.color="white"
        document.getElementById("last-name").style.border="1px solid red";
        document.getElementById("first-name").style.border="1px solid red";
        document.getElementById("signup-email").style.border="";
        document.getElementById("signup-password").style.border="";

    } else if (signup_password.length < 6) {
        progressFail.innerHTML="password must be more than 6 characters";
        progressFail.style.backgroundColor="red";
        progressFail.style.color="white"
        document.getElementById("password").style.border="1px solid red";
        document.getElementById("email").style.border=""
    } else {
        let promise = new Promise((resolve, reject) => {
            let saveData = localStorage.setItem('user data', JSON.stringify(data))
            setTimeout(()=> {check = localStorage.getItem('user data')
                check ? resolve('account successfully created') : reject('error creating account')
                    setTimeout(()=>{progress_fail.innerHTML=""
                        location.href="signup.html"
                    }, 5000)
                }, 2000)
            
                
        })
        promise.then(response=>{progress_fail.innerHTML=response
            progress_fail.style.background="green";
            progress_fail.style.color=="white"
        })
               .catch(err=>progress_fail.innerHTML=err)
    }

    

           
    
})

