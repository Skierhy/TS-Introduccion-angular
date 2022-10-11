/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 21
    // desestructuracion de argumentos
*/

export interface Producto {
	desc: string;
	precio: number;
}

const telefono: Producto = {
	desc: "soy telefono",
	precio: 21,
};

const laptop: Producto = {
	desc: "soy laptop",
	precio: 222,
};

export function CalculaISV(producto: Producto[]): [number, number] {
	let total: number = 0;
	// desestructuracion de argumentos
	producto.forEach(({ precio }, index, arreglo) => {
		// const { precio } = elemento;
		total += precio;
	});

	return [total, total * 0.15];
}

// crear objecto telefono
const articulos: Producto[] = [telefono, laptop];
const resultadoISV = CalculaISV(articulos);

const [pp1, pp2] = resultadoISV;

console.log(`Total esxxx: ${pp1} y con iva ${pp2}`);
