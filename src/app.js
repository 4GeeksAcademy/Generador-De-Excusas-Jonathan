window.onload = function() {
  //write your code here
  function generadorDeExcusas() {
    let who = ['Un dinosaurio', 'Mi gato', 'Mi jefe', 'La materia oscura'];
    let action = ['destruyo', 'devoro', 'se trago', 'pulverizo'];
    let what = ['mi trabajo', 'mi computadora', 'tu bien mas preciado', 'tus sueños'];
    let when = ['antes del trabajo', 'cuando estaba durmiendo', 'mientras me estaba en la ducha', 'durante mi almuerzo'];

    let text1 = who[Math.floor(Math.random() * who.length)]
    let text2 = action[Math.floor(Math.random() * action.length)]
    let text3 = what[Math.floor(Math.random() * what.length)]
    let text4 = when[Math.floor(Math.random() * when.length)]

    let resultado = text1 + " "  + text2 + " " + text3 + " " + text4;
    
    return document.getElementById("texto").innerHTML = resultado
  }

  document.getElementById("boton").onclick = function (){
    generadorDeExcusas()
  }
};





