let sistemaSolar = {

	mercurio: {
		nombre: 'mercurio',
		color: 'gris',
		temperatura: 350,
		imagen: 'https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg'

	},
	venus: {
		nombre: 'venus',
		color: 'blanco',
		temperatura: 460,
		imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg'

	},
	tierra: {
		nombre: 'tierra',
		color: 'morado',
		temperatura: 14,
		imagen: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg'
	},
	marte: {
		nombre: 'marte',
		color: 'rojo',
		temperatura: -46,
		imagen: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg'
	},
	jupiter: {
		nombre: 'jupiter',
		color: 'marrón',
		temperatura: -121,
		imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg'
	},
	saturno: {
		nombre: 'saturno',
		color: 'amarillo',
		temperatura: -130,
		imagen: 'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg'
	},
	urano: {
		nombre: 'urano',
		color: 'azul',
		temperatura: -205,
		imagen: 'http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg'
	},
	neptuno: {
		nombre: 'neptuno',
		color: 'azul',
		temperatura: -220,
		imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg'
	},
	pluton: {
		nombre: 'plutón',
		color: 'blanco',
		temperatura: -229,
		imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg'
	}

};


let nom1
let nom2
let nom3

do {
	nom1 = window.prompt("Escribe el nombre de un planeta del Sistema Solar").toLowerCase()
	if (nom1 != sistemaSolar.mercurio.nombre && nom1 != sistemaSolar.jupiter.nombre && nom1 != sistemaSolar.marte.nombre && nom1 != sistemaSolar.neptuno.nombre && nom1 != sistemaSolar.saturno.nombre && nom1 != sistemaSolar.tierra.nombre && nom1 != sistemaSolar.urano.nombre && nom1 != sistemaSolar.venus.nombre && nom1 != sistemaSolar.pluton.nombre) {
		window.alert("Ese nombre es incorrecto")
	}
} while (nom1 != sistemaSolar.mercurio.nombre && nom1 != sistemaSolar.jupiter.nombre && nom1 != sistemaSolar.marte.nombre && nom1 != sistemaSolar.neptuno.nombre && nom1 != sistemaSolar.saturno.nombre && nom1 != sistemaSolar.tierra.nombre && nom1 != sistemaSolar.urano.nombre && nom1 != sistemaSolar.venus.nombre && nom1 != sistemaSolar.pluton.nombre)

do {
	nom2 = window.prompt("Escribe el nombre de otro planeta del Sistema Solar").toLowerCase()
	if (nom2 != sistemaSolar.mercurio.nombre && nom2 != sistemaSolar.jupiter.nombre && nom2 != sistemaSolar.marte.nombre && nom2 != sistemaSolar.neptuno.nombre && nom2 != sistemaSolar.saturno.nombre && nom2 != sistemaSolar.tierra.nombre && nom2 != sistemaSolar.urano.nombre && nom2 != sistemaSolar.venus.nombre && nom2 != sistemaSolar.pluton.nombre) {
		window.alert("Ese nombre es incorrecto")
	} else if (nom2 == nom1) {
		window.alert("Ya has elegido ese planeta")
	}
} while (nom2 == nom1 || nom2 != sistemaSolar.mercurio.nombre && nom2 != sistemaSolar.jupiter.nombre && nom2 != sistemaSolar.marte.nombre && nom2 != sistemaSolar.neptuno.nombre && nom2 != sistemaSolar.saturno.nombre && nom2 != sistemaSolar.tierra.nombre && nom2 != sistemaSolar.urano.nombre && nom2 != sistemaSolar.venus.nombre && nom2 != sistemaSolar.pluton.nombre)

do {
	nom3 = window.prompt("Escribe el nombre de otro planeta del Sistema Solar").toLowerCase()
	if (nom3 != sistemaSolar.mercurio.nombre && nom3 != sistemaSolar.jupiter.nombre && nom3 != sistemaSolar.marte.nombre && nom3 != sistemaSolar.neptuno.nombre && nom3 != sistemaSolar.saturno.nombre && nom3 != sistemaSolar.tierra.nombre && nom3 != sistemaSolar.urano.nombre && nom3 != sistemaSolar.venus.nombre && nom3 != sistemaSolar.pluton.nombre) {
		window.alert("Ese nombre es incorrecto")
	} else if (nom3 == nom1 || nom3 == nom2) {
		window.alert("Ya has elegido ese planeta")
	}
} while (nom3 == nom2 || nom3 == nom1 || nom3 != sistemaSolar.mercurio.nombre && nom3 != sistemaSolar.jupiter.nombre && nom3 != sistemaSolar.marte.nombre && nom3 != sistemaSolar.neptuno.nombre && nom3 != sistemaSolar.saturno.nombre && nom3 != sistemaSolar.tierra.nombre && nom3 != sistemaSolar.urano.nombre && nom3 != sistemaSolar.venus.nombre && nom3 != sistemaSolar.pluton.nombre)

