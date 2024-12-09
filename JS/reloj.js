// Función para agregar un cero delante de los números menores de 10
function formatTimeUnit(unit) {
    return unit < 10 ? '0' + unit : unit;
}

// Función para actualizar la hora y la fecha
function updateClock() {
    const now = new Date();
    
    // Obtener la hora, minutos y segundos
    const hours = formatTimeUnit(now.getHours());
    const minutes = formatTimeUnit(now.getMinutes());
    const seconds = formatTimeUnit(now.getSeconds());
    
    // Obtener la fecha (día, mes, año)
    const day = formatTimeUnit(now.getDate());
    const month = formatTimeUnit(now.getMonth() + 1); // Los meses comienzan desde 0
    const year = now.getFullYear();
    
    // Mostrar la hora
    document.getElementById('clock-time').textContent = `${hours}:${minutes}:${seconds}`;
    
    // Mostrar la fecha
    document.getElementById('current-date').textContent = `${day}/${month}/${year}`;
    
    // Mostrar mensaje según la hora
    let message;
    if (hours >= 0 && hours < 7) {
        message = "Es hora de descansar. Apaga y sigue mañana";
    } else if (hours >= 7 && hours < 12) {
        message = "Buenos días, desayuna fuerte y a darle al código";
    } else if (hours >= 12 && hours < 14) {
        message = "Echa un rato más pero no olvides comer";
    } else if (hours >= 14 && hours < 16) {
        message = "Espero que hayas comido";
    } else if (hours >= 16 && hours < 18) {
        message = "Buenas tardes, el último empujón";
    } else if (hours >= 18 && hours < 22) {
        message = "Esto ya son horas extras, ... piensa en parar pronto";
    } else {
        message = "Buenas noches, es hora de pensar en parar y descansar";
    }
    
    // Mostrar el mensaje
    document.getElementById('time-message').textContent = message;
}

// Actualizar el reloj cada segundo
setInterval(updateClock, 1000);

// Llamar a la función una vez para que se cargue la hora inmediatamente
updateClock();


/*Explicación del código:
HTML:
Se muestra un <h1> con el título de la página.
Se tienen dos secciones: una para mostrar la hora y la fecha (clock), y otra para el mensaje de texto dependiendo de la hora del día (message).
Se enlazan los archivos de CSS y JavaScript.
CSS:
Se define un estilo simple con colores oscuros para el fondo y un texto en blanco.
Se agrega una fuente grande para la hora y la fecha, y un estilo para el mensaje.
JavaScript:
La función formatTimeUnit() asegura que las horas, minutos y segundos siempre se muestren con dos dígitos (por ejemplo, 01 en lugar de 1).
La función updateClock() obtiene la hora y la fecha actual con new Date(), y luego actualiza los elementos HTML correspondientes (#clock-time y #current-date).
En función de la hora, se muestra un mensaje diferente con un if para definir las frases.
setInterval() se utiliza para actualizar el reloj cada segundo, lo que permite que la hora y los segundos se actualicen automáticamente.
Resultado esperado:
El reloj se actualizará cada segundo, mostrando la hora y la fecha en formato correcto.
Dependiendo de la hora, aparecerá una frase diferente.
El diseño será oscuro con texto claro y bien organizado.*/