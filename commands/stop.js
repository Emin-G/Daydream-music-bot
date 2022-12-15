const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { getVoiceConnection } = require("@discordjs/voice");
const { erremb } = require("../util/embed.js");
const { cleanup } = require("../functions/cleanup.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("중지")
		.setDescription("재생을 멈추고 통화방에서 나가요. 재생 목록을 비롯한 모든 설정을 초기화 해요."),
    
	async execute(interaction) {

        let message = interaction;

        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(message, ":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "정... 정지가 안대! 정지 시킬 수가 업써! 안댕!");

        cleanup(message.guild.id);

        const stemb = new EmbedBuilder()
        .setColor("#0x7d3640")
        .setTitle(":stop_button:  **|**  노래 재생을 멈췄습니다!")
        return message.reply({ embeds: [stemb] });
        
    }
}