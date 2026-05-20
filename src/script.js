window.onload = function() {

  let array1 = "Un ";
  let adjetivos = [
    'misterioso', 
    'radioactivo', 
    'invisible', 
    'gigante', 
    'digital', 
    'volador', 
    'oxidado', 
    'explosivo', 
    'imprevisto'
];
  let sustantivos = [
    'computadora',
    'código',
    'servidor',
    'satélite',
    'enrutador',
    'proyecto',
    'refrigerador'
];
let accion = [
    'formateó',
    'secuestró',
    'derritió',
    'borró',
    'incendió',
    'encriptó',
    'aplastó'
];
  let posesion = [
    'de mi jefe',
    'de la universidad',
    'de mi vecino',
    'de la NASA',
    'del cliente',
    'de mi madre',
    'del banco',
    'de mi compañero de cuarto'
];
  let donde = [
    'en mi casa',
    'en el laboratorio',
    'en la oficina',
    'en la nube',
    'en el espacio exterior',
    'en el sótano',
    'en una dimensión paralela',
    'en la cafetería'
];


  let aleatorio1 = Math.floor(Math.random() * adjetivos.length);
  let aleatorio2 = Math.floor(Math.random() * sustantivos.length);
  let aleatorio3 = Math.floor(Math.random() * accion.length);
  let aleatorio4 = Math.floor(Math.random() * posesion.length);
  let aleatorio5 = Math.floor(Math.random() * donde.length);

  // creating a sentence (the excuse)
  document.querySelector("#excuse").innerHTML = array1 +"  "+ adjetivos[aleatorio1] + " "+ sustantivos[aleatorio2] +" "+ accion[aleatorio3] +" "+ posesion[aleatorio4] +" "+ donde[aleatorio5];
  
}