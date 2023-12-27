const container = document.querySelector(".container")
const search = document.querySelector(".search-box button")
const weatherBox = document.querySelector(".weather-box")
const weatherDetails = document.querySelector(".weather-details")
const error404 = document.querySelector(".not-found")


const input = document.querySelector(".search-box input")

input.focus()



const funcion = () =>{
    const key = "a72a8dfa7979027a299470f1f7def25b"
    const city = document.querySelector(".search-box input").value

    const peticion = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)

    peticion.then(res => res.json())
    .then(res => {
        // console.log(res)
        
        
        
        if(res.cod === "404"){
            
            container.style.height = "400px"
            weatherBox.style.display = "none"
            weatherDetails.style.display = "none"
            error404.style.display = "block"
            error404.classList.add("fade-in")
            return
        }
        
        error404.style.display = "none"
        error404.classList.remove = ("fade-in")
        
        const img = document.querySelector(".weather-box img")
        const temperature = document.querySelector(".weather-box .temperature")
        const description = document.querySelector(".weather-box .description")
        const humidity = document.querySelector(".weather-details .humidity .text span")
        const wind = document.querySelector(".weather-details .wind .text span")
        const texto = document.querySelectorAll(".textTransition")

        container.style.height = "550px"
        weatherBox.classList.add("fade-in")
        
        // const temperatura = res.main.temp
        // const temperaturaEntera = temperatura.toFixed(0)
        // // console.log(temperaturaEntera)
        
        
        for(let palabra of texto){
            // palabra.style.opacity = "0"
            palabra.style.transition = "opacity .3s"
            palabra.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0% 100%)"
            img.style.opacity = "0"
            img.style.transition = "opacity .3s"
            

            setTimeout(()=>{
                temperature.innerHTML = `${res.main.temp.toFixed(0)} <span>C°</span>`
                description.innerHTML = res.weather[0].description
                humidity.innerHTML = `${res.main.humidity}%`
                wind.innerHTML = `${parseInt(res.wind.speed)}Km/h`
                
                // palabra.style.opacity = "1";
                palabra.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                palabra.style.transition = "all 1.5s"
                img.style.opacity = "1"
                img.style.transition = "opacity 1.5s"
                
                if(res.weather[0].main == "Clear") img.src = "/Proyectos/assets/clear.svg"
                else if(res.weather[0].main == "Rain") img.src = "/Proyectos/assets/rain.svg"
                else if(res.weather[0].main == "Snow") img.src = "/Proyectos/assets/snow.svg"
                else if(res.weather[0].main == "Clouds") img.src = "/Proyectos/assets/clouds.svg"
                else if(res.weather[0].main == "Haze") img.src = "/Proyectos/assets/haze.jpg"
            },500)
        
        }

        weatherBox.style.display = ""
        weatherDetails.style.display = ""
        weatherDetails.classList.add("fade-in")           
        
    })
    
}


search.addEventListener("click", ()=>{
    if(input.value == ""){
        container.style.height = "95px"
        weatherBox.style.display = "none"
        weatherDetails.style.display = "none"
    }
    else funcion()    
})
input.addEventListener("keydown", e =>{
    if(e.key == "Enter"){
        if(input.value == ""){
            container.style.height = "95px"
            weatherBox.style.display = "none"
            weatherDetails.style.display = "none"
        }
        else funcion()
    }
})






