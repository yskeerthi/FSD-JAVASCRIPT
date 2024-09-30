// let x = document.querySelector("h1");
// setTimeout(function(){
//     x.innerHTML="pobey bewakoof!"
// },2000);
// console.log(x);
let x=document.getElementById("pika");
// x.style.color="yellow";
// x.style.backgroundColor="red";
x.addEventListener("click",function()
{
    x.style.color="yellow";
    x.style.backgroundColor="red";
})
let y=document.getElementById("cute");
y.addEventListener("mousemove",function()
{
    y.style.color="blue";
    y.style.backgroundColor="yellow";
})
let z = document.getElementById("meow");

// Handle mouseenter
z.addEventListener("mouseenter", function() {
    z.style.color = "white";
    z.style.backgroundColor = "black";
});

// Handle mouseleave
z.addEventListener("mouseleave", function() {
    z.style.color = "red";
    z.style.backgroundColor = "purple";
});
