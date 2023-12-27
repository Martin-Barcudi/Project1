const header = document.querySelector(".header")
const interactiveModal = document.querySelector(".interactiveModal")
const optionWeather = document.querySelector(".optionWeather")
const optionHarry = document.querySelector(".optionHarryP")
const comeBack = document.querySelector(".back")



const container = document.querySelector(".container")

const containerHP = document.querySelector(".containerHP")


const transitions = (opacity, pointerEvents, opacity1, pointerEvents1) =>{

    interactiveModal.style.opacity = opacity
    interactiveModal.style.pointerEvents = pointerEvents

    header.style.opacity = opacity1
    header.style.pointerEvents = pointerEvents1

    comeBack.style.opacity = opacity
    comeBack.style.pointerEvents = pointerEvents 
}



header.addEventListener("click", ()=>{
    interactiveModal.style.transform = "scale(1)"
    header.style.position = "absolute"

    transitions("1", "all", "0", "none")
})



optionWeather.addEventListener("click", ()=>{
    container.style.display = "block"
    interactiveModal.style.display = "none"
    document.body.style.backgroundColor = `#12415e`
    comeBack.style.color = "lightgray"
})


optionHarry.addEventListener("click", ()=>{
    containerHP.style.display = "block"
    interactiveModal.style.display = "none"
    document.body.style.backgroundColor = "#333"
})



comeBack.addEventListener("click", ()=>{
    if(container.style.display == "block" || containerHP.style.display == "block"){

        container.style.display = "none"
        containerHP.style.display = "none"
        interactiveModal.style.display = "block"
        document.body.style.backgroundColor = "lavender"
        comeBack.style.color = `#3f3f3f`


        currentQuestion = 1
        arraySeleccion.length = 0
        gryffindor[0] = slytherin[0] = hufflepuff[0] = ravenclaw[0] = 0;

        questionAnswers()

        number.innerHTML = currentQuestion + " de " + arraySeleccion.length +" preguntas"

        // console.log(arraySeleccion)

        transitionsHP("1", "all", "opacity .5s 1s", "0", "none", "opacity .5s")

        mostrarPregunta(0);
        mostrarRespuesta(0);
        
    }
    else if(interactiveModal.style.opacity == "1"){
        interactiveModal.style.transform = "scale(0)"

        transitions("0", "none", "1", "all")
    }
})











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
                
                if(res.weather[0].main == "Clear") img.src = "/Javascript/Proyectos/assets/clear.svg"
                else if(res.weather[0].main == "Rain") img.src = "/Javascript/Proyectos/assets/rain.svg"
                else if(res.weather[0].main == "Snow") img.src = "/Javascript/Proyectos/assets/snow.svg"
                else if(res.weather[0].main == "Clouds") img.src = "/Javascript/Proyectos/assets/clouds.svg"
                else if(res.weather[0].main == "Haze") img.src = "/Javascript/Proyectos/assets/haze.jpg"
            },500)
        
        }

        weatherBox.style.display = ""
        weatherDetails.style.display = ""
        weatherDetails.classList.add("fade-in")           
        
    })
    
}


const searchWeather = (height, display)=>{
    container.style.height = height
    weatherBox.style.display = display
    weatherDetails.style.display = display
}


search.addEventListener("click", ()=>{
    if(input.value == "") searchWeather("95px", "none")
    else funcion()    
})

input.addEventListener("keydown", e =>{
    if(e.key == "Enter"){
        if(input.value == "") searchWeather("95px", "none")
        else funcion()
    }
})

document.body.addEventListener("click", ()=>{
    if(container.style.display === "block"){
        searchWeather("95px", "none")
        input.value = ""
    }
})












const question = document.querySelector(".question")
const answers = document.querySelectorAll(".answer")
const number = document.querySelector(".numberQuestion")
const resultContainer = document.querySelector(".resultContainerHP")
const playAgain = document.querySelector(".again")



