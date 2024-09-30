
let x=document.getElementById("i1");
x.addEventListener("mouseenter",function()
{
    let rn=Math.floor(Math.random()*101);
    x.innerHTML=rn;
    x.style.backgroundColor="yellow"
})
x.addEventListener("mouseleave",function()
{
    x.style.backgroundColor="blue";
})
let y=document.getElementById("i2");
let clr="green";
y.addEventListener("mouseenter",function()
{
    if(clr=="green")
    {
        y.style.backgroundColor="green";
        clr="red";
    }
    else if(clr=="red")
    {
        y.style.backgroundColor="red";
        clr="blue";
    }
    else{
        y.style.backgroundColor="red";
        clr="green";
    }
})
y.addEventListener("mouseleave",function()
{
    y.style.backgroundColor="white";
})
let z=document.getElementById("i3");
z.addEventListener("mouseenter",function()
{
    let r1=Math.floor(Math.random()*101);
    let r2=Math.floor(Math.random()*101);
    let r3=Math.floor(Math.random()*101);
    z.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})
z.addEventListener("mouseleave",function()
{
    z.style.backgroundColor="white";
})
let a=document.getElementById("i4");
a.addEventListener("mouseenter",function()
{
    let r1=Math.floor(Math.random()*101);
    let r2=Math.floor(Math.random()*101);
    let r3=Math.floor(Math.random()*101);
    x.style.backgroundColor=`rgb(${r1},255,255)`;
    y.style.backgroundColor=`rgb(255,${r2},255)`;
    z.style.backgroundColor=`rgb(${r1},255,${r3})`;


})
a.addEventListener("mouseleave",function()
{
    let r1=Math.floor(Math.random()*101);
    let r2=Math.floor(Math.random()*101);
    let r3=Math.floor(Math.random()*101);
    x.style.backgroundColor=`rgb(${r1},255,${r3}`;
    y.style.backgroundColor=`rgb(${r1},255,255)`;
    z.style.backgroundColor=`rgb(${r1},${r2},255)`;


})
