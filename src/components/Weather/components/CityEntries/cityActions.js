import axios from 'axios';

export function updateCity(name) {
    return {
        type: 'UPDATE_CITY',
        payload: { name }
    };
}

export function searchCity(name) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=imperial&appid=ea12361fcb12b97a8d49cccba2fb3e71`;
    return {
        type: 'SEARCH_CITY',
        payload:
            axios.get(url) 
                .then((res) => {
                    let cityData = res.data;
                    return {cityData}
                })       
    };
}


