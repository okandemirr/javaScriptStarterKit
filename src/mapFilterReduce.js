let cart = [
    {id:1,productName:"Telefon",quantity:3,unitPrice:4000},
    {id:1,productName:"Bardak",quantity:2,unitPrice:30},
    {id:1,productName:"Kalem",quantity:3,unitPrice:20},
    {id:1,productName:"Şarj Cihazı",quantity:1,unitPrice:100},
    {id:1,productName:"Kitap",quantity:5,unitPrice:30},
    {id:1,productName:"Pot",quantity:5,unitPrice:150},
]


/* Cart içindeki arrayı sıralamak */ 
console.log("<ul>")
cart.map(product=>{
    console.log("<li>"+product.productName + " : " + product.unitPrice * product.quantity + "</li>")
})
console.log("</ul>")

let total = cart.reduce((acc,product)=>acc+ product.unitPrice * product.quantity,0)


console.log(total)





/* cart içindeki quantity si 2 den büyük olan ürünleri  quantityOver2 nin içine yazdırmak*/
let quantityOver2 = cart.filter(product=>product.quantity>2)
console.log(quantityOver2)




function addToCart(sepet) {
    sepet.push({id:7,productName:"Ruhsat",quantity:1,unitPrice:20})
}

addToCart(cart)

console.log(cart)


let sayi =10

function sayiTopla(number) {
    number += 1
}
sayiTopla(sayi)

console.log(sayi)