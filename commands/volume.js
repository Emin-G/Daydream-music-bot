const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { getVoiceConnection } = require("@discordjs/voice");
const { erremb } = require("../util/embed.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("볼륨")
		.setDescription("음량을 0 ~ 100 까지 조절할 수 있어요. 한 번 변경된 볼륨은 통화방을 나가기 전까지 유지돼요.")
        .addStringOption((option) =>
            option.setName("옵션")
                .setDescription("0 ~ 100 사이의 값을 업력해주세요.")
                .setRequired(true)),
    
	async execute(interaction) {

        console.log(interaction.options.data[0].value);

        let message = interaction;

        let val = interaction.options.data[0].value;

        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(message, ":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "볼륨은 노래를 재생하는 중에만 바꿀 수 있습니다.");
        if (parseInt(val) / 100 <= 1 && parseInt(val) / 100 >= 0) {
            volume[message.guild.id] = parseInt(val) / 100;
            resource[message.guild.id].volume.setVolume(volume[message.guild.id]);
            const volemb = new EmbedBuilder()
            .setColor("#7d3640")
            .setTitle(":loud_sound:  **|**  볼륨을 `" + parseInt(val) + "%` 으로 설정했습니다!")
            return message.reply({ embeds: [volemb] });
        }

        else if (!val) {
            const volemb = new EmbedBuilder()
            .setColor("#7d3640")
            .setTitle(":loud_sound:  **|**  현재 볼륨은 `" + (volume[message.guild.id] * 100) + "%` 입니다!")
            return message.reply({ embeds: [volemb] });
        }

        else erremb(message, ":triangular_flag_on_post:  **|**  볼륨 값이 올바르지 않습니다!", "볼륨은 0 ~ 100 까지 설정 할 수 있습니다.");
        
    }
}