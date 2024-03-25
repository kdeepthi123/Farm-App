(function ($) {
    "use strict";

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 40) {
            $('.navbar').addClass('sticky-top');
        } else {
            $('.navbar').removeClass('sticky-top');
        }
    });
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


})(jQuery);

function sendEmail(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way
    
    var userEmail = document.getElementById('userEmail').value;
    var recipientEmail = 'info@example.com';
    var subject = 'New Sign Up';
    var body = 'New user signed up with email: ' + userEmail;
    
    var mailtoLink = 'mailto:' + recipientEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    
    // Open user's default email client with pre-filled email
    window.location.href = mailtoLink;
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting in the traditional way
    
    var name = document.querySelector('#contactForm input[placeholder="Your Name"]').value;
    var email = document.querySelector('#contactForm input[placeholder="Your Email"]').value;
    var subject = document.querySelector('#contactForm input[placeholder="Subject"]').value;
    var message = document.querySelector('#contactForm textarea').value;
    var recipientEmail = 'info@example.com';

    var body = 'Name: ' + name + '\nEmail: ' + email + '\nSubject: ' + subject + '\nMessage: ' + message;

    var mailtoLink = 'mailto:' + recipientEmail + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    // Open user's default email client with pre-filled email
    window.location.href = mailtoLink;
});