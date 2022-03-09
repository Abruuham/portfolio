var item = document.getElementById("fancy-card-1");
var item2 = document.getElementById("card-title");

item.onmouseenter = function(){
    // console.log('hello');
    item2.style.cssText = "color: var(--clr-primary); transition: color 350ms ease;";
    // this.classList.add('hovered');
}

item.onmouseleave = function(){
    item.style.cssText = "";
    // this.classList.remove('hovered');
}