let inicio = prompt("Diga A");
inicio = "a";
console.log("BASTA!")

function numeroAleatorio() { return Math.floor(Math.random() * 26) + 1; }

function mezclarLetras() {
    if (numeroAleatorio() == 1) {
        alert("A");
    }
    else if (numeroAleatorio() == 2) {
        alert("B")
    }
    else if (numeroAleatorio() == 3) {
        alert("C")
    }
    else if (numeroAleatorio() == 4) {
        alert("D")
    }
    else if (numeroAleatorio() == 5) {
        alert("F")
    }
    else if (numeroAleatorio() == 6) {
        alert("G")
    }
    else if (numeroAleatorio() == 7) {
        alert("H")
    }
    else if (numeroAleatorio() == 8) {
        alert("I")
    }
    else if (numeroAleatorio() == 9) {
        alert("J")
    }
    else if (numeroAleatorio() == 10) {
        alert("K")
    }
    else if (numeroAleatorio() == 11) {
        alert("L")
    }
    else if (numeroAleatorio() == 12) {
        alert("M")
    }
    else if (numeroAleatorio() == 13) {
        alert("N")
    } else if (numeroAleatorio() == 14) {
        alert("O")
    }
    else if (numeroAleatorio() == 16) {
        alert("P")
    }
    else if (numeroAleatorio() == 17) {
        alert("Q")
    }
    else if (numeroAleatorio() == 18) {
        alert("R")
    }
    else if (numeroAleatorio() == 19) {
        alert("S")
    }
    else if (numeroAleatorio() == 20) {
        alert("T")
    }
    else if (numeroAleatorio() == 21) {
        alert("U")
    }
    else if (numeroAleatorio() == 22) {
        alert("V")
    }
    else if (numeroAleatorio() == 23) {
        alert("W")
    }
    else if (numeroAleatorio() == 24) {
        alert("X")
    }
    else if (numeroAleatorio() == 25) {
        alert("Y")
    }
    else if (numeroAleatorio() == 26) {
        alert("Z")
    }
}

mezclarLetras()

while (confirm("A de nuevo")) {
    mezclarLetras();
}

