fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(response => response.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
        document.getElementById("author-name").textContent = `Photograph by: ${data.user.name}`
    })

.catch(err => {
    document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1502790671504-542ad42d5189?ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3Mjc1NzQwMjB8&ixlib=rb-4.0.3")`
    document.getElementById("author-name").textContent = `Photograph by: Mohammad Alizade`
})

fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok){
            throw Error("Something went wrong")
        }
        return res.json()
        })
    .then(data => {
        
        document.getElementById("crypto-heading").innerHTML = `
        <img src="${data.image.small}"/>
        <span class="coin-name">${data.name}</span>
        `

        document.getElementById("crypto").innerHTML += `
        <p class="price">💲: R${data.market_data.current_price.zar}</p>
        <p class="price">⬆️: R${data.market_data.high_24h.zar}</p>
        <p class="price">⬇️: R${data.market_data.low_24h.zar}</p>
        `
    })
    .catch(err => console.error(err))

        function getTime(){
            const date = new Date()
            document.getElementById("time").textContent = date.toLocaleTimeString("en-ZA", {timeStyle: "short"})
        }

        setInterval(getTime, 1000)

        navigator.geolocation.getCurrentPosition(position => {
            fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`)
                .then(res => {
                    if(!res.ok){
                        throw Error ("Weather data not found!")
                    } 
                    return res.json()
                })
                .then(data =>{
                    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                    document.getElementById("weather").innerHTML = `
                        <img class="icon" src=${iconUrl} />
                        <span class="temperature">${Math.round(data.main.temp)}°</span>
                        <p class="city">${data.name}</p>
                        `
                })
                .catch(err => console.error(err))
        })
        

        