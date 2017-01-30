/**
 * Se usa jquery con el objetivo de manipular los elementos del dom con mas facilidad
 */

var numbers = [];

$(document).ready(function($){
	
	$("form").submit(function(event){
		
		event.preventDefault();
		
		var number = $("input").val();
		
		if(validateInteger(number) == true){
			
			numbers.push(parseInt(number));
			
			console.log(numbers.sort(sortIntegers));
			
			printNumbers(numbers);
			
		}else{
			
			alert("el valor que ha ingresado no es entero, ingrese un valor correcto");
			
		}
		
		$("input").val("");
		
	});
	
});

function printNumbers(numbers){
	
	$(".result ul li").remove();
	
	$(numbers).each(function(i, item){
		
		$(".result ul").append("<li><span>" + item + "</span></li>");
		
	});
	
}

function sortIntegers(a, b){
	
	return a - b;
	
}

function validateInteger(value){
	
	var x;
	
	if(isNaN(value)){
		return false;
	}
	
	x = parseFloat(value);
	
	return (x | 0) === x;
	
}