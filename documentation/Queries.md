
# /registerserver
Accepts an http form entry and, if the request contains the required information, adds it to the server list.

Below is a table that provides the case sensative names a valid request should have. As well as some computed values that the server will generate on request.

| Input Name        | Description           |
|-------------------|-----------------------|
| hostIP            | The IP v4 address of the game host. Current format has not been decided, so for testing purposes a string can be used.
| hostUsername      | The Displayname of the host player or server|
| targetPort        | The port the server is open on. |
| gameVersion       | The current version of the host. |
| gameName          | A recognizable name or for your game for metadata purposes here on the server. May in the future be used to organize or allowlist games using this service. |
| isPublic          | True/False. If this value is false then the entry will be ommited entirely from the `/serverlist` query. |
| isPasswordProtected | For use on the clientside to prompt a password protected connection. ||
| lastKeepAlive | The unix milisecond timestamp the last ping from that server was received. Automatically populated by this server. | 
