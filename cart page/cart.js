let main = document.getElementsByTagName('main')[0]
let back = document.getElementById('back');
let carts = JSON.parse(localStorage.getItem('cart'))


back.addEventListener('click', e=>{
    window.history.back()
})


// for (let products of carts) {
//     main.innerHTML += `<div class="cart-container">
//                             <img src=.${products.directory} id="img">
//                             <span id="price">price: $${products.price}</span>
//                                 <div id="text">
//                                     <span>${products.name}</span>
//                                 </div>
//                                 <div id="rest">
//                                 Total Price: $<span id="totalprice">${products.price * products.quantity}</span><br>
//                                 <button class="decrease">-</button>
//                                 <input value=${products.quantity} id="quantity" min="1">
//                                 <button class="increase">+</button><br>
//                                 <button class="remove">Remove</button>
//                                 <button class="buy">Buy</button>
//                                 </div>
//                        </div>`
//         let incre = document.getElementsByClassName('increase')
//         let decre = document.getElementsByClassName('decrease')
//         for (let i= 0; i < incre.length; i++) {
//            incre[i].addEventListener('click', ()=>increase(products.price))
//            decre[i].addEventListener('click', ()=>decrease(products.price))
//         }
// }

// function increase(e) {
//     let quantity = document.getElementById('quantity').value++;
//     document.getElementById("totalprice").innerHTML= e * (quantity + 1)
//   }
  
//   function decrease(e) {
//     let quantityInput = document.getElementById('quantity')
//     if (quantityInput.value > 1) {
//       let quantity = quantityInput.value--;
//       document.getElementById("totalprice").innerHTML= e * (quantity-1 )
//     } else {
//       return
//     }
//   }

// let remove = document.getElementsByClassName('remove')

// for (let i = 0; i < remove.length; i++) {
//     remove[i].addEventListener('click', event=>{
        
//         remove[i].parentElement.remove()
        
//         location.href="cartPage.html";
//         let current = JSON.parse(localStorage.getItem('cart'));
//         let p = current.splice(i, 1)
//         localStorage.setItem('cart', JSON.stringify(current))

        
//     })
// }


for (let i = 0; i < carts.length; i++) {
    let products = carts[i];

    main.innerHTML += `<div class="cart-container">
                            <img src=".${products.directory}" class="cart-img">
                            <span class="price">Price: $${products.price}</span>
                            <div class="text">
                                <span>${products.name}</span>
                            </div>
                            <div class="rest">
                                Total Price: $<span class="totalprice">${products.price * products.quantity}</span><br>
                                <button class="decrease" data-index="${i}">-</button>
                                <input value="${products.quantity}" class="quantity" data-index="${i}" min="1">
                                <button class="increase" data-index="${i}">+</button><br>
                                <button class="remove" data-index="${i}">Remove</button>
                                <button class="buy">Buy</button>
                            </div>
                       </div>`;
}

// Event delegation for increase and decrease buttons
document.addEventListener("click", function (event) {
    if (event.target.classList.contains("increase")) {
        let index = event.target.getAttribute("data-index");
        let quantityInput = document.querySelectorAll(".quantity")[index];
        let totalPriceElement = document.querySelectorAll(".totalprice")[index];

        let quantity = parseInt(quantityInput.value) + 1;
        quantityInput.value = quantity;
        totalPriceElement.innerHTML = carts[index].price * quantity;
    }

    if (event.target.classList.contains("decrease")) {
        let index = event.target.getAttribute("data-index");
        let quantityInput = document.querySelectorAll(".quantity")[index];
        let totalPriceElement = document.querySelectorAll(".totalprice")[index];

        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantity -= 1;
            quantityInput.value = quantity;
            totalPriceElement.innerHTML = carts[index].price * quantity;
        }
    }

    if (event.target.classList.contains("remove")) {
        let index = event.target.getAttribute("data-index");

        // Remove from DOM
        event.target.closest(".cart-container").remove();

        // Remove from Local Storage
        let current = JSON.parse(localStorage.getItem("cart")) || [];
        current.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(current));
    }
});
