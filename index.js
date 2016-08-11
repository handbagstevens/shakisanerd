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
        $('#truebtn').show();
    });

    $('#truebtn').click(function () {
        $('#part4').show();
    })

    function repeatStrToLen (str, len) {
        var n = Math.ceil(len / str.length);
        var ret = str.repeat(n);
        return ret.slice(0, len);
    }

    var nameinput = $('#nameinput')
    nameinput.on('change keydown paste', function () {
        setTimeout(function () {
            var len = nameinput.val().length;
            var newVal = repeatStrToLen('Shak', Math.min(len, 4));
            nameinput.val(newVal);
        });
    });

    var commentinput = $('#commentinput');
    commentinput.on('change keydown paste', function () {
        setTimeout(function () {
            var len = commentinput.val().length;
            $('#commentbtn').prop('disabled', !len);
            var newVal = repeatStrToLen('I am a nerd ', len);
            commentinput.val(newVal);
        });
    });

    $('#commentbtn').click(function () {
        $('#commenttext').text('omg nerd imo');
    });
}