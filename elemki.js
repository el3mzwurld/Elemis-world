let number ; 
let string = "HERES A FUN LITTLE GAME FOR YOU "
document.getElementById("random").onclick = function rand() { 

    number = Math.random();
    document.getElementById("game").innerHTML = number ; 
}
document.getElementById("reset").onclick = function res() {
    document.getElementById("game").innerHTML = string ;
}

