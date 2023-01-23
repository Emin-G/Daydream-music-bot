const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { getVoiceConnection } = require("@discordjs/voice");
const { erremb } = require("../util/embed.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("반복")
		.setDescription("재생 목록을 무한으로 즐겨요.")
        .addStringOption((option) =>
            option.setName("옵션")
                .setDescription("공백 또는 끄기, 켜기를 입력해주세요. 옵션이 공백이면 알아서 판단해요.")
                .setRequired(false)),
    
	async execute(interaction) {

        let message = interaction;
        let val;

        if (interaction.options.data[0]) {
            val = interaction.options.data[0].value;
        }

        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(message, ":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "재생 중인 노래가 없어 반복 기능을 활성화 하지 못했습니다.");
        if (!playlist[message.guild.id]) return erremb(message, ":triangular_flag_on_post:  **|**  재생 목록을 찾지 못했습니다!", "이것 참 심오하군요...");

        if (!val) {
            if (station[message.guild.id] === "repeat") {
                station[message.guild.id] = false;
                const staemb = new EmbedBuilder()
                .setColor("#0x7d3640")
                .setTitle(":negative_squared_cross_mark:  **|**  반복 기능이 해제 되었습니다!")
                message.reply({ embeds: [staemb] });
            }

            else if (station[message.guild.id] === "on") return erremb(message, ":triangular_flag_on_post:  **|**  스테이션 기능이 이미 활성화 되어있습니다!", "반복 기능은 스테이션 기능과 동시에 사용할 수 없습니다.\n스테이션을 종료하려면 스테이션 끄기를 입력해주세요.");

            else {
                station[message.guild.id] = "repeat";
                const staemb = new EmbedBuilder()
                .setColor("#0x7d3640")
                .setTitle(":repeat:  **|**  반복 기능이 활성화 되었습니다!")
                message.reply({ embeds: [staemb] });
            }
        }
        
        else {
            if (val === "켜기") {
                if (station[message.guild.id] === "repeat") return erremb(message, ":triangular_flag_on_post:  **|**  반복 기능이 이미 활성화 되어있습니다!", "반복을 종료하려면 반복 끄기를 입력해주세요.");
                station[message.guild.id] = "repeat";
                const staemb = new EmbedBuilder()
                .setColor("#0x7d3640")
                .setTitle(":repeat:  **|**  반복 기능이 활성화 되었습니다!")
                .setDescription("반복 기능을 사용하는 중에는 재생 알림이 표시되지 않습니다.")
                message.reply({ embeds: [staemb] });
            }

            else if (val === "끄기") {
                if (!station[message.guild.id]) return erremb(message, ":triangular_flag_on_post:  **|**  반복 기능이 아직 활성화 되지 않았습니다!", "반복을 시작하려면 반복 켜기를 입력해주세요.");
                station[message.guild.id] = false;
                const staemb = new EmbedBuilder()
                .setColor("#0x7d3640")
                .setTitle(":negative_squared_cross_mark:  **|**  반복 기능이 해제 되었습니다!")
                message.reply({ embeds: [staemb] });
            }
        }

    }
}