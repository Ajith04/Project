let offCanvas = document.getElementById("offCanvas");
let menu1 = document.getElementById('menu1');
let menu2 = document.getElementById("menu2");
let container = document.getElementById("container");
let itec = document.getElementById("itec");

menu1.onclick = function(){
    offCanvas.style.display = "none";
    container.style.width = "100%";
    menu2.style.display = "block";
    itec.innerText = "Information Technology Education Centre";
}

menu2.onclick = function(){
    offCanvas.style.display = "block";
    container.style.width = "75%";
    menu2.style.display = "none";
    itec.innerText = "ITEC";
    offCanvas.style.position = "absolute";
    offCanvas.style.top = "0";
    offCanvas.style.animation = "ease";
    offCanvas.style.transition = "2s";
}


        
        




