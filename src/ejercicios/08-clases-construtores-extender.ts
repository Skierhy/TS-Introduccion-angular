/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 23 y 24 25
    // clases basicas
    // consttructor de una clase
    // extender una clase
*/

// casi igual que js

class Persona {
	// private public y static es la alcance que tiene

	// private significa que solamente es visible dentro de la clase
	private nombre: string;
	// public significa que fuera de clase de puede ver la propiedad
	public apellidos: string;
	// static significa que se puede acceder a valor de esta propiedad si crear instancia
	static edad: number;
	// por defecto es public
	sexo: string;

	// el construtor es funcion que se va a llamar cuando se crea una instancia  de un clase

	constructor(nombre: string, apellidos: string, edad: number, sexo: string) {
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.sexo = sexo;
		// stactic no se necesita hacer esto
	}
}
// los () se refiere al constructor
const persona1 = new Persona("Skierhy", "NMD", 23, "h");

// extender una clase anadir funcionalidades propiedad existente en pocas es el tema de heredar (hija y padres)

class PersonaNormal {
	constructor(public nombre: string, public direccion: string) {}
}

// manera corta
// aqui hereda o extiende la clase
class Heroe extends PersonaNormal {
	constructor(
		public nombreHeroe: string,
		public apellidos: string,
		public nombreReal?: string
	) {
		// lo que significa que llamara el construtor de padre
		super(nombreReal, "direccion");
	}
}

const heroe = new Heroe("ironman", "tony", "Nose");
