let config = require("../config.json")
//console.log(config);


//
//host IP
//host username
//game's target port
//
//
//game defined protocol/compatability version
//name of game
//is public
//is password protected
//
// UnixTimeSinceLastKeepAlive


let serverList = [];


function getServerList() {
    purgeOldServers();
    return serverList;
}

function addServer(hostIP, hostUsername, targetPort, gameVersion, gameName, isPublic, isPasswordProtected) {
    let server = {
        hostIP: hostIP,
        hostUsername: hostUsername,
        targetPort: targetPort,

        gameVersion: gameVersion,
        gameName: gameName,
        isPublic: isPublic,
        isPasswordProtected: isPasswordProtected,

        timeSinceLastKeepAlive: Date.now(),
    }

    serverList.push(server);
}

//Not working
function purgeOldServers() {
    let currentTime = Date.now();

    let resultList = serverList.filter((server) => (server.timeSinceLastKeepAlive + config.autoPurgeTime) < currentTime);

    serverList = resultList;
}




module.exports = {getServerList, addServer}