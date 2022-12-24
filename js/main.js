// Add smooth scrolling on all links inside the navbar
$("#nav-sandsak a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
            scrollTop: ($(hash).offset().top+1)
        }, 500);
    }
});

// Load Google map
$('#btn-gmap').click(function() {
    $("#gmap").attr("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82898.44843563535!2d6.081117396484366!3d49.51139079471845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47954823e01226b9%3A0xf42d4ab785cec39a!2sSandsak%20Muaythaiplaza2004%20Boxing%20Club%20Asbl%20Asbl!5e0!3m2!1sen!2slu!4v1648918982747!5m2!1sen!2slu");
    $("#gmap").css("display", "block");
    $("#block-gmap").css("display", "none");
});