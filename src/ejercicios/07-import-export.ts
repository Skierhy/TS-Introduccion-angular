/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 22
    // importaciones y exportaciones
*/
// importar ejecuta todo el archivo no la interfaces

//  el ./ significa que busque en este directorio
import { CalculaISV, Producto } from "./06-desestructuracion-argumentos";

// si solamente escribes asi no te dara error en TS por que todo lo compila en un solo archivo
const carritoCompra: Producto[] = [
	{
		desc: "Telefonito",
		precio: 200,
	},
	{
		desc: "tabletita",
		precio: 100,
	},
];

const [total, isv] = CalculaISV(carritoCompra);

console.log(`Total es: ${total} y el iva es${isv}`);
