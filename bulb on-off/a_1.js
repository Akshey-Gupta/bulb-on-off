var bb=document.querySelector('#bulb');
console.log(bb.src);
var button=document.querySelector('#button');
button.addEventListener('click',function(){
    if(bb.src.match("off")){
        bb.src="./on bulb.jpg";
        button.innerHTML='bulb on';
    }else{
        bb.src="./off bulb.jpg";
        button.innerHTML='bulb off';
    }
});