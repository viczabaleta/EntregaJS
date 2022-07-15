// variables
let diasMax = 30;
let precioAdulto = 1000;
let precioNinio = precioAdulto * 0.6;


// huespedes

const personas = [
    {nombre: "Agustin", edad: 28},
    {nombre: "Cecilia", edad: 42},
    {nombre: "Vera", edad: 70},
    {nombre: "Fran", edad: 2},
    {nombre: "Juana", edad: 11},
];

const menor = personas => personas.edad <= 12;
const mayor = personas => personas.edad > 12;


const ninios = personas.filter(menor);
const adultos = personas.filter(mayor);

console.log(ninios);
console.log(adultos);
alert("Van a hospedarse " + personas.length + " personas: " + adultos.length + " adultos y " + ninios.length + " ninios." )


// Funciones

const precioFinal = (dias) => {

    if (dias <= diasMax) {
        let precio = ((adultos.length) * precioAdulto) + ((ninios.length) * precioNinio);
        alert('El precio final para ' + personas.length + ' personas por ' + dias + ' dias es de $' + dias * precio)
    
    } else {
        alert('La estadia maxima es de ' + diasMax + ' dias.')
    }
}



//  tiempo

do {
    opcion = Number(prompt('De cuanto tiempo sera tu estadia?\n\n1 - Dos dias\n2 - Una semana\n3 - Dos semanas\n4 - Otro\n5 - Salir'));
    let dias;

    switch (opcion) {
        case 1:
            dias = 2;
            precioFinal(dias);
            break;
        case 2:
            dias = 7;
            precioFinal(dias);
            break;
        case 3:
            dias = 14;
            precioFinal(dias);
            break;
        case 4:
            dias = Number(prompt('Cuantos dias quieres quedarte?'))
            precioFinal(dias);
            break;

        default:
            alert('Opcion incorrecta')
            break;
    }


} while (opcion !== 5);

