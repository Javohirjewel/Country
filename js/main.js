const input = document.querySelector(".input")

const ok = () =>{
   input.addEventListener('change', () => {
    console.log(input.value.toLowerCase());
   }) 
}
ok()

const LoadingApi = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => countriesHtml(data))
}
LoadingApi()

const countriesHtml = countries =>{
    const countriesHtml = countries.map(country => getCountry(country))
    const wrapper = document.querySelector('.wrapper')
    wrapper.innerHTML = countriesHtml;
}

const getCountry = (country) =>{
    // console.log(country)
    return `
    <div class='item'>
    <div class='item__img'>
        <img src=${country.flags.png} alt = 'salom' >
    </div>
    <div class='item__wrapper'>
            <div class='item__title'>
                ${country.name.common}
            </div>
            <div class="item__popul">
                <span>Population:</span> ${country.population ? (country.population) : `not found`}
            </div>
            <div class="item__region">
                <span>Region:</span> ${country.region}
            </div>
            <div class="item__capital">
                <span>Capital:</span> ${country.capital ? country.capital : `no found`}
            </div>
            </div>
        </div> 
    `
}