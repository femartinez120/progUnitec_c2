document.getElementById('act').style.display = 'none';
var objPersona = {ced:'', nom: '', ape: '', dir: '', tel: '', email: '' };
var myArray = [];
var posAct;
comprobarLocarStorage(); // Comprobar si hay datos en localStorage al cargar la página
function comprobarLocarStorage(){ 
  if(localStorage.getItem('myArrayPersona') !== undefined && localStorage.getItem('myArrayPersona')){
      myArray= JSON.parse(localStorage.getItem('myArrayPersona'));
      mostrarDatos(myArray,'cuerpoTabla');
     // console.log(myArray);
  }
}

function guardarDatos(){
    objPersona.ced = document.getElementById('ced').value;
    objPersona.nom = document.getElementById('nom').value;
    objPersona.ape = document.getElementById('ape').value;
    objPersona.dir = document.getElementById('dir').value;
    objPersona.tel = document.getElementById('tel').value;
    objPersona.email = document.getElementById('cor').value;
    let resultado= JSON.parse(JSON.stringify(objPersona))    ; // Convertir el objeto a una cadena JSON
    myArray.push(resultado); // Agregar el objeto a la lista myArray
    guardarLocal();
    limpiarCajas();
    mostrarDatos(myArray,'cuerpoTabla');
}
function guardarLocal(){
  localStorage.setItem('myArrayPersona',JSON.stringify(myArray));
}
function limpiarCajas(){
    document.getElementById('ced').value = '';
    document.getElementById('nom').value = '';
    document.getElementById('ape').value = '';
    document.getElementById('dir').value = '';
    document.getElementById('tel').value = '';
    document.getElementById('cor').value = '';
    document.getElementById('ced').focus();
}   
function mostrarDatos(arreglo,cuerpo){
  var salida='';
  for(j in arreglo){
    salida +='<tr><td>' + arreglo[j].ced + '</td><td>'+
        arreglo[j].nom + '</td><td>'+
        arreglo[j].ape + '</td><td>'+
        arreglo[j].dir + '</td><td>'+
        arreglo[j].tel + '</td><td>'+
        arreglo[j].email + '</td><td>'+
        '<button class="ancho"  onclick="editarDatos('+j+')">Editar</button>'+
        '<button class="ancho"  onclick="eliminarDatos('+j+')">Eliminar</button></td></tr>';
  }
    document.getElementById(cuerpo).innerHTML=salida;
}
function editarDatos(index){  
    document.getElementById('grd').style.display = 'none';
    document.getElementById('act').style.display = 'block';
    posAct = index;
    document.getElementById('ced').value = myArray[index].ced;
    document.getElementById('nom').value = myArray[index].nom;
    document.getElementById('ape').value = myArray[index].ape;
    document.getElementById('dir').value = myArray[index].dir;
    document.getElementById('tel').value = myArray[index].tel;
    document.getElementById('cor').value = myArray[index].email;
}
function eliminarDatos(index){
  myArray.splice(index, 1); // Eliminar el elemento en la posición index
  guardarLocal();
  mostrarDatos(myArray,'cuerpoTabla'); // Actualizar la tabla después de eliminar el elemento
}
function actualizarDatos(){
    myArray[posAct].ced = document.getElementById('ced').value;
    myArray[posAct].nom = document.getElementById('nom').value;
    myArray[posAct].ape = document.getElementById('ape').value;
    myArray[posAct].dir = document.getElementById('dir').value;
    myArray[posAct].tel = document.getElementById('tel').value;
    myArray[posAct].email = document.getElementById('cor').value;
    limpiarCajas();
    guardarLocal();
    mostrarDatos(myArray,'cuerpoTabla');
    document.getElementById('act').style.display = 'none';
    document.getElementById('grd').style.display = 'block';
}
