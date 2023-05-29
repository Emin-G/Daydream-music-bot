const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");
const { getVoiceConnection } = require("@discordjs/voice");
const { erremb } = require("../util/embed.js");

const { stat_handler } = require("../functions/stat_handler.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("스테이션")
		.setDescription("유튜브 추천 동영상을 기반으로 비슷한 영상을 계속 재생해요.")
        .addStringOption((option) =>
            option.setName("옵션")
                .setDescription("공백 또는 끄기, 켜기, 스킵을 입력해주세요. 옵션이 공백이면 알아서 판단해요.")
                .setRequired(false)),
    
	async execute(interaction) {

        let message = interaction;
        let val;

        if (interaction.options.data[0]) {
            val = interaction.options.data[0].value;
        }

        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(message, ":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "재생 중인 노래가 없어 스테이션 기능을 활성화 하지 못했습니다.");
        if (!playlist[message.guild.id]) return erremb(message, ":triangular_flag_on_post:  **|**  재생 목록을 찾지 못했습니다!", "이것 참 심오하군요...");

        if (!val) {
            if (station[message.guild.id]) {
                station[message.guild.id] = false;
                const staemb = new EmbedBuilder()
                .setColor("#7d3640")
                .setTitle(":negative_squared_cross_mark:  **|**  스테이션 기능이 해제 되었습니다!")
                message.reply({ embeds: [staemb] });
            }

            else if (station[message.guild.id] === "repeat") return erremb(message, ":triangular_flag_on_post:  **|**  반복 기능이 이미 활성화 되어있습니다!", "스테이션 기능은 반복 기능과 동시에 사용할 수 없습니다.\n반복을 종료하려면 반복 끄기를 입력해주세요.");

            else {
                station[message.guild.id] = "on";
                const staemb = new EmbedBuilder()
                .setColor("#7d3640")
                .setTitle(":fire:  **|**  스테이션 기능이 활성화 되었습니다!")
                message.reply({ embeds: [staemb] });
            }
        }

        else {
            if (val === "켜기") {
                if (station[message.guild.id] === "on") return erremb(message, ":triangular_flag_on_post:  **|**  스테이션 기능이 이미 활성화 되어있습니다!", "스테이션을 종료하려면 스테이션 끄기를 입력해주세요.");
                station[message.guild.id] = "on";
                const staemb = new EmbedBuilder()
                .setColor("#7d3640")
                .setTitle(":fire:  **|**  스테이션 기능이 활성화 되었습니다!")
                message.reply({ embeds: [staemb] });
            }

            else if (val === "끄기") {
                if (!station[message.guild.id]) return erremb(message, ":triangular_flag_on_post:  **|**  스테이션 기능이 아직 활성화 되지 않았습니다!", "스테이션을 시작하려면 스테이션 켜기를 입력해주세요.");
                station[message.guild.id] = false;
                const staemb = new EmbedBuilder()
                .setColor("#7d3640")
                .setTitle(":negative_squared_cross_mark:  **|**  스테이션 기능이 해제 되었습니다!")
                message.reply({ embeds: [staemb] });
            }

            else if (val === "스킵") {
                if (!station[message.guild.id]) return erremb(message, ":triangular_flag_on_post:  **|**  스테이션 기능이 아직 활성화 되지 않았습니다!", "스테이션을 시작하려면 스테이션 켜기를 입력해주세요.");
                stat_handler(message, message.guild.id);
                const staemb = new EmbedBuilder()
                .setColor("#7d3640")
                .setTitle(":fire: :track_next:  **|**  스테이션 곡이 스킵 되었습니다!")
                message.reply({ embeds: [staemb] });
            }

            else return erremb(message, ":triangular_flag_on_post:  **|**  지정된 스테이션 상태가 올바르지 않습니다!", "스테이션 켜기 혹은 끄기로 상태를 지정 할 수 있습니다.");
        }
        
    }
}