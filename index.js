function init () {
	$('#yesbtn').click(function () {
		$('#part2').show();
	});

    $('#whonerdselect').change(function () {
        $('#whonerdselect option[value=pls]').remove();
        $('#whonerdtext').text('Wow rly what a nerd lel');
        $('#part3').show();
    });

    $('#revealnerdbtn').click(function () {
    	var el = $('#revealnerdtext');
    	el.text(el.text() + 'Shak is a nerd ');
    });
}