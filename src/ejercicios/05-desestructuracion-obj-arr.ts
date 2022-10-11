/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 19
    // desestructuracion de objectos
*/

interface ReproductorInterface {
	volumen: number;
	segundo: number;
	cancion: string;
	detalles: DetallesInterface;
}

interface DetallesInterface {
	autor: string;
	ano: number;
}

const reproductor: ReproductorInterface = {
	volumen: 90,
	segundo: 36,
	cancion: "Esta es una cacion",
	detalles: {
		autor: "yo",
		ano: 20,
	},
};
// extrar las propiedades es como decir que
// const volumen = reproductor.volumen;

// tienes dos variables
let autor: string = "leo";

// desestructuracion con {} debes que poner el mismo nombre
const {
	volumen,
	segundo,
	cancion,
	detalles: { autor: autorReproductor, ano },
} = reproductor;

// const { autor, ano } = detalles;

// console.log(`El volumen es: ${volumen}, el autor es: ${autorReproductor}`);

/*
    // VIDEO 20
    // desestructuracion de arreglos
*/

const juegos: string[] = ["elden ring", "RDR", "LOL"];

// desestructuracion de arreglo  [] es por la posicion no importa el nombre

const [p1, p2, p3] = juegos;

// si quieres sacar el solamente uno

const [, , posicion3] = juegos;

console.log(`Primer juego ${p1}
             Segundo Juego ${p2}
             Tercer juego ${posicion3}`);
