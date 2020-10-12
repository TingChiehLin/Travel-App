import {geoLocationRequest, ForecastRequest, calculateDay} from './httpRequest';
const inputPlace = document.getElementById('place').value;
const inputYear = document.getElementById('date-year').value;
const inputMonth = document.getElementById('date-month').value;
const inputDay = document.getElementById('date-day').value;

let submitButton = document.getElementById('submit-button');
let closeButton = document.getElementById('modal-action-container');

const backdrop = document.querySelector('.backdrop');
const modal = document.getElementById('modal');
const tripListContainer = document.getElementById('trip-list-container');
const tripPlan = document.getElementById('trip-plan');
const tripRecord = document.getElementById('trip-record');
const tripPlanList = document.getElementById('page-container-trip-form');

const placeID = document.getElementById('place').value;
const yearID = document.getElementById('date-year').value;
const monthID = document.getElementById('date-month').value;
const dayID = document.getElementById('date-day').value;
const desDuration = document.getElementById('destination-context-duration');

//Handle submit
const handleSubmit = () => {
    backdrop.style.display = 'block';
    modal.style.display = 'block';
    const dayDuration = calculateDay(dayID,monthID,yearID);
    desDuration.innerHTML = dayDuration + 'days';
}

//close modal
const closeModal = () => {
    backdrop.style.display = 'none';
    modal.style.display = 'none';
}

//Plan your trip
const planYourTrip = () => {
    tripPlanList.style.display = 'block';
    tripListContainer.style.display = 'none';
}

//see your record
const seeYourTrip = () => {
    tripPlanList.style.display = 'none';
    tripListContainer.style.display = 'block';
}

submitButton.addEventListener("click",handleSubmit);
closeButton.addEventListener('click',closeModal);
tripPlan.addEventListener('click',planYourTrip);
tripRecord.addEventListener('click',seeYourTrip);

