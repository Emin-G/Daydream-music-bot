const youtube = require("../util/youtube.js");

const { erremb } = require("../util/embed.js");

const { skiper } = require("../functions/skiper.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

function stat_handler (message, guildId) {

    if (station[guildId] === "on") station[guildId] = [playlist[guildId][0].id];
    else station[guildId][station[guildId].length] = playlist[guildId][0].id;

    console.log(station[guildId]);

    youtube.relatedVideo(playlist[guildId][0].id, async (rel_video) => {
        if (!rel_video) {
            return skiper(message, 0, () => {
                return handler(message, message.guild.id);
            });
        }

        for (let unter in rel_video) {
            console.log(station[guildId]);
            console.log(rel_video[unter].id);
            if (!station[guildId].find(element => element === rel_video[unter].id)) {
                console.log(rel_video);
                console.log(rel_video[unter]);

                //?
                const { adder } = require("../functions/adder.js");

                await adder(message, rel_video[unter].title, rel_video[unter].id, true);
                return skiper(message, 0, () => {
                });
            }
        }
    });
    
}

module.exports = {
    stat_handler: stat_handler
}