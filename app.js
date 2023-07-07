var x = 0



function addToCart (val){


let x =  document.getElementById("hello").innerHTML = "<li>" + val + "</li>"

 console.log(x)

}















































// Fetch the data

async function getData(){

let card = document.querySelectorAll('.card')


let responce = await fetch("https://dummyjson.com/products")
let data = await responce.json()

 card.forEach( (element , i)  => {


 element.getElementsByTagName("img")[0].src = data.products[i].images[0]
 element.getElementsByTagName("span")[0].innerHTML = data.products[i].title
 element.getElementsByTagName("p")[0].innerHTML= data.products[i].description.slice(0,10)
  

 })

}

getData() 