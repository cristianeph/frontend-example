/**
 * Se usa jquery con el objetivo de manipular los elementos del dom con mas facilidad
 */

var numbers = [];

$(document).ready(function($){
	
	$("form").submit(function(event){
		
		/* prevenimos evento automatico de envio 
		 * de formulario al servidor*/
		
		event.preventDefault();
		
		var number = $("input").val();
		
		/* validamos que el valor ingresado se entero, 
		 * sino mostramos un mensaje*/
		
		if(validateInteger(number) == true){
			
			/* validamos que el valor ingresado no se repita, 
			 * sino mostramos un mensaje*/

			if(validateRepetitive(parseInt(number)) == true){

				numbers.push(parseInt(number));
				
				printNumbers(parseInt(number));
				
			}else{
				
				alert("el valor que ha ingresado esta repetido, ingrese un valor correcto");
				
			}
			
		}else{
			
			alert("el valor que ha ingresado no es entero, ingrese un valor correcto");
			
		}
		
		/* sea cual sea el caso el valor del 
		 * input se resetea a vacio*/
		
		$("input").val("");
		
	});
	
});


/* metodo para validar numeros repetidos */
function validateRepetitive(number){
		
	if(numbers.length == 0){
		
		return true;
		
	}else{
		
		console.log(numbers.indexOf(number));
		
		if(numbers.indexOf(number) == -1){
			
			return true;
			
		}else{
			
			return false;
			
		}
		
	}
	
}

/* funcion que sirve para imprimir los 
 * numeros enteros ya validados del array 
 * en el html y animarlos con la funcion 
 * animate de jquery*/
function printNumbers(number){
	
	console.log(numbers.sort(sortIntegers));
		
	$(".result ul").append("<li class='" + number + "'><span>" + number + "</span></li>").delay(1000);
		
	$(numbers).each(function(i, item){
		
		var element = $(".result ul ." +  item);
		
		/* se calcula el espacio hacia la izquierda por 
		 * el ancho fijo del cuadro segun la posicion de 
		 * elemento del array*/
		var width = (i == 0) ? 0 : (72 * i);
		
		/* se manda a consola el valor calculado para ver
		 * posibles errores*/
		console.log(width);
		
		element.animate({
			left : "+" + width + "px"
		}, 1000);
		
	});
	
}

/* function para ordenar los numeros 
 * enteros*/
function sortIntegers(a, b){
	
	return a - b;
	
}

/* funcion para validar los numeros 
 * enteros*/
function validateInteger(value){
	
	if( (!isNaN(value)) && 
		((parseFloat(value) % 1) == 0)){
		
		return true;
		
	}else{
		
		return false;
		
	}
	
}