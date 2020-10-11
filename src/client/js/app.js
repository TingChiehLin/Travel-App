// import geoLocationRequest from './httpRequest';
const inputPlace = document.getElementById('place').value;
const inputYear = document.getElementById('date-year').value;
const inputMonth = document.getElementById('date-month').value;
const inputDay = document.getElementById('date-day').value;

let submitButton = document.getElementById('submit-button');
let closeButton = document.getElementById('modal-action-container');

const backdrop = document.querySelector('.backdrop');
const modal = document.getElementById('modal');

//Handle submit
const handleSubmit = () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
}

//close modal
const closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

submitButton.addEventListener("click",handleSubmit);
closeButton.addEventListener('click',closeModal);