const preguntasYRespuestas = [
    {
      pregunta: "1. ¿Qué cualidad valoras más en ti mismo?",
      respuestas: { a: "Coraje", b: "Inteligencia", c: "Lealtad", d: "Astucia" }
    },
    {
      pregunta: "2. ¿Qué criatura mágica te gustaría tener como mascota?",
      respuestas: { a: "Búho", b: "Gato", c: "Rata", d: "Lechuza" }
    },
    {
      pregunta: "3. ¿Cuál es tu asignatura favorita en Hogwarts?",
      respuestas: { a: "Pociones", b: "Transformaciones", c: "Herbología", d: "Defensa contra las Artes Oscuras" }
    },
    {
      pregunta: "4. ¿Cuál es tu lugar favorito en el castillo de Hogwarts?",
      respuestas: { a: "La Sala Común de mi casa", b: "El Gran Comedor", c: "La Biblioteca", d: "Los terrenos del castillo" }
    },
    {
      pregunta: "5. ¿Cuál es tu hechizo favorito?",
      respuestas: { a: "Expecto Patronum", b: "Wingardium Leviosa", c: "Expelliarmus", d: "Lumos" }
    },
    {
      pregunta: "6. ¿Qué objeto mágico te gustaría poseer?",
      respuestas: { a: "La Capa de Invisibilidad", b: "La Varita de Saúco", c: "El Giratiempo", d: "La Piedra Filosofal" }
    },
    {
      pregunta: "7. ¿Cuál es tu personaje favorito de Harry Potter?",
      respuestas: { a: "Harry Potter", b: "Hermione Granger", c: "Ron Weasley", d: "Neville Longbottom" }
    },
    {
      pregunta: "8. ¿Qué harías si te enfrentas a un troll?",
      respuestas: { a: "Huir", b: "Atacar", c: "Pedir ayuda", d: "Intentar razonar con él" }
    },
    {
      pregunta: "9. ¿Qué tipo de clima prefieres?",
      respuestas: { a: "Sol", b: "Lluvia", c: "Nieve", d: "Viento" }
    },
    {
      pregunta: "10. ¿Cuál es tu forma preferida de transporte mágico?",
      respuestas: { a: "Escoba voladora", b: "El Autobús Noctámbulo", c: "El Tren Hogwarts Express", d: "Aparición" }
    },
    {
      pregunta: "11. ¿Qué color te atrae más?",
      respuestas: { a: "Rojo", b: "Azul", c: "Amarillo", d: "Verde" }
    },
    {
      pregunta: "12. ¿Qué criatura mágica te da más miedo?",
      respuestas: { a: "Dementor", b: "El Basilisco", c: "El Hombre Lobo", d: "Las Arpías" }
    },
    {
      pregunta: "13. ¿Cuál es tu golosina mágica favorita?",
      respuestas: { a: "Grageas de Todos los Sabores", b: "Chocolate de la Caja de Bertie Bott", c: "Pastel de Calabaza", d: "Caramelos de Menta" }
    },
    {
        pregunta: "14. ¿Cuál es tu asignatura menos favorita en Hogwarts?",
        respuestas: { a: "Historia de la Magia", b: "Adivinación", c: "Estudio de los Muggles", d: "Runas Antiguas" }
    },
    {
        pregunta: "15. ¿Qué actividad te gustaría hacer en tu tiempo libre en Hogwarts?",
      respuestas: { a: "Jugar al Quidditch", b: "Explorar el castillo", c: "Leer en la Biblioteca", d: "Pasar tiempo con amigos" }
    }
];



let gryffindor = [0, "Griffindor", "#660000", "#E09C09"]
let slytherin = [0, "Slytherin", "#2F751C", "#848484"]
let hufflepuff = [0, "Hufflepuff", "#FF9D0B", "#1F1E19"]
let ravenclaw = [0, "Ravenclaw", "#1A3956", "#b07647"]  
let currentQuestion = 1
const arraySeleccion = []

console.log(arraySeleccion)



const questionAnswers = ()=>{
    
    while(arraySeleccion.length < 7){
        let numberRandom = Math.floor(Math.random()*preguntasYRespuestas.length)
        
        if(!arraySeleccion.includes(preguntasYRespuestas[numberRandom])){
            arraySeleccion.push(preguntasYRespuestas[numberRandom])
        }
        else continue
    }
    // console.log(arraySeleccion)
}

// console.log(arraySeleccion)

// console.log(questionAnswers()[0])
questionAnswers()

number.innerHTML = currentQuestion + " de " + arraySeleccion.length +" preguntas"

const backgrounds = (element, backgroundColor, color, per)=>{
    element.style.backgroundImage = `linear-gradient(90deg, ${backgroundColor} ${per}%, lavender ${per}%)`
    element.style.color = color
    element.style.border = `4px solid ${color}`
}

const transitionsHP = (number, pointer, type, number1, pointer1, type1) =>{

  containerHP.style.opacity = number
  containerHP.style.pointerEvents = pointer
  containerHP.style.transition = type

  resultContainer.style.opacity = number1
  resultContainer.style.pointerEvents = pointer1
  resultContainer.style.transition = type1

}

