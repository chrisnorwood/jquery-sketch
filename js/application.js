$(document).ready(function(){
	
	var dimension = 16;

	var $row = $('<div />', {class: 'row'})
	var $square = $('<div />', {class: 'square'});
	
	// This fills a row with squares, amount according to dimension variable
	for(var i = 0; i < dimension; i++) {
		$row.append($square.clone());
	}

	// This fills the grid with rows, amount according to dimension variable
	for(var i = 0; i < dimension; i++) {
		$('#grid').append($row.clone());
	}

	$('.square').on('mouseenter', function() {
		$(this).css('background', '#000');
	});

});