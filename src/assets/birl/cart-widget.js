// session storage
// check if widget_activated is set to true in session storage

document.addEventListener("DOMContentLoaded", function () {

    let widget_activated = sessionStorage.getItem('widget_activated');
    let widget = document.querySelector('.birl-cart-widget');

    if (widget_activated != "true") {
        widget.style.display = 'block';
        setTimeout(() => {
            widget.style.opacity = '1';
        }, 100);

    }

    widget.querySelector(`button`).addEventListener('click', function () {

        openDropdown();

    });

});