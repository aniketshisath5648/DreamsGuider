// var color = document.getElementById('red');
// var date = document.getElementById('dates')

// date.addEventListener('click',array.forEach(element => {
//     date.classList.toggle('red');
// });
// )


var dates = document.querySelectorAll('.dates p');

dates.forEach(element => {
    element.addEventListener('click', function() {
        dates.classList.toggle('red');
    });
});


// var dates = document.querySelectorAll('.dates p');

// dates.forEach(element => {
//     element.addEventListener('click', function() {
//         this.style.backgroundColor = this.style.backgroundColor === 'red'? '' : 'red';
//     });
// });