const { EmbedBuilder, SlashCommandBuilder } = require("discord.js");

const ytdl = require("ytdl-core");
const ytpl = require("ytpl");
const youtube = require("../util/youtube.js");

const { erremb, norpembed } = require("../util/embed.js");

const { adder } = require("../functions/adder.js");

let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("재생")
		.setDescription("노래를 재생하거나 재생목록에 추가합니다.")
        .addStringOption((option) =>
            option.setName("옵션")
                .setDescription('유튜브 영상의 URL 또는 제목을 입력해주세요. 재생목록도 가능합니다.')
                .setRequired(true)),
    
	async execute(interaction) {

        console.log(interaction.options.data[0].value);

        let message = interaction;

        let val = interaction.options.data[0].value;

        //URL
        if (val.startsWith("http")) {
            console.log(val);

            if (val.search("v=") > -1) {
                val = val.split("v=")[1];
                if (val.search("&") > -1) {
                    val = val.split("&")[0];
                }

                console.log(val);

                if (ytdl.validateID(val)) {
                    const listemb = new EmbedBuilder()
                    .setColor("#6b26ff")
                    .setTitle(":crystal_ball:  **|**  URL을 불러오고 있어요.")
                    message.reply({ embeds: [listemb] });
                    message.deleteReply();
                    return val_to_dt(val);
                }
                else return erremb(message, ":triangular_flag_on_post:  **|**  URL이 올바르지 않습니다!", "URL이 올바른지 다시 한번 확인 해주세요!");
            }

            else if (val.search("youtu.be/") > -1) {
                val = val.split("youtu.be/")[1];
                console.log(val);
                if (val.search("=") > -1) {
                    val = val.split("?")[0];
                }

                console.log(val);

                if (ytdl.validateID(val)) {
                    const listemb = new EmbedBuilder()
                    .setColor("#6b26ff")
                    .setTitle(":crystal_ball:  **|**  URL을 불러오고 있어요.")
                    message.reply({ embeds: [listemb] });
                    message.deleteReply();
                    return val_to_dt(val);
                }
                else return erremb(message, ":triangular_flag_on_post:  **|**  URL이 올바르지 않습니다!", "URL이 올바른지 다시 한번 확인 해주세요!");
            }

            //Playlist
            else if (val.search("list=") > -1) {
                val = val.split("list=")[1];
                if (val.search("&") > -1) {
                    val = val.split("&")[0];
                }

                console.log(val);
                console.log(ytpl.validateID(val));

                if (ytpl.validateID(val)) {

                    youtube.getPlaylist(val, async (list) => {
                        console.log(list);
                        if (!list) return erremb(message, ":triangular_flag_on_post:  **|**  URL이 올바르지 않습니다!", "URL이 올바른지 다시 한번 확인 해주세요!");
                        
                        console.log(list);
    
                        let res = "";
                        let orig = 1;
    
                        for (let unter in list) {
                            console.log(list[unter]);
                            console.log(list[unter].title);
                            console.log(list[unter].id);
    
                            res += "**`" + orig + "`** | " + list[unter].title + "\n";
                            ++orig;

                            await adder(interaction, list[unter].title, list[unter].id, true);
                        }
    
                        const listemb = new EmbedBuilder()
                        .setColor("#7d3640")
                        .setTitle(":white_check_mark:  **|**  재생목록에 추가했습니다!")
                        .setDescription(res)
                        .setThumbnail("https://img.youtube.com/vi/" + list[0].id + "/mqdefault.jpg")
                        return message.reply({ embeds: [listemb] });
                    });

                }
                else return erremb(message, ":triangular_flag_on_post:  **|**  URL이 올바르지 않습니다!", "URL이 올바른지 다시 한번 확인 해주세요!");
            }
            //Playlist

            else return erremb(message, ":triangular_flag_on_post:  **|**  URL 형식이 올바르지 않습니다!", "URL이 올바른지 다시 한번 확인 해주세요!");

            function val_to_dt (val_in) {
                youtube.getVideo(val_in, (data) => {
                    console.log(data);
                    return adder(interaction, data.title, data.id, false);
                });
            }
        }
        //URL

        //Search
        else {

            youtube.search(val, (videos) => {
                videos = videos.items;

                let res = "";
                for (let unter in videos) {
                    res += "**`" + (parseInt(unter) + 1) + "`** | " + videos[unter].snippet.title + "\n";
                }

                if (!res) return erremb(message, ":triangular_flag_on_post:  **|**  곡을 찾지 못했습니다...", "검색어를 변형하여 다시 한번 입력해보세요!");

                let src = new EmbedBuilder()
                .setColor("#7d3640")
                .setAuthor({ name: "검색 결과", iconURL: message.user.displayAvatarURL() })
                .setDescription(res)
                .setFooter({ text: "트랙 번호만 입력하시거나 취소하시려면  `취소`  라고 입력해 주세요." })
                message.reply({ embeds: [src] }).then(() => {
                    message.channel.awaitMessages({
                        filter: m => m.author.id === message.user.id,
                        max: 1,
                        time: 30000,
                        errors: ["time"]
                    }).then((response) => {
                        response = response.first();
                        if (response.content === "취소") {
                            message.deleteReply();
                            response.delete();
                            return norpembed(message, ":triangular_flag_on_post:  **|**  곡 선택이 취소되었습니다!", "출입 도어가 닫힙니다.");
                        }
                        if (parseInt(response.content) > 0 && parseInt(response.content) < 11) {
                            message.deleteReply();
                            response.content = parseInt(response.content) - 1;
                            response.delete();
                            return adder(interaction, videos[response.content].snippet.title, videos[response.content].id.videoId, false);
                        }
                        else {
                            message.deleteReply();
                            response.delete();
                            return norpembed(message, ":triangular_flag_on_post:  **|**  곡 선택이 취소되었습니다!", "올바르지 않은 수가 입력되었습니다. 1 ~ 10 안으로 선택 해주세요.");
                        }
                    }).catch((err) => {
                        console.log(err);
                        message.deleteReply();
                        return norpembed(message, ":triangular_flag_on_post:  **|**  곡 선택이 취소되었습니다!", "곡을 선택하는데 너무 오랜 시간이 걸렸습니다.");
                    });
                });

            });

        }
        //Search

	}
}