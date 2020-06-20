$('a[href*="#"]').on('click', function(e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 300, 'linear');
});

$(window).scroll(function(event) {
    var top = $(window).scrollTop();
    if (top >= 650) {
        $('#btnCall').hide();
    } else {
        $('#btnCall').show();

    }
});