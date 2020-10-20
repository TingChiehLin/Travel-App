const geonames_Key = 'tingchiehlin';
const weatherBitForecast_KEY = 'e82087e4b7e64b26ac6bb45390a40a6f';
const pixabay_Key = '17840487-4cc1b83539cb91665070e5edc';

const geoNamesURL = 'http://api.geonames.org/searchJSON?q=';
const weatherBitForecastURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const pixabay_APIURL = "https://pixabay.com/api/?key=";

//Calculate Date
function calculateDay(dayID,monthID,yearID) {
    const currentDate = new Date();
    // const testDate = new Date(`${dayID}+/+${monthID}+/+${yearID}`);
    const futureDate = new Date(yearID,monthID-1,dayID);
    const difDate = Math.ceil((futureDate - currentDate) / 1000 / 60 / 60 / 24);
    console.log(difDate);   
    return difDate;
}
  
//Get Location Request
const geoLocationRequest = (locationName) => {
    const url = geoNamesURL + locationName + '&maxRows=10' + '&username=' + geonames_Key;
    return fetch(url)
        .then(res => res.json())
        .then(res => {
            if((res.status >= 200 && res.status <= 300) || res.ok) {
                const locationData = {};
                const locationjsonRes = res.json();
                locationData.latitude = locationjsonRes.geonames[0].lat;
                locationData.longitude = locationjsonRes.geonames[0].lng;
                locationData.countryCode = locationjsonRes.geonames[0].countryCode;
                return locationData;
            }
            }, error => {
                console.log(error);
                throw new Error('Error Information');
        }).catch(error => {
            console.log("Error: ", error);
            throw new Error("Invaid Information");
    });
}

//https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=API_KEY
//Get Forecast
const ForecastRequest = (latitude, longitude) => {

    //response = await fetch(weatherbithistoryURL + toLat + '&lon=' + toLng + '&start_date=' + date + '&end_date=' + next_date + '&key=' + weatherbitkey)
    const url = weatherBitForecastURL + '&lat=' + latitude + '&lon=' + longitude + '&key=' + weatherBitForecast_KEY;

    // , {
    //     method: 'POST',
    //     headers: {"Content-Type":"application/json"},
    //     body: JSON.stringify({url: url})
    // })

    return fetch(url)
    .then(res => res.json())
    .then(res => {
        if((res.status >= 200 && res.status <= 300) || res.ok) {
            return res;
        }
        }, error => {
            console.log(error);
            throw new Error("Fetch Error");
    }).catch(error => {
        console.log(error);
        throw new Error("Fetch Error Information");
    });
}

//Get ImageURL

const imageRequest = (city, country) => {

    const city_image = `&q=${city}&image_type=photo`;
    const country_image = `&q=${country || 'Australia Flag'}&image_type=photo`;

    const city_url = pixabay_APIURL + pixabay_Key + city_image;
    const country_url = pixabay_APIURL + pixabay_Key + country_image;

    return fetch(city_url)
        .then(res => res.json())
        .then(cityDataJson => {
            if (cityDataJson.totalHits > 0) {
                return fetch(country_url).then(res => res.json()).then(countryDataJSON => {
                    if(countryDataJSON.totalHits > 0) {
                        return {
                            countryImage: countryDataJSON.hits[0].largeImageURL,
                            cityImage: cityDataJson.hits[0].largeImageURL,
                        };
                    }
                })
            }
        }, error => {
            console.log("Error: ", error);
            throw new Error("Invaid Information");
        }).catch(error => {
            console.log("Error: ", error);
            throw new Error("Invaid Information");
        });
}

export {
    geoLocationRequest,
    ForecastRequest,
    imageRequest,
    calculateDay
}