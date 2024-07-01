const pens = document.querySelector('.pens');
const submit = document.querySelector('.submit');

pens.addEventListener('click', ()=>{
    pens.classList.add('activeted', 'pending-activeted','pens');
    submit.classList.remove('activeted', 'ubmit-activeted');
})

submit.addEventListener('click', ()=>{
    submit.classList.add('activeted', 'ubmit-activeted');
    pens.classList.remove('activeted', 'pending-activeted','pens');
})




// const pens = document.querySelector('.pens');
// const submit = document.querySelector('.submit');

// pens.addEventListener('click', ()=>{
//     submit.classList.remove('activeted', 'submit-activeted');
// })

// submit.addEventListener('click', ()=>{
//     submit.classList.add('activeted', 'submit-activeted');
//     pens.classList.remove('activeted', 'pending-activeted');
// })




const lowerOptions = document.querySelectorAll('.lower-options');
const homeworkOptions = document.querySelectorAll('.homework-option p');

// Add the active class to the default section and link
lowerOptions[0].classList.add('active');
homeworkOptions[0].classList.add('active');

homeworkOptions.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    lowerOptions.forEach((section) => {
      section.classList.remove('active');
    });
    homeworkOptions.forEach((link) => {
      link.classList.remove('active');
    });
    const targetId = link.getAttribute('data-target');
    const targetSection = document.querySelector(`.${targetId}`);
    targetSection.classList.add('active');
    link.classList.add('active');
  });
});
