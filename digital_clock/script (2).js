function time(){
    var x=new Date();
    document.getElementsByClassName('hours')[0].innerHTML=x.getHours();
    document.getElementsByClassName('minutes')[0].innerHTML=x.getMinutes();
    document.getElementsByClassName('seconds')[0].innerHTML=x.getSeconds();
    if(x.getSeconds() == 55){
        console.log(x.getSeconds());
        clearInterval(address)
    }
}
var address=setInterval(time,1000);

