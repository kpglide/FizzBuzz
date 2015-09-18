$(document).ready(function() {

	var pressed = false;

	$('button').on('click', fizzHandler); 

	function fizzHandler() {
		if (pressed == false) {
			fizzBuzz();
			pressed = true;
			console.log(pressed);
		} else if (pressed == true) {
			reset(); 
			pressed = false;
			console.log(pressed);
		}
	}

	function reset() {
		$('#Fizz-Buzz-Container').empty();
	}


	function fizzBuzz() {
		for (var counter = 1; counter < 101; counter++) {
			if (counter % 5 == 0 && counter % 3 == 0) {
				new_elem = "<p>" + 'FizzBuzz' + "</p>";
				$('#Fizz-Buzz-Container').append(new_elem);
			}
			else if (counter % 5 == 0) {
				new_elem = "<p>" + 'Buzz' + "</p>";
				$('#Fizz-Buzz-Container').append(new_elem);
			}
			else if (counter % 3 == 0) {
				new_elem = "<p>" + 'Fizz' + "</p>";
				$('#Fizz-Buzz-Container').append(new_elem);
			} else {
				new_elem = "<p>" + counter + "</p>";
				$('#Fizz-Buzz-Container').append(new_elem);
			}
		}
	}

});