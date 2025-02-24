import products from "./DB/database.js";

let searchProduct = document.getElementById('search');
let searchButton = document.getElementById('search-button');
let part = document.getElementById('part');
let productDiv = document.getElementById('products');
 
//displays all product on landing page
let display = products.forEach(item=>{
  productDisplay(item)
})


//search bar functionality
searchProduct.addEventListener('change', (e)=>{
  let search = searchProduct.value.toLowerCase()
  productDiv.innerHTML="";
  products.forEach(item=>{
    if(search.includes(item.category)){
      productDisplay(item)
      part.classList.add('hidden')
      
    }else if (search==="") {
      part.classList.remove('hidden')
      location.href="./HomePage.html"
    }
  })
  
});

//search button
searchButton.addEventListener('click', (e)=>{
   productDisplay()
})

//product display
function productDisplay(params) {
  function length() {
    return params.description.length > 25 ? `${params.description.slice(0, 25 )}......` : params.description
  }

  let product = document.createElement('div')
  product.className="loadedProducts";
  product.innerHTML+=`<img class="productImg" src=${params.directory}>
                      <div class="rest">
                        <span class="describe">${length()}</span>
                        <span class="rating">Rating: ${params.ranking}</span><br>
                        <span class="name">${params.name}</span>
                        <span class="price">$${params.price.toFixed(2)}</span>
                      </div>`;

productDiv.appendChild(product) 

  product.addEventListener('click', (event)=>{
  let product_describtion = document.getElementById('product-description');
      product_describtion.style.display="block";
      product_describtion.innerHTML= `<img src=${params.directory} class="Img"><br>
                                        <span id="price">$${params.price} </span>
                                        <img src="./icons/Close.png" id="back">
                                        <span>${params.description}</span><br>
                                        <span id="totalprice">${params.price}</span>
                                        <button id="decrease">-</button>
                                          <input id="quantity" value=${params.quantity} readonly> 
                                        <button id="increase">+</button>
                                        <button id="addto-cart">
                                        <img src="./icons/Cart 4.png" class="cart">
                                        Add to cart
                                        </button>
                                        <button id="buy">
                                        Buy
                                        </button>`;
  
    document.getElementById('increase').addEventListener('click', ()=>increase(params.price))
    document.getElementById('decrease').addEventListener('click', ()=>decrease(params.price))
    document.getElementsByTagName('main')[0].style.overflowY="hidden"

  let cartButton = document.getElementById('addto-cart')
  let back = document.getElementById('back');
      cartButton.addEventListener('click', event=>cart(params));
      back.addEventListener('click', e=> product_describtion.style.display="none");

  })
};
  



function increase(e) {
  let quantity = document.getElementById('quantity').value++;
  document.getElementById("totalprice").innerHTML= e * (quantity + 1)
}

function decrease(e) {
  let quantityInput = document.getElementById('quantity')
  if (quantityInput.value > 1) {
    let quantity = quantityInput.value--;
    document.getElementById("totalprice").innerHTML= e * (quantity-1 )
  } else {
    return
  }
}
  
  


function cart(p) {
  
  let cart = JSON.parse(localStorage.getItem('cart'))
  if (!cart) {
    cartSave(p)
  } else if(cart){
    cart.forEach(element => {
      if (element.name === p.name) {
        return alert(element.name + " already added to cart")
        
      } else if(element.name !== p.name) {
        return cartSave(p)
      }
    })
  }
  
  
}


function cartSave(a) {
  let confirm = document.getElementById('confirm')
  confirm.style.display="block";
  confirm.innerHTML=`<div id="confirm-addto-cart">
                    <span>Do you want to add ${a.name} to cart?</span><br>
                    <button id="cancel">cancel</button>
                    <button id="accept">okay</button>
                   </div>`
          
            let cancel = document.getElementById('cancel')
            cancel.addEventListener('click', e=>confirm.style.display="none")

            let accept = document.getElementById('accept')

            
            accept.addEventListener('click', e=>{
              let quant = document.getElementById('quantity').value
              let product = JSON.parse(localStorage.getItem('cart')) || []
              product.quantity=quant
              product.push(a)
              localStorage.setItem('cart', JSON.stringify(product) )
              alert(`${quant} ${a.name} added to cart`)
              confirm.style.display="none";

            })  
}

let userName = JSON.parse(localStorage.getItem('user data'))

document.getElementById('user-name').innerHTML=`User: ${userName.FirstName}, ${userName.LastName}`