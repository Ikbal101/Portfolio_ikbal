// for nav 
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');

// Toggle menu visibility on button click
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});



// for modal 
// Get all the modal elements
const modalViews = document.querySelectorAll('.services_modal');
const modalBtns = document.querySelectorAll('.services_button');
const modalCloses = document.querySelectorAll('.services_modal-close');

// Function to open the modal
let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal');
};

// Loop through the buttons to detect which one is clicked
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i);
    });
});

// Function to close the modal
modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal');
        });
    });
});
