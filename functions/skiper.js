const { cleanup } = require("../functions/cleanup.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

function skiper (message, track, callback) {

    delete playlist[message.guild.id][track];

    console.log(playlist[message.guild.id]);
            
    let temp_plist = playlist[message.guild.id];
    playlist[message.guild.id] = new Map();

    let counter = 0;

    for (let unter in temp_plist) {
        playlist[message.guild.id][counter] = temp_plist[unter];
        counter++;
    }

    console.log(playlist);

    if (!playlist[message.guild.id][0]) {
        console.log("A");
        cleanup(message.guild.id);
        return callback(true);
    }

    if (track == 0) {
        player[message.guild.id].stop();

        //?
        const { handler } = require("../functions/handler.js");
        
        handler(message, message.guild.id);
    }

    return callback(true);
    
}

module.exports = {
    skiper: skiper
}