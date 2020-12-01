const key = '19ef9d06b24551412b3f8836f13a814c'

const city = 'Reus'

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`


const getWeather = async ()=>{
    const result = await axios.get(url)
    console.log(result.data.main)
    render(result.data.main.temp, result.data.main.humidity, result.data.main.pressure)
}

getWeather()


const appRoot = document.getElementById('appRoot')

const render = (temperatura, humedad, presion)=>{
    const template = (
        <div>
            <h1> El Tiempo en {city} sera de :</h1>
            <p>La Temperatura: {temperatura}</p>
            <p>La Humedad: {humedad}</p>
            <p> La Presión: {presion}</p>
        </div>
    )
    
    ReactDOM.render(template, appRoot)
}

render()