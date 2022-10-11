/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 27
    // Decoradores
*/

// JS NO LO CONOCEN Y TS LOS TRADUCE

// importante
// sirve para cambiar las clases definidas
// cambiar las cosas
// decoradores sirve para expandir o anadir funcionalidades
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
	constructor: T
) {
	return class extends constructor {
		reportingURL = "http://www...";
	};
}

@reportableClassDecorator
class MiSuperClase {
	public miPropiedad: string = "XD";
	imprimir() {
		console.log("Hola mundo");
	}
}

console.log(MiSuperClase);
