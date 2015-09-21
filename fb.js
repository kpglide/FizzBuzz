$(document).ready(function() {

	var ready = true;

	$('#submit').on('click', fizzHandler); 
	$('input').keypress(function(event) {
		if (event.which == 13) {
			fizzHandler();
		}
	});
	$('#reset').on('click', reset);

	function fizzHandler() {
		if (ready == true) {
			fizzBuzz();
			ready = false;
		} 
	}

	function reset() {
		$('#Fizz-Buzz-Container').empty();
		ready = true;
		$('input').val('');
	}


	function fizzBuzz() {
		user_input = parseInt($("input").val());
		
		if (user_input == NaN || user_input % 1 != 0) {
			$("input").val('Error: You must enter a whole number');
			ready = true;
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
		}
		
	}

});