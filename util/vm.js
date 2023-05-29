function chkVersion () {
    let pjson = require('../package.json');

    const https = require("https");

    let options = {
        host: "raw.githubusercontent.com",
        path: encodeURI("/Emin-G/Daydream-music-bot/master/package.json")
    }

    gety(options, (data) => {
        if (!data) return console.log("[Support] 최신 버전에 대한 정보를 불러오지 못했습니다.");

        else {
            data = String(data.version).split(".");
            pjson = String(pjson.version).split(".");

            for (let v in data) {
                if (parseInt(data[v]) > parseInt(pjson[v])) {
                    console.log("[Support] 새로운 버전을 찾았습니다! ( 현재 버전 : " + pjson.join(".") + " / 새로운 버전 : " + data.join(".") + " )");
                    return console.log("[Support] https://github.com/Emin-G/Daydream-music-bot");
                }
            }
        }
    });

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
            return callback(null);
        });

    }
}

module.exports = {
    chkVersion: chkVersion
}