class padre {
	constructor (apellido){
		this.apellidoPadre = apellido;
	}
}
class hijo extends padre {
	constructor (nombre, apellido){
		super(apellido);
		this.nombreHijo = nombre;
	}
	registro(){
		return 'El nombre del hijo será '+ this.nombreHijo  + " " + this.apellidoPadre;
	}
}
var primerHijo = prompt("Nombre del hijo:")
var segundoHijo = prompt("Nombre del segundo  hijo:")
var apellidoPaterno = prompt("Apellido paterno:")
let hijo1 = new hijo(primerHijo,apellidoPaterno)
let hijo2 = new hijo(segundoHijo,apellidoPaterno)
document.getElementById("ID").innerHTML = hijo1.registro();
document.getElementById("ID2").innerHTML = hijo2.registro();