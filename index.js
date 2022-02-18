const { Client, Util, MessageEmbed, Intents, Permissions } = require("discord.js");
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus, getVoiceConnection } = require("@discordjs/voice");

const ytdl = require("ytdl-core");
const youtube = require("./youtube/youtube.js");

require("dotenv").config();

const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES] });

const prefix = "!";

bot.on("warn", console.warn);
bot.on("error", console.error);
bot.on("ready", () => console.log("[Daydream] " + bot.user.tag + " 계정에 접속했습니다."));
bot.on("shardDisconnect", (event, id) => console.log("[Daydream] Shard " + id + " disconnected (" + event.code + ") " + event + ", trying to reconnect..."));
bot.on("shardReconnecting", (id) => console.log("[Daydream] Shard " + id + " reconnecting..."));
bot.on("ready", () => {
    bot.user.setPresence({
        status: "idle"
    });
});

let connection = new Map();
let player = new Map();
let playlist = new Map();
let resource = new Map();
let volume = new Map();
let station = new Map();

bot.on("messageCreate", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    let args = message.content.slice(prefix.length).split(" ");

    if (args[0] === "재생") {
        let val = args.slice(1).join(" ");

        //URL
        if (val.startsWith("http")) {
            console.log(val);

            if (val.search("v=") > -1) {
                val = val.split("v=")[1];
                if (val.search("&") > -1) {
                    val = val.split("&")[0];
                }

                console.log(val);

                return val_to_dt(val);
            }

            else if (val.search("youtu.be/") > -1) {
                val = val.split("youtu.be/")[1];
                console.log(val);
                if (val.search("=") > -1) {
                    val = val.split("?")[0];
                }

                console.log(val);

                return val_to_dt(val);
            }

            //Playlist
            else if (val.search("list=") > -1) {
                val = val.split("list=")[1];
                if (val.search("&") > -1) {
                    val = val.split("&")[0];
                }

                console.log(val);

                youtube.getPlaylist(val, (list) => {
                    console.log(list);
                    if (!list[0].items) return erremb(":triangular_flag_on_post:  **|**  URL 형식이 올바르지 않습니다!", "URL이 올바른지 다시 한번 확인 해주세요!");
                    
                    console.log(list);

                    let res = "";
                    let orig = 1;

                    for (let unter in list) {
                        console.log(list[unter].items);
                        for (let counter in list[unter].items) {
                            console.log(list[unter].items[counter]);
                            console.log(list[unter].items[counter].snippet.title);
                            console.log(list[unter].items[counter].snippet.resourceId.videoId);

                            res += "**`" + orig + "`** | " + list[unter].items[counter].snippet.title + "\n";
                            ++orig;
                            adder(list[unter].items[counter].snippet.title, list[unter].items[counter].snippet.resourceId.videoId, true);
                        }
                    }

                    const listemb = new MessageEmbed()
                    .setColor("#0x7d3640")
                    .setTitle(":white_check_mark:  **|**  재생목록에 추가했습니다!")
                    .setDescription(res)
                    .setThumbnail("https://img.youtube.com/vi/" + list[0].items[0].snippet.resourceId.videoId + "/mqdefault.jpg")
                    return message.channel.send({ embeds: [listemb] });

                });
            }
            //Playlist

            else return erremb(":triangular_flag_on_post:  **|**  URL 형식이 올바르지 않습니다!", "URL이 올바른지 다시 한번 확인 해주세요!");

            function val_to_dt (val_in) {
                youtube.getVideo(val_in, (data) => {
                    console.log(data);
                    console.log(data.items.length);
                    if (data.items.length < 1) return erremb(":triangular_flag_on_post:  **|**  URL 형식이 올바르지 않습니다!", "URL이 올바른지 다시 한번 확인 해주세요!");
                    return adder(data.items[0].snippet.title, data.items[0].id, false);
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

                let src = new MessageEmbed()
                .setColor("#0x7d3640")
                .setAuthor({ name: "검색 결과", iconURL: message.author.displayAvatarURL() })
                .setDescription(res)
                .setFooter({ text: "트랙 번호만 입력하시거나 취소하시려면  `취소`  라고 입력해 주세요." })
                message.channel.send({ embeds: [src] }).then((bef_msg) => {
                    message.channel.awaitMessages({
                        filter: m => m.author.id === message.author.id,
                        max: 1,
                        time: 30000,
                        errors: ["time"]
                    }).then((response) => {
                        response = response.first();
                        if (response.content === "취소") {
                            bef_msg.delete();
                            return erremb(":triangular_flag_on_post:  **|**  곡 선택이 취소되었습니다!", "출입 도어가 닫힙니다.");
                        }
                        if (parseInt(response.content) > 0 && parseInt(response.content) < 11) {
                            bef_msg.delete();
                            response.content = parseInt(response.content) - 1;
                            return adder(videos[response.content].snippet.title, videos[response.content].id.videoId, false);
                        }
                        else {
                            bef_msg.delete();
                            return erremb(":triangular_flag_on_post:  **|**  곡 선택이 취소되었습니다!", "올바르지 않은 수가 입력되었습니다. 1 ~ 10 안으로 선택 해주세요.");
                        }
                    }).catch((err) => {
                        console.log(err);
                        bef_msg.delete();
                        return erremb(":triangular_flag_on_post:  **|**  곡 선택이 취소되었습니다!", "곡을 선택하는데 너무 오랜 시간이 걸렸습니다.");
                    });
                });

            });

        }
        //Search

    }

    if (args[0] === "볼륨") {
        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "볼륨은 노래를 재생하는 중에만 바꿀 수 있습니다.");
        if (parseInt(args[1]) / 100 <= 1 && parseInt(args[1]) / 100 >= 0) {
            volume[message.guild.id] = parseInt(args[1]) / 100;
            resource[message.guild.id].volume.setVolume(volume[message.guild.id]);
            const volemb = new MessageEmbed()
            .setColor("#0x7d3640")
            .setTitle(":loud_sound:  **|**  볼륨을 `" + parseInt(args[1]) + "%` 으로 설정했습니다!")
            return message.channel.send({ embeds: [volemb] });
        }

        else if (!args[1]) {
            const volemb = new MessageEmbed()
            .setColor("#0x7d3640")
            .setTitle(":loud_sound:  **|**  현재 볼륨은 `" + (volume[message.guild.id] * 100) + "%` 입니다!")
            return message.channel.send({ embeds: [volemb] });
        }

        else erremb(":triangular_flag_on_post:  **|**  볼륨 값이 올바르지 않습니다!", "볼륨은 0 ~ 100 까지 설정 할 수 있습니다.");
    }
 
    if (args[0] === "중지") {
        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "정... 정지가 안대! 정지 시킬 수가 업써! 안댕!");

        cleanup(message.guild.id);

        const stemb = new MessageEmbed()
        .setColor("#0x7d3640")
        .setTitle(":stop_button:  **|**  노래 재생을 멈췄습니다!")
        return message.channel.send({ embeds: [stemb] });
    }

    if (args[0] === "스킵") {
        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "스킵 할 노래가 없습니다.");
        if (!playlist[message.guild.id]) return erremb(":triangular_flag_on_post:  **|**  재생 목록을 찾지 못했습니다!", "이것 참 심오하군요...");

        args[1] = parseInt(args[1]) - 1;

        if (!args[1] || args[1] == 0) args[1] = 0;

        if (args[1] > -1 && args[1] < Object.keys(playlist[message.guild.id]).length) {

            let temp_tilt = { title: playlist[message.guild.id][args[1]]["title"], id: playlist[message.guild.id][args[1]]["id"] };

            skiper(args[1], () => {
                const skiemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":track_next:  **|**  스킵되었습니다!")
                .setDescription("`" + temp_tilt.title + "`")
                .setThumbnail("https://img.youtube.com/vi/" + temp_tilt.id + "/mqdefault.jpg")
                message.channel.send({ embeds: [skiemb] });

                if (args[1] < 1) {
                    player[message.guild.id].stop();
                    return handler(message.guild.id);
                }
            });
        }

        else return erremb(":triangular_flag_on_post:  **|**  " + (args[1] + 1) + "번 트랙을 찾지 못했습니다!", "!재생목록 에서 트랙 번호를 다시 한번 확인 해주세요!");

    }

    if (args[0] === "재생목록") {
        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "재생 목록을 찾지 못했습니다.");
        if (!playlist[message.guild.id]) return erremb(":triangular_flag_on_post:  **|**  재생 목록을 찾지 못했습니다!", "이것 참 심오하군요...");
        let res = "";

        let temp_unter = 1;

        for (let unter in playlist[message.guild.id]) {
            res += "**`" + temp_unter + "`** | " + playlist[message.guild.id][unter]["title"] + "\n";
            ++temp_unter;
        }

        const plistemb = new MessageEmbed()
        .setColor("#0x7d3640")
        .setTitle(":bookmark:  **|**  재생 목록")
        .setDescription(res)
        .setThumbnail("https://img.youtube.com/vi/" + playlist[message.guild.id][0]["id"] + "/mqdefault.jpg")
        message.channel.send({ embeds: [plistemb] });
    }

    if (args[0] === "스테이션") {
        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "재생 중인 노래가 없어 스테이션 기능을 활성화 하지 못했습니다.");
        if (!playlist[message.guild.id]) return erremb(":triangular_flag_on_post:  **|**  재생 목록을 찾지 못했습니다!", "이것 참 심오하군요...");

        if (!args[1]) {
            if (station[message.guild.id] === "on") {
                station[message.guild.id] = false;
                const staemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":negative_squared_cross_mark:  **|**  스테이션 기능이 해제 되었습니다!")
                message.channel.send({ embeds: [staemb] });
            }

            else if (station[message.guild.id] === "repeat") return erremb(":triangular_flag_on_post:  **|**  반복 기능이 이미 활성화 되어있습니다!", "스테이션 기능은 반복 기능과 동시에 사용할 수 없습니다.\n반복을 종료하려면 반복 끄기를 입력해주세요.");

            else {
                station[message.guild.id] = "on";
                const staemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":fire:  **|**  스테이션 기능이 활성화 되었습니다!")
                message.channel.send({ embeds: [staemb] });
            }
        }

        else {
            if (args[1] === "켜기") {
                if (station[message.guild.id] === "on") return erremb(":triangular_flag_on_post:  **|**  스테이션 기능이 이미 활성화 되어있습니다!", "스테이션을 종료하려면 스테이션 끄기를 입력해주세요.");
                station[message.guild.id] = "on";
                const staemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":fire:  **|**  스테이션 기능이 활성화 되었습니다!")
                message.channel.send({ embeds: [staemb] });
            }

            else if (args[1] === "끄기") {
                if (!station[message.guild.id]) return erremb(":triangular_flag_on_post:  **|**  스테이션 기능이 아직 활성화 되지 않았습니다!", "스테이션을 시작하려면 스테이션 켜기를 입력해주세요.");
                station[message.guild.id] = false;
                const staemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":negative_squared_cross_mark:  **|**  스테이션 기능이 해제 되었습니다!")
                message.channel.send({ embeds: [staemb] });
            }

            else if (args[1] === "스킵") {
                if (!station[message.guild.id]) return erremb(":triangular_flag_on_post:  **|**  스테이션 기능이 아직 활성화 되지 않았습니다!", "스테이션을 시작하려면 스테이션 켜기를 입력해주세요.");
                stat_handler(message.guild.id);
                const staemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":fire: :track_next:  **|**  스테이션 곡이 스킵 되었습니다!")
                message.channel.send({ embeds: [staemb] });
            }

            else return erremb(":triangular_flag_on_post:  **|**  지정된 스테이션 상태가 올바르지 않습니다!", "스테이션 켜기 혹은 끄기로 상태를 지정 할 수 있습니다.");
        }

    }

    if (args[0] === "반복") {
        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") return erremb(":triangular_flag_on_post:  **|**  재생 중인 노래가 없습니다!", "재생 중인 노래가 없어 반복 기능을 활성화 하지 못했습니다.");
        if (!playlist[message.guild.id]) return erremb(":triangular_flag_on_post:  **|**  재생 목록을 찾지 못했습니다!", "이것 참 심오하군요...");

        if (!args[1]) {
            if (station[message.guild.id] === "repeat") {
                station[message.guild.id] = false;
                const staemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":negative_squared_cross_mark:  **|**  반복 기능이 해제 되었습니다!")
                message.channel.send({ embeds: [staemb] });
            }

            else if (station[message.guild.id] === "on") return erremb(":triangular_flag_on_post:  **|**  스테이션 기능이 이미 활성화 되어있습니다!", "반복 기능은 스테이션 기능과 동시에 사용할 수 없습니다.\n스테이션을 종료하려면 스테이션 끄기를 입력해주세요.");

            else {
                station[message.guild.id] = "repeat";
                const staemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":repeat:  **|**  반복 기능이 활성화 되었습니다!")
                message.channel.send({ embeds: [staemb] });
            }
        }
        
        else {
            if (args[1] === "켜기") {
                if (station[message.guild.id] === "repeat") return erremb(":triangular_flag_on_post:  **|**  반복 기능이 이미 활성화 되어있습니다!", "반복을 종료하려면 반복 끄기를 입력해주세요.");
                station[message.guild.id] = "repeat";
                const staemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":repeat:  **|**  반복 기능이 활성화 되었습니다!")
                message.channel.send({ embeds: [staemb] });
            }

            else if (args[1] === "끄기") {
                if (!station[message.guild.id]) return erremb(":triangular_flag_on_post:  **|**  반복 기능이 아직 활성화 되지 않았습니다!", "반복을 시작하려면 반복 켜기를 입력해주세요.");
                station[message.guild.id] = false;
                const staemb = new MessageEmbed()
                .setColor("#0x7d3640")
                .setTitle(":negative_squared_cross_mark:  **|**  반복 기능이 해제 되었습니다!")
                message.channel.send({ embeds: [staemb] });
            }
        }
    }

    function stat_handler (guildId) {
        if (station[guildId] === "on") station[guildId] = [playlist[guildId][0].id];
        else station[guildId][station[guildId].length] = playlist[guildId][0].id;

        console.log(station[guildId]);

        youtube.relatedVideo(playlist[guildId][0].id, (rel_video) => {
            if (!rel_video.items) {
                return skiper(0, () => {
                    return handler(message.guild.id);
                });
            }

            for (let unter in rel_video.items) {
                if (rel_video.items[unter].snippet) {
                    console.log(station[guildId]);
                    console.log(rel_video.items[unter].id.videoId);
                    if (!station[guildId].find(element => element === rel_video.items[unter].id.videoId)) {
                        console.log(rel_video);
                        console.log(rel_video.items[unter]);
                        console.log(rel_video.items[unter].snippet);
                        adder(rel_video.items[unter].snippet.title, rel_video.items[unter].id.videoId, true);
                        return skiper(0, () => {
                            return handler(message.guild.id);
                        });
                    }
                }
            }
        });
    }

    function skiper (track, callback) {
        delete playlist[message.guild.id][track];

        console.log(playlist[message.guild.id]);

        if (!playlist[message.guild.id]) return cleanup(message.guild.id);
                
        let temp_plist = playlist[message.guild.id];
        playlist[message.guild.id] = new Map();

        let counter = 0;

        for (let unter in temp_plist) {
            playlist[message.guild.id][counter] = temp_plist[unter];
            counter++;
        }

        console.log(playlist);

        return callback(true);
    }

    async function adder (title, id, isList) {

        //Connection
        console.log(getVoiceConnection(message.guild.id));

        if (!connection[message.guild.id] || getVoiceConnection(message.guild.id)._state.status !== "ready") {
            cleanup(message.guild.id);
            connection[message.guild.id] = await joinVoiceChannel({
                channelId: message.member.voice.channel.id,
                guildId: message.guild.id,
                adapterCreator: message.guild.voiceAdapterCreator,
            });
        }
        console.log(getVoiceConnection(message.guild.id));
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

            const adderemb = new MessageEmbed()
            .setColor("#0x7d3640")
            .setTitle(":white_check_mark:  **|**  재생목록에 추가했습니다!")
            .setDescription("`" + title + "`")
            .setThumbnail("https://img.youtube.com/vi/" + id + "/mqdefault.jpg")
            return message.channel.send({ embeds: [adderemb] });
        }

        else {
            resource[message.guild.id] = true;
            connection[message.guild.id].once(VoiceConnectionStatus.Ready, () => {
                return handler(message.guild.id);
            });
        }

    }

    function handler (guildId) {
        let song = playlist[guildId][0];

        console.log(playlist);
        console.log(song);

        if (!song) return cleanup(guildId);

        return play(song.title, song.id);
    }

    async function play (title, id) {
        let url = "https://youtu.be/" + id;

        player[message.guild.id] = createAudioPlayer();
        connection[message.guild.id].subscribe(player[message.guild.id]);

        if (!volume[message.guild.id]) volume[message.guild.id] = 1;

        console.log(getVoiceConnection(message.guild.id)._state.status);
        if (getVoiceConnection(message.guild.id)._state.status !== "ready" || !connection[message.guild.id]) return cleanup(message.guild.id);

        resource[message.guild.id] = createAudioResource( ytdl(url, {filter : "audioonly", quality: "highestaudio", highWaterMark: 1 << 25 }), { inlineVolume: true } );
        
        resource[message.guild.id].volume.setVolume(volume[message.guild.id]);

        player[message.guild.id].play(resource[message.guild.id]);

        player[message.guild.id].once(AudioPlayerStatus.Idle, () => {
            if (station[message.guild.id] === "repeat") {
                adder(title, id, true);
                return skiper(0, () => {
                    return handler(message.guild.id);
                });
            }
            if (!playlist[message.guild.id][1] && station[message.guild.id]) return stat_handler(message.guild.id);
            return skiper(0, () => {
                return handler(message.guild.id);
            });
        });
        
        let playemb = new MessageEmbed()
        .setColor("#0x7d3640")
        .setImage("https://img.youtube.com/vi/" + id + "/mqdefault.jpg");

        if (!station[message.guild.id]) playemb.setTitle(":notes:  **|**  " + title);
        else playemb.setTitle(":fire:  **|**  " + title);
        return message.channel.send({ embeds: [playemb] });
    }

    function cleanup (guildId) {
        if (connection[guildId]) {
            connection[guildId].destroy();
            delete connection[guildId];
        }
        if (player[guildId]) {
            player[guildId].stop();
            delete player[guildId];
        }
        if (playlist[guildId]) delete playlist[guildId];
        if (resource[guildId]) delete resource[guildId];
        if (volume[guildId]) delete volume[guildId];
        if (station[guildId]) delete station[guildId];
    }

    function erremb (title, sub) {
        const errembed = new MessageEmbed()
        .setColor("#0x7d3640")
        .setTitle(title)
        .setDescription(sub)
        return message.channel.send({ embeds: [errembed] });
    }
});

bot.login(process.env.BOT_TOKEN);