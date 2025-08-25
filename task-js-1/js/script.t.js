var allproducts=document.querySelectorAll(".products li")
var div=document.querySelector("#content")
var btn=document.querySelector("#btn")
var totalprice=0

allproducts.forEach(function(item){
    
   item.onclick = function(){
     div.innerHTML += item.textContent +" "
     if(div.innerHTML !=""){
        btn.style.display="block"
     }
     totalprice += Number(item.getAttribute("price"))

   }
})

btn.onclick=function(){
    console.log(totalprice)
}