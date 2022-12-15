const { EmbedBuilder } = require("discord.js");
let { connection, player, playlist, resource, volume, station } = require("../functions/val.js");

function erremb (message, title, sub) {
    const errembed = new EmbedBuilder()
    .setColor("#0x7d3640")
    .setTitle(title)
    .setDescription(sub)
    return message.reply({ embeds: [errembed] });
}

function norpembed (message, title, sub) {
    const errembed = new EmbedBuilder()
    .setColor("#0x7d3640")
    .setTitle(title)
    .setDescription(sub)
    return message.channel.send({ embeds: [errembed] });
}

module.exports = {
    erremb: erremb,
    norpembed: norpembed
}