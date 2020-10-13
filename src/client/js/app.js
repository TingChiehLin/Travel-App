import {geoLocationRequest, ForecastRequest, calculateDay} from './httpRequest';

let closeButton = document.getElementById('modal-action-container');

const backdrop = document.querySelector('.backdrop');
const modal = document.getElementById('modal');
const tripListContainer = document.getElementById('trip-list-container');
const tripPlan = document.getElementById('trip-plan');
const tripRecord = document.getElementById('trip-record');
const tripPlanList = document.getElementById('page-container-trip-form');

const placeID = document.getElementById('place');
const yearID = document.getElementById('date-year');
const monthID = document.getElementById('date-month');
const dayID = document.getElementById('date-day');
const desDuration = document.getElementById('destination-context-duration');

const form = document.getElementById('form');
const errorElement = document.getElementById('error');

const testButton = document.getElementById('test-button');

// let submitButton = document.getElementById('submit-button');

//Questions
//1. Modal can not Show Up
//2. From problem
//3. desDuration can not show

//Test
const test = () => {
    console.log("test");
    console.log(placeID.value);
}

//Handle submit
const handleSubmit = (e) => {
    let Message = [];
    if (placeID.value == '' || yearID.value == '' || monthID.value == '' || dayID.value == '') {
        Message.push("information is required");
    }

    if (Message.length > 0) {
        e.preventDedault();
        errorElement.innerText = Message.join(', ');
        backdrop.style.display = 'block';
        modal.style.display = 'block';
        const location = geoLocationRequest(placeID.value);
        console.log(location);
        const dayDuration = calculateDay(dayID.value,monthID.value,yearID.value);
        desDuration.innerHTML = dayDuration + 'days';
    }
  
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

//testButton.addEventListener('click', test);
form.addEventListener('submit', handleSubmit);
// submitButton.addEventListener("click",handleSubmit);
closeButton.addEventListener('click',closeModal);
tripPlan.addEventListener('click',planYourTrip);
tripRecord.addEventListener('click',seeYourTrip);
