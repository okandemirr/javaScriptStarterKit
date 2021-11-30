
// let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
//     {name:"İç Anadolu", population:"20M"},
//     {name:"Marmara", population:"30M"},
//     {name:"Karadeniz", population:"10M"},
//     [
//         ["Ankara","Konya"],
//         ["İstanbul","Bursa"],
//         ["Sinop","Trabzon"],
//     ]
// ]

// // console.log(icAnadolu.name)
// // console.log(icAnadolu.population)
// console.log(icAnadoluSehirleri)

// let newProductName, newUnitPrice, newQuantity
// ({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity } 
// = {productName:"Elma", unitPrice:10, quantity:5})

// console.log(newProductName)
// console.log(newUnitPrice)
// console.log(newQuantity)

function adToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi : " + productName + " adet : " +quantity)
}
// adToCart();
adToCart(10);
// adToCart(15);

let sayHello = () =>{
    console.log("Hello")
}
sayHello();

let sayHello2 = function () {
    console.log("Hello World ! ");
}
sayHello2()

function addToCart2(productName,quantity,unitPrice) {
   // console.log(addToCart2)
}
addToCart2("Elma",5,20)
addToCart2("Armut",2,10)
addToCart2("Limon",3,15)


let product1 = {productName:"Elma",unitPrice:10,quantity:5}
function adTooCart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}
adTooCart3(product1)

let product2 = {productName:"Armut",unitPrice:20,quantity:100}
let product3 = {productName:"Portakal",unitPrice:15,quantity:400}
product2 = product3
product2.productName="Karpuz"
console.log(product3.productName)


function addToCart4(products) {
    console.log(products)
}
let products = [
    {productName:"Elma", unitPrice:10, quantity:4},
    {productName:"Armut", unitPrice:15, quantity:7},
    {productName:"Kiraz", unitPrice:20, quantity:12}
]
addToCart4(products)

function add(...numbers) { // Bir değişkenin önüne üç nokta yazarsak rest operatörü kullanmış oluruz.
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    console.log(total)
}
add(20,30)
add(30,30,10)
add(40,30,10,20)
add(50,30,10,20,30)



let numbers = [30,10,600,500,120]
//console.log(...numbers)
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri] ]= [
    {name:"İç Anadolu", population : "20M"},
    {name:"Marmara", population : "30M"},
    {name:"İç Anadolu", population : "10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Samsun","Sinop"]
    ]
]
console.log(icAnadolu.name)
console.log(icAnadolu.population)

console.log(icAnadoluSehirleri)


let newProductName,newUnitPrice, newQuantity
({productName:newProductName,unitPrice:newUnitPrice, quantity:newQuantity} =  {productName:"Kayısı",unitPrice:22 ,quantity:5})

console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)


