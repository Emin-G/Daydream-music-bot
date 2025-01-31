const { EmbedBuilder } = require("discord.js");
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus, getVoiceConnection } = require("@discordjs/voice");

const ytdl = require("@distube/ytdl-core");

const { erremb } = require("../util/embed.js");

const { cleanup } = require("../functions/cleanup.js");
const { skiper } = require("../functions/skiper.js");
const { stat_handler } = require("../functions/stat_handler.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

require("dotenv").config();

async function play (message, title, id) {

    let url = "https://youtu.be/" + id;

    player[message.guild.id] = createAudioPlayer();
    connection[message.guild.id].subscribe(player[message.guild.id]);

    if (!volume[message.guild.id]) volume[message.guild.id] = 1;

    console.log(getVoiceConnection(message.guild.id)._state.status);
    if (getVoiceConnection(message.guild.id)._state.status !== "ready" || !connection[message.guild.id]) return cleanup(message.guild.id);

    resource[message.guild.id] = createAudioResource( ytdl(url, {filter : "audioonly", quality: "highestaudio", highWaterMark: 1 << 25 }), { inlineVolume: true } );
    
    resource[message.guild.id].volume.setVolume(volume[message.guild.id]);

    player[message.guild.id].play(resource[message.guild.id]);

    player[message.guild.id].once(AudioPlayerStatus.Idle, async () => {
        if (station[message.guild.id] === "repeat") {

            //?
            const { adder } = require("../functions/adder.js");

            await adder(message, title, id, true);
            return skiper(message, 0, () => {
            });
        }
        if (!playlist[message.guild.id][1] && station[message.guild.id]) return stat_handler(message, message.guild.id);
        return skiper(message, 0, () => {
        });
    });

    if (station[message.guild.id] === "repeat") return;
    
    let playemb = new EmbedBuilder()
    .setColor("#7d3640")
    .setImage("https://img.youtube.com/vi/" + id + "/mqdefault.jpg");

    if (!station[message.guild.id]) playemb.setTitle(":notes:  **|**  " + title);
    else playemb.setTitle(":fire:  **|**  " + title);
    return message.channel.send({ embeds: [playemb] });
    
}

module.exports = {
    play: play
}