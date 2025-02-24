let menu_button = document.getElementById('Menu');
let login_button = document.getElementById("login");
let close = document.getElementById('close')

let Menu = document.getElementsByClassName('menu')[0]


menu_button.addEventListener('click', (e)=>{
    Menu.style.display= "block"
})

close.addEventListener('click', (e)=>{
    Menu.style.display= "none"
})