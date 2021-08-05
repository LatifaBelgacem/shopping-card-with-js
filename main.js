// like button
var likes=document.getElementsByClassName("like")
console.log(likes)
for(let i=0 ;i<likes.length;i++){
let colors=likes[i]
colors.addEventListener('click',function(){
    if (colors.style.color !== 'red'){
        colors.style.color='red'
    }else{colors.style.color='black'}
})  
}
// delete button
var remove=document.getElementsByClassName("delete")
for(let i=0;i<remove.length;i++){
    let delet=remove[i]
    delet.addEventListener('click',function(){
      var parent=this.parentNode
      parent.remove()  
    })
}
//button+
var btn=document.getElementsByClassName("plus-btn")
for(let i=0;i<btn.length;i++){
let bt=btn[i]
bt.addEventListener('click',function(){
bt.previousElementSibling.value++
price1();
price2();
price3();
  totalprice() 
})    
}
//button-
var btm=document.getElementsByClassName("minus-btn")
for(let i=0;i<btm.length;i++){
let bt=btm[i]
bt.addEventListener('click',function(){
  if(bt.nextElementSibling.value>0) {
    bt.nextElementSibling.value--;
    price1();
    price2();
    price3();
    totalprice()
  } 
})    
}
// item price
function price1(){
  let price = document.getElementById('p1')
  let quant1 = document.getElementById('q1')
  price.innerHTML= 1379.000*quant1.value; 
}
function price2(){
  let price = document.getElementById('p2')
  let quant1 = document.getElementById('q2')
  price.innerHTML= 176.000*quant1.value;
}
function price3(){
  let price = document.getElementById('p3')
  let quant1 = document.getElementById('q3')
  price.innerHTML= 249.000*quant1.value; 
}

// total price
function totalprice(){
var items=document.getElementsByClassName("Item")
var total=0
for(let i=0;i<items.length;i++){
    var price=items[i].querySelector(".price")
    var qt=items[i].querySelector(".Quant")
    total+=price.innerHTML*qt.value
}
document.getElementById("finalPrice").value=total
}