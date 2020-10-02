let num = parseInt(window.prompt("Escribe un número"))
let div1 = document.getElementById("div1")
if (num < 100) {
    div1.style.color = "green"
} else if (num >= 100 && num < 200) {
    div1.style.color = "yellow"
} else if (num > 200) {
    div1.style.color = "red"
}
div1.innerHTML = num