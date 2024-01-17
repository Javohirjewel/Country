const input = document.querySelector(".input")
// const regionSelect = document.querySelector('.select')
// console.dir(regionSelect)
const wrapper = document.querySelector('.wrapper')

const drop = document.querySelector('.drop')
const  options = document.querySelector('.options')

function showModal() {
    document.querySelector(".options").classList.toggle("show");
}



const LoadingApi = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => countriesHtml(data))
}
LoadingApi()    
const getCountry = (country) =>{
    options.addEventListener('click', (e) =>{
        drop.innerHTML = e.target.textContent
            if (e.target.textContent == country.region){
                
            }
            showModal()
     
        })
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
            </div>`
} 
const countriesHtml = countries =>{
    const countriesHtml = countries.map(country => getCountry(country))
    wrapper.innerHTML = countriesHtml;
}
















const searchInput = () =>{
    input.addEventListener('keypress', (e) => {
        if (e.keyCode === 13 && input.value.length > 0 ) {
            const LoadingApi = () =>{
                fetch('https://restcountries.com/v3.1/all')
                .then(response => response.json())
                .then(data => countriesHtml(data))
            }
            LoadingApi()    
            const getCountry = (country) =>{
                if(input.value.toLowerCase() == country.name.common.toLowerCase()){
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
            } 
            const countriesHtml = countries =>{
                const countriesHtml = countries.map(country => getCountry(country))
                wrapper.innerHTML = countriesHtml;
            }
            
        }
    })

}
searchInput()

