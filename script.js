// Smooth Scroll Navigation

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});

// Scroll Reveal

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},{threshold:0.15});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="all .8s ease";

observer.observe(section);

});
