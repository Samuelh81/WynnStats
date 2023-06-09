let playerName = "Oak1939";
async function updateData() {


    let jsonData;
    const result = await fetch(getApiLink(playerName));
    jsonData = await result.json();
    if (jsonData['code'] != 200) {
        alert("API Error "+ getErrorMessage(jsonData['code']));
        console.error("API Error "+ getErrorMessage(jsonData['code']));
        return;
    } 


    // JSON accessor
    var playerData = jsonData['data'][0];

    // Root Objects
    var characters = playerData.characters;
    var global = playerData.global;
    var guild = playerData.guild;
    var meta = playerData.meta;
    var rank = playerData.rank;
    var ranking = playerData.ranking;
    var username = playerData.username;
    var uuid = playerData.uuid;  
    console.log(characters);

    // Misc Variables
    var characterCount = 0

    // Work

    for (let key in characters) {
        characterCount++
    }
    console.log(characterCount);



    // Update HTML
    document.getElementById("character-card").innerHTML =  playerName + "'s Characters";
    document.getElementById("class1-class").innerHTML = characters["3d831fcc-b3ef-4114-a0ed-8497aa02283c"].type;
    document.getElementById("class1-total").innerHTML = 'total: ' + characters["3d831fcc-b3ef-4114-a0ed-8497aa02283c"].level; 
    document.getElementById("class1-level").innerHTML = 'combat: ' + characters["3d831fcc-b3ef-4114-a0ed-8497aa02283c"].professions.combat.level
}

updateData();

function getApiLink(name) {
    return "https://api.wynncraft.com/v2/player/"+name+"/stats";
}

function getErrorMessage(errorCode) {
    var message;
    switch (errorCode) {
        case 400:
            message = "400 - Bad Request";
            break;
        case 404:
            message = "404 - Not Found";
            break;
        case 429:
            message = "429 - Too Many Requests";
            break;
        case 500:
            message = "500 - Internal Server Error";
            break;
        case 502:
            message = "502 - Bad Gateway";
            break;
        case 502:
            message = "503 - Service Unavailable";
            break;
        default:
            message = "Unknown Error"
            break;
    }
    return message; 
}

// document.getElementById("button").addEventListener('click', event => {cycleWallpaper();});
