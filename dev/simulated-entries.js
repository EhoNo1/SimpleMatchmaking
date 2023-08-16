
//injects artificial entries into the server browser for development purposes
function devInjectSimulatedEntries(serverBrowser) {
    serverBrowser.addServer({
        "hostIP":"111.111.111.111",
        "hostUsername":"JohnDoe",
        "targetPort":25565,
        
        "gameVersion":"1.0",
        "gameName":"SampleGame",
        "isPublic":true,
        "isPassword":false
    })
}





module.exports = {devInjectSimulatedEntries};