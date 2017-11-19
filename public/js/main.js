$(document).ready(function(){

	simulacion();

});

(function() {
  /**
   * Ajuste decimal de un número.
   *
   * @param {String}  tipo  El tipo de ajuste.
   * @param {Number}  valor El numero.
   * @param {Integer} exp   El exponente (el logaritmo 10 del ajuste base).
   * @returns {Number} El valor ajustado.
   */
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

function random() {	
	arrayNumAle = [];

	numAle = Math.round10(Math.random(),-4);
	arrayNumAle.push(numAle);
}

// Tiempo 0
function tiempo0() {

	var numAleFila;
	var numAleServ;

	var numMax = 3;    	

	maxFila = 4;
	minFila = 0;

	maxServ = 1;
	minServ = 0;


	for (var i = 0; i < numMax; i++) {
		numAleFila = Math.floor(Math.random() * (maxFila - minFila)) + minFila;
		arrayFila.push(numAleFila);
	}

	for (var i = 0; i < numMax; i++) {
		numAleServ = Math.floor(Math.random() * (maxServ - minServ)) + minServ;
		arrayServ.push(numAleServ);
	}
}

// Variables globales 
var tiempoInicial;
var tiempoFinal;

var numAle;

var tiempoLlegada;
var tipoVehiculo;

var arrayFila = [];
var arrayServ = [];
var arrayNumAle = [];

var tempRapFila;
var tempGral1Fila;
var tempGral2Fila;

var tempRapServ;
var tempGral1Serv;
var tempGral2Serv;

var html = "";

function simulacion(){

		tiempoInicial = 0;
		tiempoFinal = 10;

		tiempo0();

		var serv = "";		

        html = html + "<table class='table table-bordered'>";
        html = html + "<thead>";

        html = html + "<tr>";  

		// Encabezado 
        html = html + "<tr>";                	
        html = html + "<th></th>";
        html = html + "<th></th>";
        html = html + "<th>Estado</th>";
        html = html + "<th>Hasta</th>";
        html = html + "<th>el tiempo</th>";

        html = html + "<th>Número</th>";
        html = html + "<th>en la</th>";
        html = html + "<th>fila</th>";

        html = html + "<th>Siguiente</th>";
        html = html + "<th>llegada</th>";
        html = html + "</tr>";

        // Encabezado 
        html = html + "<th>Tiempo</th>";
        html = html + "<th>Suceso</th>";

        html = html + "<th>Rap.</th>";
        html = html + "<th>Gral1.</th>";
        html = html + "<th>Gral2.</th>";

        html = html + "<th>Rap.</th>";
        html = html + "<th>Gral1.</th>";
        html = html + "<th>Gral2.</th>";

        html = html + "<th>Tiempo.</th>";
        html = html + "<th>Tipo.</th>";
        html = html + "</tr>";

        html = html + "</thead>";
        html = html + "</tbody>";

        html = html + "<tr class='border-dotted'>";

        // Tiempo y suceso
        html = html + "<td>0,000</td>";
        html = html + "<td><center>-</center></td>";

        // Estado/Hasta el tiempo

        if(arrayServ[0] == 1){
        	random();
        	serv = Math.round10((-(1/10)*60*(Math.log(1-numAle))), -4);
        	html = html + "<td>";
	        html = html + serv;
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        }        

        if(arrayServ[1] == 1){
        	random();
        	serv = Math.round10((-(1/10)*60*(Math.log(1-numAle))), -4);
        	html = html + "<td>";
	        html = html + serv;
	        html = html + "</td>";
        }else{
        	html = html + "<td>";
	        html = html + "-";
	        html = html + "</td>";
        } 

        if(arrayServ[2] == 1){
        	random();
        	serv = Math.round10((-(1/10)*60*(Math.log(1-numAle))), -4);
        	html = html + "<td>";
	        html = html + serv;
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
        html = html + tiempoLlegada;
        html = html + "</td>";

        tipo();

        html = html + "<td>";
        html = html + tipoVehiculo;
        html = html + "</td>";

        tiempoInicial = tiempoInicial + tiempoLlegada;

        html = html + tiempoInicial;

        // while(tiempoInicial < tiempoFinal){
        	// tiempoInicial = tiempoInicial +1;
        	simulacion2();
        // }

        
}

function llegada(){
	random();
	tiempoLlegada = Math.round10((-(1/20)*60*(Math.log(1-numAle))), -4);
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
	if(tipoVehiculo == "Rápida"){

		if(arrayFila[0] == 0){
			arrayFila[0] = arrayFila[0] + 1;
		}else if(arrayFila[0] == arrayFila[1] && arrayFila[1] == arrayFila[2] && arrayFila[2] == arrayFila[0]){
			arrayFila[0] = arrayFila[0] + 1;
		}else if(arrayFila[0] < arrayFila[1] && arrayFila[0] == arrayFila[2]){

		}else if(arrayFila[0])
	}

	$('#simulacion').html(arrayFila[0]);
}