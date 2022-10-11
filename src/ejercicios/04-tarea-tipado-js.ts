/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 18
    // tarea sobre objetos e interfaces
*/

// UNA MANERA
// interface superHeroeInterface {
// 	nombre: string;
// 	edad: number;
// 	direccion: {
// 		calle: string;
// 		pais: string;
// 		cuidad: string;
// 	};
// 	mostrarDireccion: () => void;
// }

interface SuperHeroeInterface {
	nombre: string;
	edad: number;
	direccion: DireccionInterface;
	mostrarDireccion: () => void;
}

interface DireccionInterface {
	calle: string;
	pais: string;
	cuidad: string;
}

const superHeroe: SuperHeroeInterface = {
	nombre: "Batman",
	edad: 40,
	direccion: {
		calle: "Primera",
		pais: "DC",
		cuidad: "Gotham",
	},
	mostrarDireccion() {
		return (
			this.nombre + ", " + this.direccion.cuidad + ", " + this.direccion.pais
		);
	},
};

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);
