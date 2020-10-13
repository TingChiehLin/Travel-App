const geonames_Key = 'tingchiehlin';
const weatherBitForecast_KEY = 'e82087e4b7e64b26ac6bb45390a40a6f';
const pixabay_Key = '17840487-4cc1b83539cb91665070e5edc';

const geoNamesURL = 'http://api.geonames.org/searchJSON?q=';
const weatherBitForecastURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixabay_APIURL = "https://pixabay.com/api/?key=";

//Calculate Date
function calculateDay(dayID,monthID,yearID) {
    const currentDate = new Date();
    const testDate = new Date(`${dayID}+/+${monthID}+/+${yearID}`);
    const difDate = Math.ceil((currentDate - testDate) / 1000 / 60 / 60 / 24);
    console.log(difDate);   
    return difDate;
}
  
//Get Location Request
const geoLocationRequest = (locationName) => {
    const url = geoNamesURL + locationName + '&maxRows=10' + '&username=' + geonames_Key;
    return fetch(url
    ).then(res => {
        if((res.status >= 200 && res.status <= 300) || res.ok) {
            const locationData = {};
            const jsonRes = res.json();

            locationData.latitude = jsonRes.geonames[0].lat;
            locationData.longitude = jsonRes.geonames[0].lng;
            locationData.countryCode = jsonRes.geonames[0].countryCode;

            return locationData;
        } else {
            return res.json().then(errorData => {
                console.log(errorData);
                throw new Error('Invaild Information');
            });
        }
    });
}

//https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY
//Get Forecast
const ForecastRequest = (latitude, longitude) => {

    //weatherbithistoryURL + toLat + '&lon=' + toLng + '&start_date=' + date + '&end_date=' + next_date + '&key=' + weatherbitkey)
    const url = weatherBitForecastURL + '&lat=' + latitude + '&lon=' + longitude + '&key=' + weatherBitForecast_KEY;

    return fetch(url).then(
        res => {
            if ((res.status >= 200 && res.status <= 300) || res.ok) {
                
            } else {
                return res.json().then(errorData => {
                    console.log(errorData);
                    throw new Error("Invaid Information");
                });
            }
        }
    )
}

//Get ImageURL

const imageRequest = (city, country) => {

    const city_image = `&q=${city}&image_type=photo`;
    const country_image = `&q=${country}&image_type=photo`;

    const city_url = pixabay_APIURL + pixabay_Key + city_image;
    const country_url = pixabay_APIURL + pixabay_Key + country_image;

    return fetch(city_url).then(res => {
        if ((res.status >= 200 && res.status <= 300) || res.ok) {

        } else {
            return res.json().then(errorData => {
                console.log(errorData);
                throw new Error("Invaid Information");
            });
        }
    });

}

//Get CountryInfo

const CountryRequest = (countryCode) => {

}


export {
    geoLocationRequest,
    ForecastRequest,
    calculateDay
}