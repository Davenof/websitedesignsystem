// Hamburger Menu Toggle
function mobileNavFunction() {
    var hamburger = document.getElementById("menu-items");
    if (hamburger.style.display === "block") {
      hamburger.style.display = "none";
    } else {
      hamburger.style.display = "block";
    }
}

// Shrink Header and Stick Sidenav on Scroll
window.onscroll = function() {
    shrinkStick()
};

function shrinkStick() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.fontSize = "10px";
    document.getElementById("header").style.marginTop = "0";
    document.getElementById("logo").style.visibility = "hidden";
    document.getElementById("author-designer").style.visibility = "hidden";
    document.getElementById("sidenav").style.position = "fixed";
    document.getElementById("sidenav").style.top = "130px";
    document.getElementById("content-area").style.paddingRight = "80px";
  } 
  
  else {
    document.getElementById("header").style.fontSize = "16px";
    document.getElementById("header").style.marginTop = "50px";
    document.getElementById("logo").style.visibility = "visible";
    document.getElementById("author-designer").style.visibility = "visible";
    document.getElementById("author-designer").style.fontSize = "16px";
    document.getElementById("sidenav").style.position = "static";
    document.getElementById("content-area").style.paddingRight = "0";
  }
}

// Highlight Sidenav Menu on Scroll

const sections = document.querySelectorAll("section");
const menuItems = document.querySelectorAll(".sidenav ul li");

window.addEventListener("scroll", ()=> {
    let current = "";

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        // const sectionHeight = (section - sectionHeight / 2).clientHeight;
        const sectionHeight = section.clientHeight;
 
        if(scrollY >= sectionTop) {
            current = section.getAttribute("Id");
        }
    })
    
    menuItems.forEach( li => {
        li.classList.remove("active");

        if (li.classList.contains(current)) {
            li.classList.add("active")
        }
    })
})



