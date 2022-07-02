var typed = new Typed('.auto', {
    strings: ["Front end web developer","UI/UX designer","Junior database administrator","Social media manager"],
    typeSpeed:90,
    backSpeed:50,
    loop:true
  });
let toggle=document.getElementById("toggle");
let for_res=document.getElementById("for_res");
let navbar=document.getElementById("navbar");
function press() {
  if (for_res.classList.contains("active")) {
   
    for_res.classList.remove("active");
    navbar.style.display="none";
    
   

  }
  else{
    for_res.classList.add("active");
    for_res.style.width="30vw";
    navbar.style.display="block";
  }
  
}
