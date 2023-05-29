const https = require("https");
const ytdl = require("ytdl-core");
const ytpl = require("ytpl");
require("dotenv").config();

function search (q, callback) {
    console.log("[API] Youtube search Requset. - " + q);
    let options = {
        host: "www.googleapis.com",
        path: encodeURI("/youtube/v3/search?part=snippet&fields=items(id,snippet(title))&q=" + q + "&type=video&maxResults=10&key=" + process.env.YOUTUBE_API)
    }

    gety(options, (data) => {
        console.log("[API] Req Success.");
        console.log(data);
        return callback(data);
    });
}

async function getVideo (id, callback) {
    console.log("[YTDL] Youtube getVideo Requset. - " + id);

    let data_temp = await ytdl.getBasicInfo("https://youtu.be/" + id);
    console.log(data_temp);

    let data = new Map();
    data["id"] = data_temp["videoDetails"]["videoId"];
    data["title"] = data_temp["videoDetails"]["title"];


    console.log("[YTDL] Req Success.");
    console.log(data);
    return callback(data);
}

async function getPlaylist (id, callback) {
    console.log("[YTPL] Youtube getPlaylist Requset. - " + id);

    let playlist;

    try {
        playlist = await ytpl(id);
    }

    catch {
        return callback(null);
    }

    console.log(playlist);

    playlist = playlist["items"];

    return callback(playlist);
}

async function relatedVideo (id, callback) {
    console.log("[YTDL] Youtube relatedVideo Requset. - " + id);

    let data_temp = await ytdl.getBasicInfo("https://youtu.be/" + id);
    console.log(data_temp);


    console.log("[YTDL] Req Success.");
    console.log(data_temp["related_videos"]);
    return callback(data_temp["related_videos"]);
}

function gety (option, callback) {

    https.get(option, function(res) {
        let rse = "";
        res.on("data", function(chunk) {
            rse += chunk;
        });
        res.on("end", function() {
            rse = JSON.parse(rse);
            return callback(rse);
        });
    }).on("error", function(e) {
        return callback(JSON.parse("status:{message: 'Error On Req', status_code: 404}"));
    });

}

module.exports = {
    search: search,
    getVideo: getVideo,
    getPlaylist: getPlaylist,
    relatedVideo: relatedVideo
}
