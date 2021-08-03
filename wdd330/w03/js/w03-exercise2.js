
if (!(document.getElementById("balloon").style.fontSize > 0)){
            document.getElementById("balloon").style.fontSize = '13px';
        }

window.addEventListener("keydown", event => {
    if (event.key == "ArrowUp") {
        document.getElementById("balloon").style.fontSize = (parseFloat(document.getElementById("balloon").style.fontSize) * 1.1) + "px";
        console.log("UP");
        console.log(document.getElementById("balloon").style.fontSize);
        event.preventDefault();
    }

    if (event.key == "ArrowDown") {
        document.getElementById("balloon").style.fontSize = (parseFloat(document.getElementById("balloon").style.fontSize) * 0.9) + "px";
        console.log("DOWN");
        console.log(document.getElementById("balloon").style.fontSize);
        event.preventDefault();
    }
}); 


