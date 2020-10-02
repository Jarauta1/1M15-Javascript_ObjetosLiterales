let persona = {
    nombre: "Diego",
    edad: 33
}

document.getElementById("div1").innerHTML = `
<p>Nombre: ${persona.nombre}</p>
<p>Edad: ${persona.edad}</p>
`
console.log(`Nombre: ${persona.nombre}`)
console.log(`Edad: ${persona.edad} años`)


persona.altura = parseInt(window.prompt("altura"))

document.getElementById("div1").innerHTML = `
<p>Nombre: ${persona.nombre}</p>
<p>Edad: ${persona.edad} años</p>
<p>Altura: ${persona.altura} cm</p>
`
console.log(`Nombre: ${persona.nombre}`)
console.log(`Edad: ${persona.edad} años`)
console.log(`Altura: ${persona.altura} cm`)