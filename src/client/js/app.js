import {geoLocationRequest, ForecastRequest, imageRequest,calculateDay} from './httpRequest';

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

//city
const cityImage = document.getElementById('city-tourism-image');

//Form
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
let submitButton = document.getElementById('submit-button');
let closeButton = document.getElementById('modal-action-container');

const testButton = document.getElementById('test-button');

//Data
const data = {};

//Test
const test = () => {
    console.log("test");
    console.log(placeID.value);
}

//Handle submit
const handleSubmit = (e) => {
    e.preventDefault();

    if (placeID.value == '' || yearID.value == '' || monthID.value == '' || dayID.value == '') {
        errorElement.innerText = "Error Message"
    }

    backdrop.style.display = 'block';
    modal.style.display = 'block';

    const location = geoLocationRequest(placeID.value);
    const dayDuration = calculateDay(dayID.value,monthID.value,yearID.value);
    const forecastdata = ForecastRequest(location.latitude,location.longitude);
    const imageData = imageRequest(placeID.value);

    data.day = dayDuration;
    data.latitude = location.latitude;
    data.longitude = location.latitude;
    data.weatherforcast = forecastdata;
    data.imageData = imageData;
    updateUI(data);
}

const updateUI = (data) => {
    destinationTitle.innerHTML = placeID.value;
    destinationContextDate.innerHTML = "Arrive date: " + `${dayID.value} / ${monthID.value} / ${yearID.value}`;
    desDuration.innerHTML = "Days to leave: " + data.day + ' days Left';
    cityImage.innerHTML = data.imageData.city_image;;
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

form.addEventListener('submit', handleSubmit);
//testButton.addEventListener('click', test);
//submitButton.addEventListener("submit",handleSubmit);
closeButton.addEventListener('click',closeModal);
tripPlan.addEventListener('click',planYourTrip);
tripRecord.addEventListener('click',seeYourTrip);
