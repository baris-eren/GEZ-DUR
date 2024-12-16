document.querySelectorAll('.city').forEach(city => {
    city.addEventListener('click', function() {
        alert(`You clicked on ${this.getAttribute('data-iladi')}`);
    });
});
