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

    return getPublicServers();
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
    let killTime = Date.now() - config.autoPurgeTimeSeconds * 1000;

    let resultList = serverList.filter((server) => { 
        return server.timeSinceLastKeepAlive > killTime;
    });

    serverList = resultList;
}

function getPublicServers() {
    let resultsList = serverList.filter((server) => {
        return server.isPublic;
    })

    return resultsList;
}



module.exports = {getServerList, addServer}