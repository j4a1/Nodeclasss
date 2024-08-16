

//DE AQUI 1


const fs = require('fs');


function crearCarpetaYArchivo(rutaCarpeta, nombreArchivo, contenido) {
  fs.mkdir(rutaCarpeta, { recursive: true }, (err) => {
    if (err) {
      console.error('Error al crear la carpeta:', err);
    } else {
      const rutaArchivo = `${rutaCarpeta}/${nombreArchivo}`;
      fs.writeFile(rutaArchivo, contenido, (err) => {
        if (err) {
          console.error('Error al crear el archivo:', err);
        } else {
          console.log('Archivo creado correctamente:', rutaArchivo);
        }
      });
    }
  });
}


// Configuración personalizable
const nombreCarpeta = 'FAMILIA';
const nombreArchivo = 'Falcaogoll.txt';
const contenido = 'hola mi nombre es juan cual es el tuyo';


// Ejecutar la función principal
crearCarpetaYArchivo(nombreCarpeta, nombreArchivo, contenido);


 // HASTA AQUI ES LA OPCION DE SOLO CREAR 1


// DE AQUI 2


 /* const fs = require('fs');


function eliminarArchivoYCarpeta(rutaCarpeta, nombreArchivo) {
  const rutaArchivo = `${rutaCarpeta}/${nombreArchivo}`;


  // Eliminar el archivo
  fs.unlink(rutaArchivo, (err) => {
    if (err) {
      console.error('Error al eliminar el archivo:', err);
    } else {
      console.log('Archivo eliminado correctamente:', rutaArchivo);


      // Eliminar la carpeta
      fs.rmdir(rutaCarpeta, { recursive: true }, (err) => {
        if (err) {
          console.error('Error al eliminar la carpeta:', err);
        } else {
          console.log('Carpeta eliminada correctamente:', rutaCarpeta);
        }
      });
    }
  });
}


// Configuración personalizable
const nombreCarpeta = 'FAMILIA';
const nombreArchivo = 'Falcaogoll.txt';


// Ejecutar la función principal
eliminarArchivoYCarpeta(nombreCarpeta, nombreArchivo);


// HASTA AQUI ES SOLO LA OPCION DE ELIMINAR 2

 */