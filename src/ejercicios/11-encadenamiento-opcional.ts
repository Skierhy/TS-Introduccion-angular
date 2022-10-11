/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 28
    // Encadenamiento opcional
*/

interface Pasajero {
	nombre: string;
	// es opcional
	hijo?: string[];
}

const pasajero1: Pasajero = {
	nombre: "Leo",
};

const pasajero2: Pasajero = {
	nombre: "Luis",
	hijo: ["gabriel"],
};

function imprimeHijos(pasajero: Pasajero): void {
	// en esta parte ? significa si existe los hijos entonces hace .length
	// si es undefined entonces pone 0
	const cuantosHijos = pasajero.hijo?.length || 0;

	console.log(cuantosHijos);
}

imprimeHijos(pasajero1);
