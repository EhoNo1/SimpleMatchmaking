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

function getServerCount() {
    purgeOldServers();

    return serverList.length;
}

function addServer(server) {
    
    let sanitizedServer = {
        hostIP: server.hostIP,
        hostUsername: server.hostUsername,
        targetPort: server.targetPort,

        gameVersion: server.gameVersion,
        gameName: server.gameName,
        isPublic: server.isPublic,
        isPasswordProtected: server.isPasswordProtected,

        lastKeepAlive: Date.now(),
    }

    serverList.push(sanitizedServer);
    return true; //success

}

//Not working
function purgeOldServers() {
    let killTime = Date.now() - config.autoPurgeTimeSeconds * 1000;

    let resultList = serverList.filter((server) => { 
        return server.lastKeepAlive > killTime;
    });

    serverList = resultList;
}

function getPublicServers() {
    let resultsList = serverList.filter((server) => {
        return server.isPublic;
    })

    return resultsList;
}



module.exports = {getServerList, getServerCount, addServer}