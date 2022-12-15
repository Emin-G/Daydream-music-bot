const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { getVoiceConnection } = require("@discordjs/voice");
const { erremb } = require("../util/embed.js");

const { skiper } = require("../functions/skiper.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("스킵")
		.setDescription("재생중인 영상 혹은 특정 영상을 스킵해요.")
        .addStringOption((option) =>
            option.setName("옵션")
                .setDescription("공백 또는 트랙 번호를 입력해주세요. 옵션이 공백이면 현재 트랙을 스킵해요.")
                .setRequired(false)),
    
	async execute(interaction) {

        let message = interaction;
        let val;

        if (interaction.options.data[0]) {
            val = interaction.options.data[0].value;
        }

        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(message, ":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "스킵 할 노래가 없습니다.");
        if (!playlist[message.guild.id]) return erremb(message, ":triangular_flag_on_post:  **|**  재생 목록을 찾지 못했습니다!", "이것 참 심오하군요...");

        val = parseInt(val) - 1;

        if (!val || val == 0) val = 0;

        if (val > -1 && val < Object.keys(playlist[message.guild.id]).length) {

            let temp_tilt = { title: playlist[message.guild.id][val]["title"], id: playlist[message.guild.id][val]["id"] };

            skiper(message, val, () => {
                const skiemb = new EmbedBuilder()
                .setColor("#0x7d3640")
                .setTitle(":track_next:  **|**  스킵되었습니다!")
                .setDescription("`" + temp_tilt.title + "`")
                .setThumbnail("https://img.youtube.com/vi/" + temp_tilt.id + "/mqdefault.jpg")
                return message.reply({ embeds: [skiemb] });
            });
        }

        else return erremb(message, ":triangular_flag_on_post:  **|**  " + (val + 1) + "번 트랙을 찾지 못했습니다!", "!재생목록 에서 트랙 번호를 다시 한번 확인 해주세요!");
    
    }
}