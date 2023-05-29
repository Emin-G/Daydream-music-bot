const { EmbedBuilder } = require("discord.js");
const { joinVoiceChannel, VoiceConnectionStatus, getVoiceConnection } = require("@discordjs/voice");

const { erremb, norpembed } = require("../util/embed.js");

const { cleanup } = require("../functions/cleanup.js");
const { handler } = require("../functions/handler.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

async function adder (message, title, id, isList) {

    //Connection
    if (!isList) console.log(getVoiceConnection(message.guild.id));

    if (!message.member.voice.channel) return norpembed(message, ":triangular_flag_on_post:  **|**  통화방을 찾지 못했습니다!", "먼저 통화방에 들어가거나 권한을 확인해주세요.");

    if (!connection[message.guild.id] || await getVoiceConnection(message.guild.id)._state.status !== "ready" && await getVoiceConnection(message.guild.id)._state.status !== "signalling") {
        cleanup(message.guild.id);
        connection[message.guild.id] = joinVoiceChannel({
            channelId: message.member.voice.channel.id,
            guildId: message.guild.id,
            adapterCreator: message.guild.voiceAdapterCreator,
        });
        console.log(getVoiceConnection(message.guild.id));
    }
    //Connection

    //Add Song
    let temp_index = "";

    if (!playlist[message.guild.id]) {
        playlist[message.guild.id] = new Map();
        temp_index = 0;
    }
    else temp_index = Object.keys(playlist[message.guild.id]).length;

    let song = new Map();
    song["title"] = title;
    song["id"] = id;

    playlist[message.guild.id][temp_index] = song;
    //Add Song


    if (resource[message.guild.id]) {
        if (isList) return;

        const adderemb = new EmbedBuilder()
        .setColor("#7d3640")
        .setTitle(":white_check_mark:  **|**  재생목록에 추가했습니다!")
        .setDescription("`" + title + "`")
        .setThumbnail("https://img.youtube.com/vi/" + id + "/mqdefault.jpg")
        return message.channel.send({ embeds: [adderemb] });
    }

    else {
        resource[message.guild.id] = true;
        connection[message.guild.id].once(VoiceConnectionStatus.Ready, () => {
            return handler(message, message.guild.id);
        });
    }

}

module.exports = {
    adder: adder
}