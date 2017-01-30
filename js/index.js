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
				
				console.log(numbers.sort(sortIntegers));
				
				printNumbers(numbers);
				
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
 * en el html*/
function printNumbers(numbers){
	
	$(".result ul li").remove();
	
	$(numbers).each(function(i, item){
		
		$(".result ul").append("<li><span>" + item + "</span></li>");
		
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