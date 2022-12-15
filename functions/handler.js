const { cleanup } = require("../functions/cleanup.js");
const { play } = require("../functions/play.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

function handler (message, guildId) {
    if (!playlist[guildId]) return cleanup(guildId);

    let song = playlist[guildId][0];

    console.log(playlist);
    console.log(song);

    return play(message, song.title, song.id);
}

module.exports = {
    handler: handler
}