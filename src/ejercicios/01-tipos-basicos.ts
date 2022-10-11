/*
    ===== Código de TypeScript =====
*/

/*
    // VIDEO 14
    // TIPOS BÁSICOS Y CONCEPTOS GENERALES
*/

// declaraciones de variables
let nombre: string = "leo";
// : tipo de dato

// constantes (no se pueden cambiar)
//  const nombre :"valor"
// const nombre2 = "nombre2";

// con ts necesitas siempre usar el mismo tipo de dato
// nombre = 123; NOOO

// para poder usar mas de un tipo de datos
// | or
let hp: number | string = 100;

hp = "full";

console.log(nombre, hp);

// tipos de datos
// Boolean
// Number
// String
// Array
// Tuple
// Enum
// Unknown
// Any
// Void
// Null and Undefined
// Never
// Object
