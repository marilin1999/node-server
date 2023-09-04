const readlineSync = require('readline-sync');

let tareas = [];

function mostrarTareas() {
  if (tareas.length === 0) {
    console.log('No hay tareas en la lista.');
  } else {
    console.log('Lista de tareas:');
    tareas.forEach((tarea, index) => {
      console.log(`${index + 1}. [${tarea.estado ? '✔' : 'x'}] ${tarea.descripcion}`);
    });
  }
}

function agregarTarea() {
  const descripcion = readlineSync.question('Ingrese la descripción de la tarea: ');
  tareas.push({ descripcion, estado: false });
  console.log('Tarea agregada.');
}

function eliminarTarea() {
  mostrarTareas();
  const index = readlineSync.questionInt('Ingrese el número de la tarea a eliminar: ') - 1;

  if (index >= 0 && index < tareas.length) {
    tareas.splice(index, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Número de tarea inválido.');
  }
}

function completarTarea() {
  mostrarTareas();
  const index = readlineSync.questionInt('Ingrese el número de la tarea completada: ') - 1;

  if (index >= 0 && index < tareas.length) {
    tareas[index].estado = true;
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Número de tarea inválido.');
  }
}

function menu() {
  while (true) {
    console.log('\nOpciones:');
    console.log(' Mostrar tareas');
    console.log(' Agregar tarea');
    console.log(' Eliminar tarea');
    console.log(' Completar tarea');
    console.log(' Salir');

    const opcion = readlineSync.questionInt('Seleccione una opción: ');

    switch (opcion) {
      case 1:
        mostrarTareas();
        break;
      case 2:
        agregarTarea();
        break;
      case 3:
        eliminarTarea();
        break;
      case 4:
        completarTarea();
        break;
      case 5:
        return;
      default:
        console.log('Opción no válida. Intente de nuevo.');
    }
  }
}