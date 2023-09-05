const key = '8cc676fc10b46adf79f156fb211383de'


function mostraDadosNatela(dados){
  console.log(dados)
    document.querySelector(".city").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".cloud").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".temp-max").innerHTML = "Máx: " +  Math.floor(dados.main.temp_max) + "°C"
    document.querySelector(".temp-min").innerHTML = "Min: " + Math.floor(dados.main.temp_min) + "°C"
    document.querySelector(".press").innerHTML = "Pressão: " + dados.main.pressure + " atm"

}

async function buscarDados(cidade){
  const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${'8cc676fc10b46adf79f156fb211383de&lang=pt_br&units=metric'}`).then((response) => response.json())
    
  mostraDadosNatela(dados)
 
  
}


function cliqueiNoBotao(){
  let cidade = document.querySelector(".input-city").value
  buscarDados(cidade)
}

