let main = document.getElementsByTagName('main')[0]
let back = document.getElementById('back');
let carts = JSON.parse(localStorage.getItem('cart'))


back.addEventListener('click', e=>{
    window.history.back()
})


for (let products of carts) {
    main.innerHTML += `<div class="cart-container">
                            <img src=${products.directory} id="cart">
                            <div id="rest">
                                <div id="text">
                                    <span>${products.description}</span>
                                </div>
                                <button class="remove">Remove</button>
                                <button class="buy">Buy</button>
                            </div>
                       </div>`
}

let remove = document.getElementsByClassName('remove')

for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', event=>{
        
        remove[i].parentElement.remove()
        
        location.href="cartPage.html";
        let current = JSON.parse(localStorage.getItem('cart'));
        let p = current.splice(i, 1)
        localStorage.setItem('cart', JSON.stringify(current))

        
    })
}


