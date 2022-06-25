var spann=document.getElementById("span");
var ss="I am front end web developer";

counter=1;
let namer = () => {
    
    spann.innerText=ss.slice(0,counter);
    spann.style.transition=`all 0.4s`;
counter++;
if(counter>ss.length){
    clearInterval(set);
}
}

   
    const set=setInterval(namer, 120);