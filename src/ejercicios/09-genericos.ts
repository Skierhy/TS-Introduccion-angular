/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 26
    // genericos
*/
// <T> es para los genericos en vez que diga any mostrar su tipo
// el argumento T
function queTipoSoy<T>(argumento: T) {
	return argumento;
}

let soyString = queTipoSoy("Hola");

let soyNumber = queTipoSoy(2);

let soyExplicito = queTipoSoy<number>(200);