if (nom1 === sistemaSolar.mercurio.nombre) {
	document.getElementById("nombre1").innerHTML = sistemaSolar.mercurio.nombre.toUpperCase()
	document.getElementById("tarjeta").style.backgroundColor = "#5a8da2"
	document.getElementById("imagen1").src = sistemaSolar.mercurio.imagen
	document.getElementById("color1").innerHTML = sistemaSolar.mercurio.color.toUpperCase()
	document.getElementById("temperatura1").innerHTML = sistemaSolar.mercurio.temperatura
} else if (nom1 === sistemaSolar.venus.nombre) {
	document.getElementById("nombre1").innerHTML = sistemaSolar.venus.nombre.toUpperCase()
	document.getElementById("tarjeta").style.backgroundColor = "#5a8da2"
	document.getElementById("imagen1").src = sistemaSolar.venus.imagen
	document.getElementById("color1").innerHTML = sistemaSolar.venus.color.toUpperCase()
	document.getElementById("temperatura1").innerHTML = sistemaSolar.venus.temperatura

} else if (nom1 === sistemaSolar.tierra.nombre) {
	document.getElementById("nombre1").innerHTML = (sistemaSolar.tierra.nombre).toUpperCase()
	document.getElementById("tarjeta").style.backgroundColor = "#5a8da2"
	document.getElementById("imagen1").src = sistemaSolar.tierra.imagen
	document.getElementById("color1").innerHTML = sistemaSolar.tierra.color.toUpperCase()
	document.getElementById("temperatura1").innerHTML = sistemaSolar.tierra.temperatura

} else if (nom1 === sistemaSolar.marte.nombre) {
	document.getElementById("nombre1").innerHTML = (sistemaSolar.marte.nombre).toUpperCase()
	document.getElementById("tarjeta").style.backgroundColor = "#5a8da2"
	document.getElementById("imagen1").src = sistemaSolar.marte.imagen
	document.getElementById("color1").innerHTML = sistemaSolar.marte.color.toUpperCase()
	document.getElementById("temperatura1").innerHTML = sistemaSolar.marte.temperatura

} else if (nom1 === sistemaSolar.jupiter.nombre) {
	document.getElementById("nombre1").innerHTML = (sistemaSolar.jupiter.nombre).toUpperCase()
	document.getElementById("tarjeta").style.backgroundColor = "#5a8da2"
	document.getElementById("imagen1").src = sistemaSolar.jupiter.imagen
	document.getElementById("color1").innerHTML = sistemaSolar.jupiter.color.toUpperCase()
	document.getElementById("temperatura1").innerHTML = sistemaSolar.jupiter.temperatura

} else if (nom1 === sistemaSolar.saturno.nombre) {
	document.getElementById("nombre1").innerHTML = (sistemaSolar.saturno.nombre).toUpperCase()
	document.getElementById("tarjeta").style.backgroundColor = "#5a8da2"
	document.getElementById("imagen1").src = sistemaSolar.saturno.imagen
	document.getElementById("color1").innerHTML = sistemaSolar.saturno.color.toUpperCase()
	document.getElementById("temperatura1").innerHTML = sistemaSolar.saturno.temperatura

} else if (nom1 === sistemaSolar.urano.nombre) {
	document.getElementById("nombre1").innerHTML = (sistemaSolar.urano.nombre).toUpperCase()
	document.getElementById("tarjeta").style.backgroundColor = "#5a8da2"
	document.getElementById("imagen1").src = sistemaSolar.urano.imagen
	document.getElementById("color1").innerHTML = sistemaSolar.urano.color.toUpperCase()
	document.getElementById("temperatura1").innerHTML = sistemaSolar.urano.temperatura

} else if (nom1 === sistemaSolar.neptuno.nombre) {
	document.getElementById("nombre1").innerHTML = (sistemaSolar.neptuno.nombre).toUpperCase()
	document.getElementById("tarjeta").style.backgroundColor = "#5a8da2"
	document.getElementById("imagen1").src = sistemaSolar.neptuno.imagen
	document.getElementById("color1").innerHTML = sistemaSolar.neptuno.color.toUpperCase()
	document.getElementById("temperatura1").innerHTML = sistemaSolar.neptuno.temperatura

} else if (nom1 === sistemaSolar.pluton.nombre) {
	document.getElementById("nombre1").innerHTML = (sistemaSolar.pluton.nombre).toUpperCase()
	document.getElementById("tarjeta").style.backgroundColor = "#5a8da2"
	document.getElementById("imagen1").src = sistemaSolar.pluton.imagen
	document.getElementById("color1").innerHTML = sistemaSolar.pluton.color.toUpperCase()
	document.getElementById("temperatura1").innerHTML = sistemaSolar.pluton.temperatura
}


