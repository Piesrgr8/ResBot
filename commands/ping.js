const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Am I alive?"),
    async execute(interaction) {
        await interaction.reply("Pong!");
    },
};
