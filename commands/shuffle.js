const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { getVoiceConnection } = require("@discordjs/voice");
const { erremb } = require("../util/embed.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("셔플")
		.setDescription("재생목록에 담긴 영상의 재생 순서를 섞어요."),
    
	async execute(interaction) {

        let message = interaction;

        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(message, ":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "셔플은 노래를 재생하는 중에만 할 수 있습니다.");
        if (!playlist[message.guild.id]) return erremb(message, ":triangular_flag_on_post:  **|**  재생 목록을 찾지 못했습니다!", "이것 참 심오하군요...");

        console.log(playlist);

        let shuffled = Object.keys(playlist[message.guild.id]);
        shuffled = shuffled.sort(() => Math.random() - 0.5);

        console.log(shuffled);

        let unter = 1;
        let temp_playlist = new Map();

        temp_playlist[0] = playlist[message.guild.id][0];

        for (let row of shuffled) {
            if (row == 0) continue;
            temp_playlist[unter] = playlist[message.guild.id][row];
            unter++;
        }

        console.log(temp_playlist);

        playlist[message.guild.id] = temp_playlist;

        let res = "";

        let temp_unter = 1;

        for (let unter in playlist[message.guild.id]) {
            res += "**`" + temp_unter + "`** | " + playlist[message.guild.id][unter]["title"] + "\n";
            ++temp_unter;
        }

        const plistemb = new EmbedBuilder()
        .setColor("#0x7d3640")
        .setTitle(":twisted_rightwards_arrows:  **|**  재생 순서를 변경했습니다.")
        .setDescription(res)
        .setThumbnail("https://img.youtube.com/vi/" + playlist[message.guild.id][0]["id"] + "/mqdefault.jpg")
        message.reply({ embeds: [plistemb] });
    }
}