// var dates = document.querySelectorAll('.dates p');

// dates.forEach(element => {
//     element.addEventListener('click', function() {
//         dates.classList.toggle('red');
//     });
// });



var dates = document.querySelectorAll('.dates p');

dates.forEach(element => {
    element.addEventListener('click', function() {
        this.classList.toggle('red');
    });
});