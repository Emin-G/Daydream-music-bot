const { erremb } = require("../util/embed.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

function cleanup (guildId) {

    if (connection[guildId]) {
        connection[guildId].destroy();
        delete connection[guildId];
    }

    if (player[guildId]) {
        player[guildId].stop();
        delete player[guildId];
    }
    
    if (playlist[guildId]) delete playlist[guildId];
    if (resource[guildId]) delete resource[guildId];
    if (volume[guildId]) delete volume[guildId];
    if (station[guildId]) delete station[guildId];

}

module.exports = {
    cleanup: cleanup
}