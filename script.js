let playerName = "Oak1939";
async function updateData() {


    let jsonData;
    const result = await fetch(getApiLink(playerName));
    jsonData = await result.json();
    if (jsonData['code'] != 200) {
        alert("API Error "+jsonData['code']);
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

    // Misc Variables
    var characterCount = 0

    // Work

    for (let key in characters) {
        characterCount++
    }
    console.log(characterCount);



    // Update HTML
    document.getElementById("playerName").innerHTML = playerName;
    document.getElementById("rank").innerHTML = rank;


}
updateData();

function getApiLink(name) {
    return "https://api.wynncraft.com/v2/player/"+name+"/stats";
}



// document.getElementById("button").addEventListener('click', event => {cycleWallpaper();});
