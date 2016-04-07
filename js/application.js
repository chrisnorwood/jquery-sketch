$(document).ready(function(){
	drawGrid(16);
	sketch();
	
	// Resize Button
	$('button').filter('.resize').on('click', function(){
		var dim = prompt('How many boxes wide for the grid?');

		removeGrid();
		drawGrid(dim);

		$('.square').css({height: (480/dim)+'px', width: (480/dim)+'px'});

		sketch();
	});

	// Reset Button
	$('button').filter('.reset').on('click', function() {
		eraseGrid();
	});
});

// Helper Functions

var drawGrid = function (dim) {
	var $row = $('<div />', {class: 'row'})
	var $square_init = $('<div />', {class: 'square'});
	
	// This fills a row with squares, amount according to gridWidth variable
	for(var i = 0; i < dim; i++) {
		$row.append($square_init.clone());
	}

	// This fills the grid with rows, amount according to gridWidth variable
	for(var i = 0; i < dim; i++) {
		$('#grid').append($row.clone());
	}
};

var removeGrid = function () {
	$('.square').remove();
	$('.row').remove();
};

var sketch = function () {
	$('.square').on('mouseenter', function() {
		$(this).css('background', '#000');
	});
};

var eraseGrid = function () {
	$('.square').css('background', '#fff');
};


