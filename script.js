var bar=document.getElementById('bar')
var nav=document.getElementById('navbar')
var close=document.getElementById('close')
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}

var mainImg=document.getElementById("mainimg")
var smallImg=document.getElementsByClassName("small-img")
smallImg[0].onclick=function(){
    mainImg.src=smallImg[0].src;
}
smallImg[1].onclick=function(){
    mainImg.src=smallImg[1].src;
}
smallImg[2].onclick=function(){
    mainImg.src=smallImg[2].src;
}
smallImg[3].onclick=function(){
    mainImg.src=smallImg[3].src;
}