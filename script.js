let x;
let y;
document.getElementById("roll").onclick = function() {
    x = Math.floor(Math.random()*10)+1;
    y = Math.floor(Math.random()*10)+1;
    document.getElementById("numer1").innerHTML = x;
    document.getElementById("numer2").innerHTML = y;
    if ( x== y) {
        document.getElementById("numer1").style.color = "green";
        document.getElementById("numer2").style.color = "green";
    } else {
        document.getElementById("numer1").style.color = "red";
        document.getElementById("numer2").style.color = "red";

    }
}