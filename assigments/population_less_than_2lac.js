const REST_COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';
const POPULATION_LESS_THAN = '2_00_000';

const request = new XMLHttpRequest();
request.open('GET', REST_COUNTRIES_API, true);
request.send();
request.onload = function () {
    try {
        console.log("Response data",);
        const restCountries = JSON.parse(this.response)
        // region Asia
        const population = restCountries.filter(({ region }) => region === POPULATION_LESS_THAN);
        console.log("%c------------POPULATION < 2 Lac-------------", "color:green");
        console.log(population);
    }
    catch (e) {
        console.log("Parsing data failed", e);
    }
}