



const loweroption = document.querySelectorAll('.lower-options');
const divis = document.querySelectorAll('.homework-option p');

// Add the active class to the default section and link
loweroption[0].classList.add('active');
divis[0].classList.add('active');

divis.forEach((link) => {
  link.addEventListener('click', (a) => {
    a.preventDefault();
    loweroption.forEach((section) => {
      section.classList.remove('active');
    });
    divis.forEach((link) => {
      link.classList.remove('active');
    });
    const targetid = link.getAttribute('data-target');
    const targetsection = document.querySelector(`.${targetid}`);
    targetsection.classList.add('active');
    link.classList.add('active');
  });
});





// const pending = document.getElementById('pens');
// pending.addEventListener('click',()=>{
//     let activeted = document.getElementsByClassName('activeted')[0];
//     if (activeted) {
//         activeted.classList.remove('pending-activeted', 'submit-activeted', 'evaluate-activeted', 'activeted');
//     }
//     pending.classList.add('activeted', 'pending-activeted');
// })

// const submit = document.getElementById('submit');
// submit.addEventListener('click',()=>{
//     let activeted = document.getElementsByClassName('activeted')[0];
//     if (activeted) {
//         activeted.classList.remove('pending-activeted', 'submit-activeted', 'evaluate-activeted', 'activeted');
//     }
//     submit.classList.add('activeted', 'submit-activeted');
// })

// const evaluate = document.getElementById('evaluate');
// evaluate.addEventListener('click',()=>{
//     let activeted = document.getElementsByClassName('activeted')[0];
//     if (activeted) {
//         activeted.classList.remove('pending-activeted', 'submit-activeted', 'evaluate-activeted', 'activeted');
//     }
//     evaluate.classList.add('activeted', 'evaluate-activeted');
// })




const pending = document.getElementById('pens');
pending.classList.add('activeted', 'pending-activeted');

pending.addEventListener('click',()=>{
    let activeted = document.getElementsByClassName('activeted')[0];
    if (activeted) {
        activeted.classList.remove('pending-activeted', 'submit-activeted', 'evaluate-activeted', 'activeted');
    }
    pending.classList.add('activeted', 'pending-activeted');
})

const submit = document.getElementById('submit');
submit.addEventListener('click',()=>{
    let activeted = document.getElementsByClassName('activeted')[0];
    if (activeted) {
        activeted.classList.remove('pending-activeted', 'submit-activeted', 'evaluate-activeted', 'activeted');
    }
    submit.classList.add('activeted', 'submit-activeted');
})

const evaluate = document.getElementById('evaluate');
evaluate.addEventListener('click',()=>{
    let activeted = document.getElementsByClassName('activeted')[0];
    if (activeted) {
        activeted.classList.remove('pending-activeted', 'submit-activeted', 'evaluate-activeted', 'activeted');
    }
    evaluate.classList.add('activeted', 'evaluate-activeted');
})