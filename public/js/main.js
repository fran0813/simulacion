$(document).ready(function(){
	// simulacion();
    // tiempo0();
});

(function() {
  function decimalAdjust(type, value, exp) {
    // Si el exp no está definido o es cero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // Si el valor no es un número o el exp no es un entero...
    if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();

// Random
function random() {	
	numAle = Math.round10(Math.random(),-4);
	arrayNumAle.push(numAle.toFixed(decimales));
    arrayNumAle2.push(numAle.toFixed(decimales));
}

// Tiempo 0
function tiempo0() {

    $('#titulo3').html("<h1>Tiempo 0</h1>");

	var numAleFila;
	var numAleServ;
	var numMax = 3;

	maxFilaRap = 4;
	minFilaRap = 0;
    maxFilaGral1 = 3;
    minFilaGral1 = 0;
    maxFilaGral2 = 3;
    minFilaGral2 = 0;

	maxServRap = 1;
	minServRap = 0;
    maxServGral1 = 1;
    minServGral1 = 0;
    maxServGral2 = 1;
    minServGral2 = 0;

    html3 = "<table class='table table-bordered table-hover'>";
    html3 = html3 + "<thead class='bg-tablac'>";

    html3 = html3 + "<tr>";  

    // Encabezado 
    html3 = html3 + "<th></th>";
    html3 = html3 + "<th>Rap</th>";
    html3 = html3 + "<th>Gral1</th>";
    html3 = html3 + "<th>Gral2</th>";

    html3 = html3 + "</tr>";

    html3 = html3 + "</thead>";
    html3 = html3 + "</tbody>";

    html3 = html3 + "<tr class='border-dotted'>";

	for (var i = 0; i < numMax; i++) {
        if(i == 0){
            numAleFila = Math.floor(Math.random() * (maxFilaRap - minFilaRap)) + minFilaRap;
        }else if(i == 1){
            numAleFila = Math.floor(Math.random() * (maxFilaGral1 - minFilaGral1)) + minFilaGral1;
        }else if(i == 2){
            numAleFila = Math.floor(Math.random() * (maxFilaGral2 - minFilaGral2)) + minFilaGral2;
        } 
		arrayFila.push(numAleFila);
	}

	for (var i = 0; i < numMax; i++) {
        if(arrayFila[0] > 0){
            numAleServ = 1;
            arrayFila[0] = arrayFila[0] - 1;
        }else if(arrayFila[1] > 0){
            numAleServ = 1;
            arrayFila[1] = arrayFila[1] - 1;
        }else if(arrayFila[2] > 0){
            numAleServ = 1;
            arrayFila[2] = arrayFila[2] - 1;
        }else if(arrayFila[0] == 0){
            numAleServ = 0;
        }else if(arrayFila[1] == 0){
            numAleServ = 0;
        }else if(arrayFila[2] == 0){
            numAleServ = 0;
        }
		arrayServ.push(numAleServ);
	}

    html3 = html3 + "<td>Cola</td>";
    for (var i = 0; i < numMax; i++) {
        html3 = html3 + "<td>";
        html3 = html3 + arrayFila[i];
        html3 = html3 + "</td>";
    }

    html3 = html3 + "</tr>";

    html3 = html3 + "<tr>";
    html3 = html3 + "<td>Servicio</td>";
    for (var i = 0; i < numMax; i++) {
        html3 = html3 + "<td>";
        html3 = html3 + arrayServ[i];
        html3 = html3 + "</td>";
    }

    html3 = html3 + "</tr>";

    html3 = html3 + "</tbody>";
    html3 = html3 + "</table>";

   $('#inicial').html(html3);

}

// Variables globales 
var tiempoInicial;
var tiempoFinal;

var numAle;

var tiempoLlegada;
var tipoVehiculo;

var arrayServ = [];
var arrayFila = [];
var arrayServActual = [];
var arrayNumAle = [];
var arrayNumAle2 = [];

var suceso;
var serv;	

var html;
var html2;
var html3;

var decimales = 4;
var nivelDeSignificancia;
var salida0;
var salida1;
var salida2;

var c0;
var c1;
var c2;

function simulacion(){

    // $('#titulo5').html("<h1>Condiciones iniciales</h1>");
    // $('#condicion').html("<p>Número aleatorio entre 0 y 4 para el </p>");
    // $('#condicion2').html("<p>Número aleatorio entre 0 y 1 para la fila</p>");

	$('#titulo').html("<h1>Simulación</h1>");

	tiempoInicial = 0;
	// tiempoFinal = 60;
	// nivelDeSignificancia = 0.01;

	tiempo0();

    html = "<table class='table table-bordered table-hover'>";
    html = html + "<thead class='bg-tablac'>";

    html = html + "<tr>";  

    // Encabezado 
    html = html + "<th>Tiempo</th>";
    html = html + "<th>Suceso</th>";

    html = html + "<th>Servicio Rap.</th>";
    html = html + "<th>Servicio Gral1.</th>";
    html = html + "<th>Servicio Gral2.</th>";

    html = html + "<th>Fila Rap.</th>";
    html = html + "<th>Fila Gral1.</th>";
    html = html + "<th>Fila Gral2.</th>";

    html = html + "<th>Tiempo de Llegada.</th>";
    html = html + "<th>Tipo de Vehículo.</th>";
    html = html + "</tr>";

    html = html + "</thead>";
    html = html + "</tbody>";

    html = html + "<tr class='border-dotted'>";

    // Tiempo y suceso
    html = html + "<td>";
    html = html + tiempoInicial.toFixed(decimales);
    html = html + "</td>";
    html = html + "<td>-</td>";

    // Estado/Hasta el tiempo
    if(arrayServ[0] == 1){
    	random();
    	serv = Math.round10((-(1/10)*(60*(Math.log(1-numAle)))), -4);
    	arrayServActual[0] = serv;
    	html = html + "<td>";
        html = html + serv.toFixed(decimales);
        html = html + "</td>";
    }else{
    	html = html + "<td>";
        html = html + "-";
        html = html + "</td>";
    }        

    if(arrayServ[1] == 1){
    	random();
    	if(numAle >= 0 && numAle < 0.6){
    		serv = Math.round10(((3+5)*(numAle/0.6)), -4);
    	}else if(numAle >= 0.6 && numAle < 0.9){
    		serv = Math.round10(((8+5)*((numAle-0.6)/0.3)), -4);
    	}else if(numAle >= 0.9 && numAle <= 1){ 
    		serv = Math.round10(((13+5)*((numAle-0.9)/0.1)), -4);
    	}
    	arrayServActual[1] = serv;
    	html = html + "<td>";
        html = html + serv.toFixed(decimales);
        html = html + "</td>";
    }else{
    	html = html + "<td>";
        html = html + "-";
        html = html + "</td>";
    } 

    if(arrayServ[2] == 1){
    	random();
    	if(numAle >= 0 && numAle < 0.6){
    		serv = Math.round10(((3+5)*(numAle/0.6)), -4);
    	}else if(numAle >= 0.6 && numAle < 0.9){
    		serv = Math.round10(((8+5)*((numAle-0.6)/0.3)), -4);
    	}else if(numAle >= 0.9 && numAle <= 1){
    		serv = Math.round10(((13+5)*((numAle-0.9)/0.1)), -4);
    	}
    	arrayServActual[2] = serv;
    	html = html + "<td>";
        html = html + serv.toFixed(decimales);
        html = html + "</td>";
    }else{
    	html = html + "<td>";
        html = html + "-";
        html = html + "</td>";
    } 

    // Número en la fila
    html = html + "<td>";
    html = html + arrayFila[0];
    html = html + "</td>";

    html = html + "<td>";
    html = html + arrayFila[1];
    html = html + "</td>";

    html = html + "<td>";
    html = html + arrayFila[2];
    html = html + "</td>";

    llegada();

    html = html + "<td>";
    html = html + tiempoInicial.toFixed(decimales);
    html = html + "</td>";

    tipo();

    html = html + "<td>";
    html = html + tipoVehiculo;
    html = html + "</td>";

    html = html + "</tr>";

    while(tiempoInicial < tiempoFinal){

    	if(tiempoInicial < tiempoFinal){
    		simulacion2();
    	}
    }

    html = html + "</tbody>";
    html = html + "</table>";

    $('#simulacion').html(html);
    prueba();
    return false;    
}

function llegada(){
	random();
	tiempoLlegada = Math.round10((-(1/20)*(60*(Math.log(1-numAle)))), -4);
	tiempoInicial = Math.round10(tiempoInicial + tiempoLlegada,-4);
}

function tipo() {
	random();
	if(numAle < 0.3333){
		tipoVehiculo = "Rápida";
	}else{
		tipoVehiculo = "General";
	}
}

function simulacion2(){

	html = html + "<tr class='border-dotted'>";

	if(tipoVehiculo == "Rápida"){

		if(arrayFila[0] == 0){
			arrayFila[0] = arrayFila[0] + 1;
		}else if(arrayFila[0] == arrayFila[1] && arrayFila[1] == arrayFila[2] && arrayFila[2] == arrayFila[0]){
			arrayFila[0] = arrayFila[0] + 1;
		}else if(arrayFila[0] < arrayFila[1] && arrayFila[0] == arrayFila[2]){
			arrayFila[0] = arrayFila[0] + 1;
		}else if(arrayFila[0] == arrayFila[1] && arrayFila[0] < arrayFila[2]){
			arrayFila[0] = arrayFila[0] + 1;
		}else if(arrayFila[0] < arrayFila[1] && arrayFila[0] < arrayFila[2]){
			arrayFila[0] = arrayFila[0] + 1;
		}else if(arrayFila[0] > arrayFila[1] && arrayFila[1] < arrayFila[2]){
			arrayFila[1] = arrayFila[1] + 1;
		}else if(arrayFila[0] > arrayFila[1] && arrayFila[1] == arrayFila[2]){
			arrayFila[1] = arrayFila[1] + 1;
		}else if(arrayFila[0] > arrayFila[1] && arrayFila[1] > arrayFila[2]){
			arrayFila[2] = arrayFila[2] + 1;
		}
	}else if(tipoVehiculo == "General"){

		if(arrayFila[1] == 0){
			arrayFila[1] = arrayFila[1] + 1;
		}else if(arrayFila[1] == arrayFila[2]){
			arrayFila[1] = arrayFila[1] + 1;
		}else if(arrayFila[1] < arrayFila[2]){
			arrayFila[1] = arrayFila[1] + 1;
		}else if(arrayFila[2] == 0){
			arrayFila[2] = arrayFila[2] + 1;
		}else if(arrayFila[2] < arrayFila[1]){
			arrayFila[2] = arrayFila[2] + 1;
		}
	}

	if(tiempoInicial > arrayServActual[0] && arrayFila[0] > 0){
	
		c0 = "verdad";

		html = html + "<td>";
        html = html + arrayServActual[0].toFixed(decimales);
        html = html + "</td>";

		suceso = "Salida";

		html = html + "<td>";
        html = html + suceso;
        html = html + "</td>";

        random();
		arrayFila[0] = arrayFila[0] - 1;
		serv = Math.round10((-(1/10)*(60*(Math.log(1-numAle)))),-4);
		arrayServActual[0] = Math.round10(arrayServActual[0] + serv,-4);

		html = html + "<td>";
        html = html + arrayServActual[0].toFixed(decimales);
        html = html + "</td>";

        if(arrayServActual[1] == null || c1 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[1].toFixed(decimales);
	        html = html + "</td>";
        }

        if(arrayServActual[2] == null || c2 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[2].toFixed(decimales);
	        html = html + "</td>";
        }

        html = html + "<td>";
        html = html + arrayFila[0];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[1];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[2];
        html = html + "</td>";

        html = html + "<td>";
        html = html + tiempoInicial.toFixed(decimales);
        html = html + "</td>";

        html = html + "<td>";
        html = html + tipoVehiculo;
        html = html + "</td>";
	}else if(tiempoInicial > arrayServActual[1] && arrayFila[1] > 0){

		c1 = "verdad";

		html = html + "<td>";
        html = html + arrayServActual[1].toFixed(decimales);
        html = html + "</td>";

		suceso = "Salida";

		html = html + "<td>";
        html = html + suceso;
        html = html + "</td>";

		random();
		arrayFila[1] = arrayFila[1] - 1;
		if(numAle >= 0 && numAle < 0.6){
    		serv = Math.round10(((3+5)*(numAle/0.6)), -4);
    	}else if(numAle >= 0.6 && numAle < 0.9){
    		serv = Math.round10(((8+5)*((numAle-0.6)/0.3)), -4);
    	}else if(numAle >= 0.9 && numAle <= 1){
    		serv = Math.round10(((13+5)*((numAle-0.9)/0.1)), -4);
    	}
		arrayServActual[1] = Math.round10(arrayServActual[1] + serv, -4);

		if(arrayServActual[0] == null || c0 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[0].toFixed(decimales);
	        html = html + "</td>";
        }

        html = html + "<td>";
        html = html + arrayServActual[1].toFixed(decimales);
        html = html + "</td>";

        if(arrayServActual[2] == null || c2 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[2].toFixed(decimales);
	        html = html + "</td>";
        }

        html = html + "<td>";
        html = html + arrayFila[0];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[1];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[2];
        html = html + "</td>";

        html = html + "<td>";
        html = html + tiempoInicial.toFixed(decimales);
        html = html + "</td>";

        html = html + "<td>";
        html = html + tipoVehiculo;
        html = html + "</td>";

        // General 2, servicio y fila > 0
	}else if(tiempoInicial > arrayServActual[2] && arrayFila[2] > 0){

		c2 = "verdad";

		html = html + "<td>";
        html = html + arrayServActual[2].toFixed(decimales);
        html = html + "</td>";

		suceso = "Salida";

		html = html + "<td>";
        html = html + suceso;
        html = html + "</td>";

		random();
		arrayFila[2] = arrayFila[2] - 1;
		if(numAle >= 0 && numAle < 0.6){
    		serv = Math.round10(((3+5)*(numAle/0.6)), -4);
    	}else if(numAle >= 0.6 && numAle < 0.9){
    		serv = Math.round10(((8+5)*((numAle-0.6)/0.3)), -4);
    	}else if(numAle >= 0.9 && numAle <= 1){
    		serv = Math.round10(((13+5)*((numAle-0.9)/0.1)), -4);
    	}
		arrayServActual[2] = Math.round10(arrayServActual[2] + serv,-4);
		if(arrayServActual[0] == null || c0 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[0].toFixed(decimales);
	        html = html + "</td>";
        }

        if(arrayServActual[1] == null || c1 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[1].toFixed(decimales);
	        html = html + "</td>";
        }

        html = html + "<td>";
        html = html + arrayServActual[2].toFixed(decimales);
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[0];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[1];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[2];
        html = html + "</td>";

        html = html + "<td>";
        html = html + tiempoInicial.toFixed(decimales);
        html = html + "</td>";

        html = html + "<td>";
        html = html + tipoVehiculo;
        html = html + "</td>";

        // Rapido, servicio y fila = 0
	}else if(tiempoInicial > arrayServActual[0] && arrayFila[0] == 0 && salida0 != arrayServActual[0]){

		c0 = "falso";
		if(arrayServActual[0] == null){
        	html = html + "<td>";
	        html = html + salida0.toFixed(decimales);
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[0].toFixed(decimales);
	        html = html + "</td>";
        }

		suceso = "Salida";

		html = html + "<td>";
        html = html + suceso;
        html = html + "</td>";

        salida0 = arrayServActual[0];

    	html = html + "<td>";
        html = html + "-";
        html = html + "</td>";

        if(arrayServActual[1] == null || c1 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[1].toFixed(decimales);
	        html = html + "</td>";
        }

        if(arrayServActual[2] == null || c2 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[2].toFixed(decimales);
	        html = html + "</td>";
        }

        html = html + "<td>";
        html = html + arrayFila[0];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[1];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[2];
        html = html + "</td>";

        html = html + "<td>";
        html = html + tiempoInicial.toFixed(decimales);
        html = html + "</td>";

        html = html + "<td>";
        html = html + tipoVehiculo;
        html = html + "</td>";

        // General 1, servicio y fila = 0
	}else if(tiempoInicial > arrayServActual[1] && arrayFila[1] == 0 && salida1 != arrayServActual[1]){

		c1 = "falso";
		if(arrayServActual[1] == null){
        	html = html + "<td>";
	        html = html + salida1.toFixed(decimales);
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[1].toFixed(decimales);
	        html = html + "</td>";
        }

		suceso = "Salida";

		html = html + "<td>";
        html = html + suceso;
        html = html + "</td>";

		if(arrayServActual[0] == null || c0 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[0].toFixed(decimales);
	        html = html + "</td>";
        }

        salida1 = arrayServActual[1];

        html = html + "<td>";
        html = html + "-";
        html = html + "</td>";

        if(arrayServActual[2] == null || c2 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[2].toFixed(decimales);
	        html = html + "</td>";
        }

        html = html + "<td>";
        html = html + arrayFila[0];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[1];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[2];
        html = html + "</td>";

        html = html + "<td>";
        html = html + tiempoInicial.toFixed(decimales);
        html = html + "</td>";

        html = html + "<td>";
        html = html + tipoVehiculo;
        html = html + "</td>";
	}else if(tiempoInicial > arrayServActual[2] && arrayFila[2] == 0 && salida2 != arrayServActual[2]){

		c2 = "falso";
		if(arrayServActual[2] == null){
        	html = html + "<td>";
	        html = html + salida2.toFixed(decimales);
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[2].toFixed(decimales);
	        html = html + "</td>";
        }

		suceso = "Salida";

		html = html + "<td>";
        html = html + suceso;
        html = html + "</td>";

		if(arrayServActual[0] == null){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[0].toFixed(decimales);
	        html = html + "</td>";
        }

        if(arrayServActual[1] == null){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[1].toFixed(decimales);
	        html = html + "</td>";
        }

        salida2 = arrayServActual[2];

        html = html + "<td>";
        html = html + "-";
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[0];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[1];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[2];
        html = html + "</td>";

        html = html + "<td>";
        html = html + tiempoInicial.toFixed(decimales);
        html = html + "</td>";

        html = html + "<td>";
        html = html + tipoVehiculo;
        html = html + "</td>";

        // Rapido, servicio y fila = 0
	}else{

		html = html + "<td>";
        html = html + tiempoInicial.toFixed(decimales);
        html = html + "</td>";

		suceso = "Llegada";

		html = html + "<td>";
        html = html + suceso;
        html = html + "</td>";

        if(arrayFila[0] > 0 && arrayServActual[0] == null){
        	random();
			arrayFila[0] = arrayFila[0] - 1;
			serv = Math.round10((-(1/10)*(60*(Math.log(1-numAle)))), -4);
			arrayServActual[0] = serv;

        	html = html + "<td>";
	        html = html + arrayServActual[0].toFixed(decimales);
	        html = html + "</td>";
        }else if((arrayFila[0] == 0 && arrayServActual[0] == null) || c0 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[0].toFixed(decimales);
	        html = html + "</td>";
        }

		
        if(arrayFila[1] > 0 && arrayServActual[1] == null){
        	random();
			arrayFila[1] = arrayFila[1] - 1;
			if(numAle >= 0 && numAle < 0.6){
	    		serv = Math.round10(((3+5)*(numAle/0.6)),-4);
	    	}else if(numAle >= 0.6 && numAle < 0.9){
	    		serv = Math.round10(((8+5)*((numAle-0.6)/0.3)),-4);
	    	}else if(numAle >= 0.9 && numAle <= 1){
	    		serv = Math.round10(((13+5)*((numAle-0.9)/0.1)),-4);
	    	}
			arrayServActual[1] = serv;
        	html = html + "<td>";
	        html = html + arrayServActual[1].toFixed(decimales);
	        html = html + "</td>";
        }else if((arrayFila[1] == 0 && arrayServActual[1] == null) || c1 =="falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[1].toFixed(decimales);
	        html = html + "</td>";
        }

        if(arrayFila[2] > 0 && arrayServActual[2] == null){
        	random();
			arrayFila[2] = arrayFila[2] - 1;
			if(numAle >= 0 && numAle < 0.6){
	    		serv = Math.round10(((3+5)*(numAle/0.6)),-4);
	    	}else if(numAle >= 0.6 && numAle < 0.9){
	    		serv = Math.round10(((8+5)*((numAle-0.6)/0.3)),-4);
	    	}else if(numAle >= 0.9 && numAle <= 1){
	    		serv = Math.round10(((13+5)*((numAle-0.9)/0.1)),-4);
	    	}
			arrayServActual[2] = serv;
        	html = html + "<td>";
	        html = html + arrayServActual[2].toFixed(decimales);
	        html = html + "</td>";
        }else if((arrayFila[2] == 0 && arrayServActual[2] == null) || c2 == "falso"){
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + arrayServActual[2].toFixed(decimales);
	        html = html + "</td>";
        }

        html = html + "<td>";
        html = html + arrayFila[0];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[1];
        html = html + "</td>";

        html = html + "<td>";
        html = html + arrayFila[2];
        html = html + "</td>";

        llegada();

        html = html + "<td>";
        html = html + tiempoInicial.toFixed(decimales);
        html = html + "</td>";

        tipo();

        html = html + "<td>";
        html = html + tipoVehiculo;
        html = html + "</td>";

	}

	html = html + "</tr>";
return false;
}

$("#formTime").on("submit", function(){

	tiempoInicial = "";
	tiempoFinal = "";

	numAle = "";

	tiempoLlegada = "";
	tipoVehiculo = "";

	arrayNumAle = [];

	html = "";
	html2 = "";

	arrayPos = [];
	arraynumAleOrd = [];
	arrayDisAcum = [];
	arrayDesAbs = [];
	
	if($("#tiempo").val() < 0 || $("#tiempo").val() == 0){
		$("#error").html("Por favor ingrese un tiempo mayor a 0");
	}else{
		tiempoFinal = $("#tiempo").val();
		nivelDeSignificancia = $("#significancia").val();
		
		simulacion();
	}
	return false;
});

var arrayPos = [];
var arraynumAleOrd = [];
var arrayDisAcum = [];
var arrayDesAbs = [];
var max;

function prueba(){

	$('#titulo2').html("<h1>Prueba de Kolmogorov-Smirnov</h1>");

	shellSort();

	html2 = "<table class='table table-bordered table-hover'>";
    html2 = html2 + "<thead class='bg-tablac'>";

	// Encabezado 
    html2 = html2 + "<tr>";                	
    html2 = html2 + "<th>Posición</th>";
    html2 = html2 + "<th>Número aleatorio</th>";
    html2 = html2 + "<th>Número aleatorio ordenado</th>";
    html2 = html2 + "<th>Distribución acumulada</th>";
    html2 = html2 + "<th>Desvición absoluta</th>";
    html2 = html2 + "</tr>";

    html2 = html2 + "</thead>";
    html2 = html2 + "</tbody>";

    html2 = html2 + "<tr class='border-dotted'>";

	for (var i = 0; i < arrayNumAle.length; i++) {
		arrayPos.push(i+1);

		arrayDisAcum.push((arrayPos[i]/arrayNumAle.length).toFixed(decimales));

		arrayDesAbs.push(Math.abs(arraynumAleOrd[i] - arrayDisAcum[i]).toFixed(decimales));

	}

	max = Math.round10(Math.max.apply(null,arrayDesAbs),-4);

    for (var i = 0; i < arrayNumAle.length; i++) {

        html2 = html2 + "<td>";
        html2 = html2 + arrayPos[i];
        html2 = html2 + "</td>";

        html2 = html2 + "<td>";
        html2 = html2 + arrayNumAle2[i];
        html2 = html2 + "</td>";

        html2 = html2 + "<td>";
        html2 = html2 + arraynumAleOrd[i];
        html2 = html2 + "</td>";

        html2 = html2 + "<td>";
        html2 = html2 + arrayDisAcum[i];
        html2 = html2 + "</td>";

        if(max == arrayDesAbs[i]){
            html2 = html2 + "<td bgcolor='#154fa5' style='color: #FFFFFF'>";
            html2 = html2 + arrayDesAbs[i];
            html2 = html2 + "</td>";
        }else{
            html2 = html2 + "<td>";
            html2 = html2 + arrayDesAbs[i];
            html2 = html2 + "</td>";
        }

        html2 = html2 + "</tr>";
    }

    html2 = html2 + "</tbody>";
    html2 = html2 + "</table>";

	$('#prueba').html(html2);
	$('#num').html("Total de numeros aleatorios: " + arrayNumAle.length);

    $('#titulo4').html("<h1>Prueba de hipótesis</h1>");

	$('#est').html("Estadístico: "+ max);
	ks();
	return false;
}

function shellSort() {
	arraynumAleOrd = arrayNumAle;
	var increment = arraynumAleOrd.length / 2;
	while (increment > 0) {
	    for (i = increment; i < arraynumAleOrd.length; i++) {
	        var j = i;
	        var temp = arraynumAleOrd[i];

	        while (j >= increment && arraynumAleOrd[j-increment] > temp) {
	            arraynumAleOrd[j] = arraynumAleOrd[j-increment];
	            j = j - increment;
	        }

	        arraynumAleOrd[j] = temp;
	    }

	    if (increment == 2) {
	        increment = 1;
	    } else {
	        increment = parseInt(increment*5 / 11);
	    }
	}
	return arraynumAleOrd;	 
}

TABLA_KS = {
0.10 : [
	0.95000,0.77639,0.63604,0.56522,0.50945,
	0.46799,0.43607,0.40962,0.38746,0.36866,
	0.35242,0.33815,0.32549,0.31417,0.30397,
	0.29472,0.28627,0.27851,0.27136,0.26473,
	0.25858,0.25283,0.24746,0.24242,0.23768,
	0.23320,0.22898,0.22497,0.22117,0.21756,
	0.21412,0.21085,0.20771,0.21472,0.20185,
	1.22
],
0.05 : [
	0.97500,0.84189,0.70760,0.62394,0.56328,
	0.51926,0.48342,0.45427,0.43001,0.40925,
	0.39122,0.37543,0.36143,0.34890,0.33750,
	0.32733,0.31796,0.30936,0.30143,0.29408,
	0.28724,0.28087,0.27491,0.26931,0.26404,
	0.25908,0.25438,0.24993,0.24571,0.24170,
	0.23788,0.23424,0.23076,0.22743,0.22425,
	1.36
],
0.01 : [
	0.99500,0.92929,0.82900,0.73424,0.66853,
	0.61661,0.57581,0.54179,0.51332,0.48893,
	0.46770,0.44905,0.43247,0.41762,0.40420,
	0.39201,0.38086,0.37062,0.36117,0.35241,
	0.34426,0.33666,0.32954,0.32286,0.31657,
	0.30963,0.30502,0.29971,0.29466,0.28986,
	0.28529,0.28094,0.27577,0.27271,0.26897,
	1.63
]
}

function ks(){
	var ks;
	var n = arrayNumAle.length;
	var alfa = nivelDeSignificancia;

	if(n <= 35){
		ks = TABLA_KS[alfa][n-1];
	}else{
		ks = TABLA_KS[alfa][35]/Math.sqrt(n);
	}

	ks = Math.round10(ks,-4);
	ks = ks.toFixed(decimales);

	$('#his').html("Histórico: " + ks);

    $('#hip').html("<h1>Hipótesis nula</h1>");
    $('#nul').html("Estadístico < Histórico");
    $('#pru').html(max + " < " + ks);

	if(max < ks){
		$('#resultado').html("No hay evidencia suficiente para rechazar la hipótesis nula, por lo tanto los números provienen de una distribución uniforme.");
	}else{
		$('#resultado').html("Hay evidencia suficiente para rechazar la hipótesis nula, por lo tanto los números no provienen de una distribución uniforme.");
	}

}
