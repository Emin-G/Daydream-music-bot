const https = require("https");
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

function getVideo (id, callback) {
    console.log("[API] Youtube getVideo Requset. - " + id);
    let options = {
        host: "www.googleapis.com",
        path: encodeURI("/youtube/v3/videos?part=snippet&fields=items(id,snippet(title))&id=" + id + "&key=" + process.env.YOUTUBE_API)
    }

    gety(options, (data) => {
        console.log("[API] Req Success.");
        console.log(data);
        return callback(data);
    });
}

function getPlaylist (id, callback) {
    console.log("[API] Youtube getPlaylist Requset. - " + id);
    let playlist = new Map();
    let unter = 0;
    let options;
    function multi_page (nextPageToken) {
        if (!nextPageToken) {
            options = {
                host: "youtube.googleapis.com",
                path: encodeURI("/youtube/v3/playlistItems?part=snippet&fields=nextPageToken,items(snippet(title,resourceId(videoId)))&maxResults=50&playlistId=" + id + "&key=" + process.env.YOUTUBE_API)
            }
        }

        else {
            options = {
                host: "youtube.googleapis.com",
                path: encodeURI("/youtube/v3/playlistItems?part=snippet&fields=nextPageToken,items(snippet(title,resourceId(videoId)))&maxResults=50&pageToken=" + nextPageToken + "&playlistId=" + id + "&key=" + process.env.YOUTUBE_API)
            }
        }

        gety(options, (data) => {
            console.log("[API] Req Success.");
            console.log(data);
            playlist[unter] = data;
            console.log(playlist);
            ++unter;
            if (data.nextPageToken) {
                return multi_page(data.nextPageToken);
            }
            else return callback(playlist);
        });
    }
    
    multi_page(null);
}

function relatedVideo (id, callback) {
    console.log("[API] Youtube relatedVideo Requset. - " + id);
    let options = {
        host: "www.googleapis.com",
        path: encodeURI("/youtube/v3/search?part=snippet&fields=items(id,snippet(title))&type=video&maxResults=5&relatedToVideoId=" + id + "&key=" + process.env.YOUTUBE_API)
    }

    gety(options, (data) => {
        console.log("[API] Req Success.");
        console.log(data);
        return callback(data);
    });
}

function gety (option, callback) {

    https.get(option, function(res) {
        var rse = "";
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
