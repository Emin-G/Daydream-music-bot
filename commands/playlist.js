const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { getVoiceConnection } = require("@discordjs/voice");
const { erremb } = require("../util/embed.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("재생목록")
		.setDescription("재생 목록과 트랙 번호를 볼 수 있어요."),
    
	async execute(interaction) {

        let message = interaction;

        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(message, ":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "재생 목록을 찾지 못했습니다.");
        if (!playlist[message.guild.id]) return erremb(message, ":triangular_flag_on_post:  **|**  재생 목록을 찾지 못했습니다!", "이것 참 심오하군요...");
        let res = "";

        let temp_unter = 1;

        for (let unter in playlist[message.guild.id]) {
            res += "**`" + temp_unter + "`** | " + playlist[message.guild.id][unter]["title"] + "\n";
            ++temp_unter;
        }

        const plistemb = new EmbedBuilder()
        .setColor("#0x7d3640")
        .setTitle(":bookmark:  **|**  재생 목록")
        .setDescription(res)
        .setThumbnail("https://img.youtube.com/vi/" + playlist[message.guild.id][0]["id"] + "/mqdefault.jpg")
        message.reply({ embeds: [plistemb] });
        
    }
}