if (nom2 === sistemaSolar.mercurio.nombre) {
	document.getElementById("nombre2").innerHTML = sistemaSolar.mercurio.nombre.toUpperCase()
	document.getElementById("tarjeta2").style.backgroundColor = "#9ecb6c"
	document.getElementById("imagen2").src = sistemaSolar.mercurio.imagen
	document.getElementById("color2").innerHTML = sistemaSolar.mercurio.color.toUpperCase()
	document.getElementById("temperatura2").innerHTML = sistemaSolar.mercurio.temperatura
} else if (nom2 === sistemaSolar.venus.nombre) {
	document.getElementById("nombre2").innerHTML = sistemaSolar.venus.nombre.toUpperCase()
	document.getElementById("tarjeta2").style.backgroundColor = "#9ecb6c"
	document.getElementById("imagen2").src = sistemaSolar.venus.imagen
	document.getElementById("color2").innerHTML = sistemaSolar.venus.color.toUpperCase()
	document.getElementById("temperatura2").innerHTML = sistemaSolar.venus.temperatura

} else if (nom2 === sistemaSolar.tierra.nombre) {
	document.getElementById("nombre2").innerHTML = (sistemaSolar.tierra.nombre).toUpperCase()
	document.getElementById("tarjeta2").style.backgroundColor = "#9ecb6c"
	document.getElementById("imagen2").src = sistemaSolar.tierra.imagen
	document.getElementById("color2").innerHTML = sistemaSolar.tierra.color.toUpperCase()
	document.getElementById("temperatura2").innerHTML = sistemaSolar.tierra.temperatura

} else if (nom2 === sistemaSolar.marte.nombre) {
	document.getElementById("nombre2").innerHTML = (sistemaSolar.marte.nombre).toUpperCase()
	document.getElementById("tarjeta2").style.backgroundColor = "#9ecb6c"
	document.getElementById("imagen2").src = sistemaSolar.marte.imagen
	document.getElementById("color2").innerHTML = sistemaSolar.marte.color.toUpperCase()
	document.getElementById("temperatura2").innerHTML = sistemaSolar.marte.temperatura

} else if (nom2 === sistemaSolar.jupiter.nombre) {
	document.getElementById("nombre2").innerHTML = (sistemaSolar.jupiter.nombre).toUpperCase()
	document.getElementById("tarjeta2").style.backgroundColor = "#9ecb6c"
	document.getElementById("imagen2").src = sistemaSolar.jupiter.imagen
	document.getElementById("color2").innerHTML = sistemaSolar.jupiter.color.toUpperCase()
	document.getElementById("temperatura2").innerHTML = sistemaSolar.jupiter.temperatura

} else if (nom2 === sistemaSolar.saturno.nombre) {
	document.getElementById("nombre2").innerHTML = (sistemaSolar.saturno.nombre).toUpperCase()
	document.getElementById("tarjeta2").style.backgroundColor = "#9ecb6c"
	document.getElementById("imagen2").src = sistemaSolar.saturno.imagen
	document.getElementById("color2").innerHTML = sistemaSolar.saturno.color.toUpperCase()
	document.getElementById("temperatura2").innerHTML = sistemaSolar.saturno.temperatura

} else if (nom2 === sistemaSolar.urano.nombre) {
	document.getElementById("nombre2").innerHTML = (sistemaSolar.urano.nombre).toUpperCase()
	document.getElementById("tarjeta2").style.backgroundColor = "#9ecb6c"
	document.getElementById("imagen2").src = sistemaSolar.urano.imagen
	document.getElementById("color2").innerHTML = sistemaSolar.urano.color.toUpperCase()
	document.getElementById("temperatura2").innerHTML = sistemaSolar.urano.temperatura

} else if (nom2 === sistemaSolar.neptuno.nombre) {
	document.getElementById("nombre2").innerHTML = (sistemaSolar.neptuno.nombre).toUpperCase()
	document.getElementById("tarjeta2").style.backgroundColor = "#9ecb6c"
	document.getElementById("imagen2").src = sistemaSolar.neptuno.imagen
	document.getElementById("color2").innerHTML = sistemaSolar.neptuno.color.toUpperCase()
	document.getElementById("temperatura2").innerHTML = sistemaSolar.neptuno.temperatura

} else if (nom2 === sistemaSolar.pluton.nombre) {
	document.getElementById("nombre2").innerHTML = (sistemaSolar.pluton.nombre).toUpperCase()
	document.getElementById("tarjeta2").style.backgroundColor = "#9ecb6c"
	document.getElementById("imagen2").src = sistemaSolar.pluton.imagen
	document.getElementById("color2").innerHTML = sistemaSolar.pluton.color.toUpperCase()
	document.getElementById("temperatura2").innerHTML = sistemaSolar.pluton.temperatura
}


