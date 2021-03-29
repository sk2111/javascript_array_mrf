// APP and Filter constants
const REST_COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';
const COUNTRY_TO_FILTER = 'Asia';
const POPULATION_LESS_THAN = '2_00_000';
const CURRENCY_CODE = 'USD';

// Request to Rest countries API
const request = new XMLHttpRequest();
request.open('GET', REST_COUNTRIES_API, true);
request.send();
request.onload = function () {
    try {
        console.log("Response data",);
        const restCountries = JSON.parse(this.response);
        // region Asia
        const asiaCountries = restCountries.filter(({ region }) => region === COUNTRY_TO_FILTER);
        console.log("%c------------ASIA COUNTRIES-------------", "color:green");
        console.log(asiaCountries);

        // population less than 2 lac
        console.log("%c------------POPULATION < 2 Lac-------------", "color:green");
        const population = restCountries.filter(({ region }) => region <= POPULATION_LESS_THAN);
        console.log(population);

        // Total population
        console.log("%c------------TOTAL POPULATION-------------", "color:green");
        const totalPopulation = restCountries.reduce((sum, { population }) => sum + population, 0);
        console.log(totalPopulation);

        // Countries using USD
        console.log("%c------------COUNTRIES USING USD-------------", "color:green");
        const countriesUsingUSD = restCountries.filter(({ currencies }) => currencies.some(curr => curr.code === CURRENCY_CODE));
        console.log(countriesUsingUSD);

        //country and capital
        console.log("%c------------COUNTRY & CAPITAL-------------", "color:green");
        restCountries.forEach(({ name, capital }) => {
            console.log(`${name} : ${capital}`);
        });


    }
    catch (e) {
        console.log("Parsing data failed", e);
    }
}