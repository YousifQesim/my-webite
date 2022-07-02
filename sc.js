var typed = new Typed('.auto', {
    strings: ["Front end web developer","UI/UX designer","Junior database administrator","Social media manager"],
    typeSpeed:90,
    backSpeed:50,
    loop:true
  });
let toggle=document.getElementById("toggle");
let for_res=document.getElementById("for_res");
let navbar=document.getElementById("navbar");
let bar1=document.getElementById("bar1");
let bar2=document.getElementById("bar2");
let bar3=document.getElementById("bar3");
function press() {
  if (for_res.classList.contains("active")) {
   
    for_res.classList.remove("active");
    navbar.style.display="none";
    toggle.classList.remove("toggle-changer");
   
   

  }
  else{
    toggle.classList.add("toggle-changer");
    for_res.classList.add("active");
    for_res.style.width="50vw";
    navbar.style.display="block";
  }
  
}