if (nom3 === sistemaSolar.mercurio.nombre) {
	document.getElementById("nombre3").innerHTML = sistemaSolar.mercurio.nombre.toUpperCase()
	document.getElementById("tarjeta3").style.backgroundColor = "#5f5f5f"
	document.getElementById("imagen3").src = sistemaSolar.mercurio.imagen
	document.getElementById("color3").innerHTML = sistemaSolar.mercurio.color.toUpperCase()
	document.getElementById("temperatura3").innerHTML = sistemaSolar.mercurio.temperatura
} else if (nom3 === sistemaSolar.venus.nombre) {
	document.getElementById("nombre3").innerHTML = sistemaSolar.venus.nombre.toUpperCase()
	document.getElementById("tarjeta3").style.backgroundColor = "#5f5f5f"
	document.getElementById("imagen3").src = sistemaSolar.venus.imagen
	document.getElementById("color3").innerHTML = sistemaSolar.venus.color.toUpperCase()
	document.getElementById("temperatura3").innerHTML = sistemaSolar.venus.temperatura

} else if (nom3 === sistemaSolar.tierra.nombre) {
	document.getElementById("nombre3").innerHTML = (sistemaSolar.tierra.nombre).toUpperCase()
	document.getElementById("tarjeta3").style.backgroundColor = "#5f5f5f"
	document.getElementById("imagen3").src = sistemaSolar.tierra.imagen
	document.getElementById("color3").innerHTML = sistemaSolar.tierra.color.toUpperCase()
	document.getElementById("temperatura3").innerHTML = sistemaSolar.tierra.temperatura

} else if (nom3 === sistemaSolar.marte.nombre) {
	document.getElementById("nombre3").innerHTML = (sistemaSolar.marte.nombre).toUpperCase()
	document.getElementById("tarjeta3").style.backgroundColor = "#5f5f5f"
	document.getElementById("imagen3").src = sistemaSolar.marte.imagen
	document.getElementById("color3").innerHTML = sistemaSolar.marte.color.toUpperCase()
	document.getElementById("temperatura3").innerHTML = sistemaSolar.marte.temperatura

} else if (nom3 === sistemaSolar.jupiter.nombre) {
	document.getElementById("nombre3").innerHTML = (sistemaSolar.jupiter.nombre).toUpperCase()
	document.getElementById("tarjeta3").style.backgroundColor = "#5f5f5f"
	document.getElementById("imagen3").src = sistemaSolar.jupiter.imagen
	document.getElementById("color3").innerHTML = sistemaSolar.jupiter.color.toUpperCase()
	document.getElementById("temperatura3").innerHTML = sistemaSolar.jupiter.temperatura

} else if (nom3 === sistemaSolar.saturno.nombre) {
	document.getElementById("nombre3").innerHTML = (sistemaSolar.saturno.nombre).toUpperCase()
	document.getElementById("tarjeta3").style.backgroundColor = "#5f5f5f"
	document.getElementById("imagen3").src = sistemaSolar.saturno.imagen
	document.getElementById("color3").innerHTML = sistemaSolar.saturno.color.toUpperCase()
	document.getElementById("temperatura3").innerHTML = sistemaSolar.saturno.temperatura

} else if (nom3 === sistemaSolar.urano.nombre) {
	document.getElementById("nombre3").innerHTML = (sistemaSolar.urano.nombre).toUpperCase()
	document.getElementById("tarjeta3").style.backgroundColor = "#5f5f5f"
	document.getElementById("imagen3").src = sistemaSolar.urano.imagen
	document.getElementById("color3").innerHTML = sistemaSolar.urano.color.toUpperCase()
	document.getElementById("temperatura3").innerHTML = sistemaSolar.urano.temperatura

} else if (nom3 === sistemaSolar.neptuno.nombre) {
	document.getElementById("nombre3").innerHTML = (sistemaSolar.neptuno.nombre).toUpperCase()
	document.getElementById("tarjeta3").style.backgroundColor = "#5f5f5f"
	document.getElementById("imagen3").src = sistemaSolar.neptuno.imagen
	document.getElementById("color3").innerHTML = sistemaSolar.neptuno.color.toUpperCase()
	document.getElementById("temperatura3").innerHTML = sistemaSolar.neptuno.temperatura

} else if (nom3 === sistemaSolar.pluton.nombre) {
	document.getElementById("nombre3").innerHTML = (sistemaSolar.pluton.nombre).toUpperCase()
	document.getElementById("tarjeta3").style.backgroundColor = "#5f5f5f"
	document.getElementById("imagen3").src = sistemaSolar.pluton.imagen
	document.getElementById("color3").innerHTML = sistemaSolar.pluton.color.toUpperCase()
	document.getElementById("temperatura3").innerHTML = sistemaSolar.pluton.temperatura
}