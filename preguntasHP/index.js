/*
 * Crea un programa que simule el comportamiento del sombrero selccionador del
 * universo mágico de Harry Potter.
 * - De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.
 * - Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).
 * - En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que
 *   coloque al alumno en una de las 4 casas de Hogwarts (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)
 * - Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador.
 *   Por ejemplo, en Slytherin se premia la ambición y la astucia.
 * miguelex.js
    
 */

    
const containerHP = document.querySelector(".containerHP")
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

const backgrounds = (element, backgroundColor, color, per)=>{
    element.style.backgroundImage = `linear-gradient(90deg, ${backgroundColor} ${per}%, lavender ${per}%)`
    element.style.color = color
    element.style.border = `4px solid ${color}`
}

const transitions = (number, pointer, type, number1, pointer1, type1) =>{

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
        number.innerHTML = (currentQuestion + 1) + " de" + arraySeleccion.length +" preguntas"
        
        sumatoriaDePuntos(e)
        mostrarPregunta(currentQuestion)
        mostrarRespuesta(currentQuestion)

    }
    else if(currentQuestion == arraySeleccion.length){
        
        // console.log(e.target.innerHTML)
        // console.log(currentQuestion)
        sumatoriaDePuntos(e)

        transitions("0", "none", "opacity .5s", "1", "all", "opacity 4s 1.5s")
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

    // console.log(arraySeleccion)

    transitions("1", "all", "opacity .5s 1s", "0", "none", "opacity .5s",)

    mostrarPregunta(0);
    mostrarRespuesta(0);
})


// console.log(arraySeleccion[0].pregunta.indexOf("."))

mostrarPregunta(0)
mostrarRespuesta(0)