// console.log(arraySeleccion.length)

const mostrarPregunta = (num) =>{
    const posicionPunto = arraySeleccion[num].pregunta.indexOf(".") + 2;
    const textoDespues = arraySeleccion[num].pregunta.substring(posicionPunto);
    question.innerHTML = textoDespues
    
}

const mostrarRespuesta = (num) =>{
    let values = Object.values(arraySeleccion[num].respuestas)
    // console.log(values)
    
    for(let i = values.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
        [values[i], values[j]] = [values[j], values[i]];
    }
    
    for(let i = 0; i < answers.length; i++){
        answers[i].innerHTML = values[i]
    }
    
    // console.log(arraySeleccion)
    
}

// console.log(arraySeleccion)
// console.log(currentQuestion)
let per

const sumatoriaDePuntos = (e)=>{
    if(e.target.innerHTML === arraySeleccion[currentQuestion - 1].respuestas["a"]) gryffindor[0]++
    else if(e.target.innerHTML === arraySeleccion[currentQuestion - 1].respuestas["b"]) slytherin[0]++
    else if(e.target.innerHTML === arraySeleccion[currentQuestion - 1].respuestas["c"]) hufflepuff[0]++
    else if(e.target.innerHTML === arraySeleccion[currentQuestion - 1].respuestas["d"]) ravenclaw[0]++
    
    // console.log(gryffindor[0], slytherin[0], hufflepuff[0], ravenclaw[0])
    // console.log(numeroPregunta)

    const winner = document.querySelector(".winner")
    const notWinners = document.querySelectorAll(".place")
    


    const casas = [gryffindor, slytherin, hufflepuff, ravenclaw]
    let loosers = []
    let higher = casas[0]

    for (let i = 0; i < casas.length; i++) {
        loosers.push(casas[i])
        if (casas[i][0] > higher[0]) {
            higher = casas[i];
        }
    }  
    loosers.sort((a, b) => b[0] - a[0])
    // console.log(loosers)

    winner.innerHTML = higher[1]
    per = (higher[0] / arraySeleccion.length) * 100
    backgrounds(winner, loosers[0][2], loosers[0][3], per)

    loosers.shift()
    // console.log(loosers)
    for(let i = 0; i < notWinners.length; i++){
        notWinners[i].innerHTML = loosers[i]["1"]

        per = (loosers[i][0] / arraySeleccion.length) * 100

        // console.log(loosers[i][3])

        if(loosers[i][1] == "Griffindor") backgrounds(notWinners[i], loosers[i][2], loosers[i][3], per)
        else if(loosers[i][1] == "Slytherin") backgrounds(notWinners[i], loosers[i][2], loosers[i][3], per) 
        else if(loosers[i][1] == "Ravenclaw") backgrounds(notWinners[i], loosers[i][2], loosers[i][3], per) 
        else if(loosers[i][1] == "Hufflepuff")  backgrounds(notWinners[i], loosers[i][2], loosers[i][3], per) 
    }
}


const siguientePregunta = (e)=>{

    if(currentQuestion < arraySeleccion.length){
        number.innerHTML = (currentQuestion + 1) + " de " + arraySeleccion.length +" preguntas"
        
        sumatoriaDePuntos(e)
        mostrarPregunta(currentQuestion)
        mostrarRespuesta(currentQuestion)

    }
    else if(currentQuestion == arraySeleccion.length){
        
        // console.log(e.target.innerHTML)
        // console.log(currentQuestion)
        sumatoriaDePuntos(e)

        transitionsHP("0", "none", "opacity .5s", "1", "all", "opacity 4s 1.5s")
    }
    
    currentQuestion++
}  

for (let answer of answers) {
    answer.addEventListener("click", siguientePregunta);
}   


playAgain.addEventListener("click", ()=>{

    currentQuestion = 1
    arraySeleccion.length = 0
    gryffindor[0] = slytherin[0] = hufflepuff[0] = ravenclaw[0] = 0;

    
    questionAnswers()
    
    number.innerHTML = currentQuestion + " de " + arraySeleccion.length +" preguntas"
    // console.log(arraySeleccion)

    transitionsHP("1", "all", "opacity .5s 1s", "0", "none", "opacity .5s",)

    mostrarPregunta(0);
    mostrarRespuesta(0);
})


// console.log(arraySeleccion[0].pregunta.indexOf("."))

mostrarPregunta(0)
mostrarRespuesta(0)