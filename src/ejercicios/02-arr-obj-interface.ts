/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 15
	OBJETOS, ARREGLOS Y INTERFACES
*/

// objetos arreglos e interfaces
// cuando especificamos un tipo de dato tambien necesitamos usar[]
let habilidades: number[] = [1, 2, 3];
// [] = son arreglos
// any = cualquier tipo de dato

habilidades.push(2);

// objetos

// restrigir como son creados los objects
// no se muestra en js solamente en modo desarrollo
interface PersonajeInterface {
	nombre: string;
	edad: number;
	habilidades: string[];
	hp: number;
	// Cuando es opcional
	sexo?: string;
}

const personaje: PersonajeInterface = {
	nombre: "Juan",
	edad: 20,
	habilidades: ["Javascript", "Typescript"],
	hp: 100,
};

console.table(personaje);
