function init () {
    $('#whonerdselect').change(function () {
        $('#whonerdselect option[value=pls]').remove();
        $('#whonerdtext').text('Wow rly what a nerd lel');
    });

    $('#revealnerdbtn').click(function () {
        $('#revealnerdtext').append('Shak is a nerd ');
    });
}