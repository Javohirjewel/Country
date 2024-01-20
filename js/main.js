const input = document.querySelector(".input")
const wrapper = document.querySelector('.wrapper')
const drop = document.querySelector('.drop')
const  options = document.querySelector('.options')

function showModal() {
    document.querySelector(".options").classList.toggle("show");
}

const inner = (data) =>{
    let arr = data?.map(el => {
        console.log(el)
        const {flags, name, population, region, capital} = el
    
        return `<div class='item'>
            <div class='item__img'>
                <img src=${flags.png} alt = 'salom' >
            </div>
            <div class='item__wrapper'>
            <div class='item__title'>
                ${name.common}
            </div>
            <div class="item__popul">
                <span>Population:</span> ${population ? (population) : `not found`}
            </div>
            <div class="item__region">
                <span>Region:</span> ${region}
            </div>
            <div class="item__capital">
                <span>Capital:</span> ${capital ? capital : `no found`}
            </div>
            </div>
            </div>`
        
    })

    console.log(arr)
    wrapper.innerHTML = arr
    

}    


const LoadingApi = () =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => searchInput(data))
}
LoadingApi()   

input.addEventListener('input', () => {
    LoadingApi()  
})

const searchInput = (country) =>{
    let newData = country?.filter((item) => {
        if(input.value.length > 0){
           return input.value.toLowerCase().includes(item?.name?.common.toLowerCase())
        }else{
            return country
        }
    })

    inner(newData)
}


// const getCountry = (country) =>{
//     //     options.addEventListener('click', (e) =>{
            
//     //         drop.innerHTML = e.target.textContent
//     //           
                
//     //     })
                       
//     // } 