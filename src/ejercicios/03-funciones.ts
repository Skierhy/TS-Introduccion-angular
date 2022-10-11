/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 16
    // FUNCIONES BASICAS
*/

// funciones basicas
// lo que retorna : number {
function sumar(a: number, b: number): number {
	return a + b;
}
// si no es critico, puedo omitir el tipo de retorno

// funcion de flecha

const sumarFlacha = (a: number, b: number): number => a + b;

// no tan resumida
const noResumen = (a: number, b: number): number => {
	return a + b;
};

function multiplicar(
	// obligatorio
	numero: number,
	// opcional
	otroNumero?: number,
	// por defecto
	base: number = 2
): number {
	return numero * base;
}

// numero = 1
// otroNumero = 2
// base = 2
const resultado = multiplicar(1, 2);

// numero = 1
// otroNumero = undefined
// base = 2
const resultado2 = multiplicar(1);

/*
    // VIDEO 17
    // Funciones con objetos como argumentos
*/

interface PersonajeInterfacev2 {
	nombre: string;
	pv: number;
	// funciones dentro de un objeto
	// MostrarHp: (a: number, b: number) => void;
	// MostrarHp(): void;
	MostrarHp: () => void;
}

// void = no retorna nada
function curar(personaje: PersonajeInterfacev2, curaX: number): void {
	// manera larga
	// personaje.vida = personaje.vida + curaX;
	// manera corta
	personaje.pv += curaX;
}

// nuevo objeto
const NuevoPersonaje: PersonajeInterfacev2 = {
	nombre: "Leo",
	pv: 100,
	// funcion
	MostrarHp() {
		console.log("Mis puntos de vida:" + this.pv);
	},
};

curar(NuevoPersonaje, 10);

NuevoPersonaje.MostrarHp();
