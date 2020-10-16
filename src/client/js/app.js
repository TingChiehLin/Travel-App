import {geoLocationRequest, ForecastRequest, imageRequest} from './httpRequest';

//Modal
const backdrop = document.querySelector('.backdrop');
const modal = document.getElementById('modal');
const tripListContainer = document.getElementById('trip-list-container');
const tripPlan = document.getElementById('trip-plan');
const tripRecord = document.getElementById('trip-record');
const tripPlanList = document.getElementById('page-container-trip-form');

//Trip
const tripList = document.getElementById('trip-list');

//Input Field
const placeID = document.getElementById('place');
const yearID = document.getElementById('date-year');
const monthID = document.getElementById('date-month');
const dayID = document.getElementById('date-day');

//Display Information
const destinationTitle = document.getElementById('destination-title');
const desDuration = document.getElementById('destination-context-duration');
const destinationContextDate = document.getElementById('destination-context-date');
const destinationContextWeather = document.getElementById('destination-context-weather');
const destinationContextWeatherCondition = document.getElementById('destination-context-weatherCondition');

//Form
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
let submitButton = document.getElementById('submit-button');
let closeButton = document.getElementById('modal-action-container');

const testButton = document.getElementById('test-button');

//Data
const data = {};

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
    console.log("handleSubmit");
    let Message = [];
    if (placeID.value == '' || yearID.value == '' || monthID.value == '' || dayID.value == '') {
        Message.push("information is required");
    }

    if (Message.length > 0) {
        e.preventDedault();
        errorElement.innerText = Message.join(', ');
        backdrop.style.display = 'block';
        modal.style.display = 'block';
        //bug
        const location = geoLocationRequest(placeID.value);
        console.log(location);

        // const dayDuration = calculateDay(dayID.value,monthID.value,yearID.value);
        const forecastdata = ForecastRequest(location.latitude,location.longitude);
        const imageData = imageRequest(placeID);

        data.day = dayDuration;
        data.latitude = latitude;
        data.longitude = longitude;
        data.weatherforcast = forecastdata;
        data.imageData = imageData;
        updateUI(data);
    }
}

const updateUI = (data) => {
    destinationTitle.innerHTML = placeID.value;
    desDuration.innerHTML = data.day + 'days';
    countryImage.innerHTML = data.imageData;
    //<p id="destination-context-date">07/09/2021</p>
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
//form.addEventListener('submit', handleSubmit);
submitButton.addEventListener("submit",handleSubmit);
closeButton.addEventListener('click',closeModal);

tripPlan.addEventListener('click',planYourTrip);
tripRecord.addEventListener('click',seeYourTrip);
