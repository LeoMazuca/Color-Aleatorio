//DOM-Document Object Model

//String Literals
let url = "https://www.cutevents.online";

let ruta = "experiencia-online";

let rutaCompleta = url + "/" + ruta;

let rutaCompletaLiteral = `${url}/${ruta}`;

console.log(rutaCompleta, rutaCompletaLiteral);

document.body.innerHTML = `
	<div id="test"></div>
`;

document.getElementById("test").innerHTML = `
	<a href="${rutaCompletaLiteral}">${rutaCompletaLiteral}</a>
`;

//Cambio de color aleatorio
const randomColor = () =>{
	let r = Math.floor(Math.random()*256);
	let g = Math.floor(Math.random()*256);
	let b = Math.floor(Math.random()*256);
	let divTest = `
		<div id = "test" style ="background-color: rgb(${r},${g}, ${b})"></div>
	`
	return divTest;
}

document.body.innerHTML = randomColor();

