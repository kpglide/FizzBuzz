$(document).ready(function() {

	var ready = true;

	$('#submit').on('click', fizzHandler); 
	$('input').keypress(function(event) {
		if (event.which == 13) {
			console.log('pressed');
			fizzHandler();
		}
	});
	$('#reset').on('click', reset);

	function fizzHandler() {
		if (ready == true) {
			fizzBuzz();
		} 
	}

	function reset() {
		$('#Fizz-Buzz-Container').empty();
		ready = true;
		$('input').val('');
	}


	function fizzBuzz() {
		user_input = parseInt($("input").val());
		console.log(user_input);
		if (user_input == NaN || user_input % 1 != 0) {
			reset();
			$("input").val('Error: You must enter a whole number');
			console.log(ready);
		} else {
			for (var counter = 1; counter <= user_input; counter++) {
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
			ready = false;
		}
		
	}

});