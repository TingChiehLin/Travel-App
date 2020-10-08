const geonames_Key = process.env.geonames_KEY;
const darkSky_Key = process.env.darkSky_KEY;
const pixabay_Key = process.env.pixabay_KEY;

const geoNamesURL = 'http://api.geonames.org/searchJSON?q=';
const weatherBitForecastURL = 'https://api.weatherbit.io/v2.0/forecast/daily?lat=';
const pixabayAPIURL = "https://pixabay.com/api/?key=";

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
                throw new Error('Server went wrong');
            });
        }
    });
}

//Get Forecast


//Get ImageURL


//Get CountryInfo





export {

}