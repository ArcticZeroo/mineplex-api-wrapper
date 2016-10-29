#Mineplex API Wrapper
This is a wrapper for the Mineplex API, whose documentation can be found [Here](https://github.com/Mineplex-LLC/MineplexAPI).

##Documentation

Callback documentation outlines the contents of the `result` object if `success = true`.

###Class `MineplexAPIWrapper`

####Constructor
`new MineplexAPIWrapper(apiKey)`
`apiKey` - Your Mineplex API key.

####Properties

**api**
This property holds the `MineplexAPI class` from the `mineplex-api` module. You can use this property to make requests using the MineplexAPIWrapper without having to deal with the objects they return.

####Methods

#####Server Methods
######**getServerStatus**
*Gets current status of the server*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|a new ServerStatus class containing the current server status.|ServerStatus|

######**getServerTotal**
*Gets current total player count on the server.*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|The current amount of online players.|integer|


######**getServerGroups**
*Gets a list of all currently active server groups*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|An array containing the name of each currently active servergroup.|Array\<String>|

---
#####Player Methods

######**getPlayerInfo**
*Gets all available information about a player*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|player|true|The name or UUID of the player to look up|string|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|A Player class containing information about the player|Player|

######**getPlayerStats**
*Gets the stats of a player.*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|player|true|The name or UUID of the player to look up|string|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|A PlayerStatus class containing stats for the player|PlayerStatus|

######**getPlayerFriends**
*Gets the friends of a player.*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|player|true|The name or UUID of the player to look up|string|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|A PlayerFriends class containing friends for the player|PlayerFriends|

######**getPlayerStatus**
*Gets the status of a player.*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|player|true|The name or UUID of the player to look up|string|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|A PlayerStatus class containing status for the player|PlayerStatus|

---
#####Amplifier Methods

######**getAmplifierGroups**
*Gets a list of all available amplifier groups.*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|An array of names of available ampllifier groups.|Array\<String>|

######**getAmplifiers**
*Gets all amplifiers in all groups.*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|An AmplifierGroups class containing all amplifier groups.|AmplifierGroups|

######**getAmplifiersForGroup**
*Gets all amplifiers for a specific group.*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|group|true|Name of the group to get Amplifiers for|string|
|callback|true|Callback with parameters (success, result). If success is `false`, result is some sort of error. If success is `true`, result may be another object|function|

Callback

|Description|Schema|
|---|---|
|An AmplifierGroup class containing amplifiers for the specific group.|AmplifierGroup|

###Class `ServerStatus`

####Constructor
`new ServerStatus(data)`
`data` - A JSON object containing (at minimum)
```javascript
{
    total: int,
    groups: object
}
```

####Properties

#####Private Properties

######**_total**
This property holds the total count.

######**_groups**
This property holds the groups object.

####Methods

#####**getTotal**
*Gets total from status*

Returns

|Description|Schema|
|---|---|
|An integer representing the total count.|integer|

#####**getGroups**
*Gets stats for all groups*

Returns

|Description|Schema|
|---|---|
|An object which contains all groups' data. Data format is `{"group":player_count}` |Object|

#####**getGroup**
*Gets count for a certain group*

Parameters

|Name|Required|Description|Schema|
|---|---|---|---|
|group|true|Name of the group to get count for|string|

Returns

|Description|Schema|
|---|---|
|An integer representing the current player count in that group. May be undefined if the group does not exist.|integer|