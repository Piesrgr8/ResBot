const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("announce")
        .setDescription("Make an announcement wherever you are!")
        .addStringOption(option =>
            option.setName('message')
                .setDescription('What should they know?')
                .setRequired(true)),
    async execute(interaction) {
        const message = interaction.options.getString("message");
        const channel = client.channels.cache.get("1143614606212866129");
        const hasRole = interaction.member.roles.cache.some(r => r.name === "Residential Assistant" || r.name === "Developer");
        const embedMessage = {
            type: `rich`,
            title: `Announcement by ${interaction.user.username}!`,
            description: `${message}`,
            color: 0x04FF00,
            thumbnail: {
              url: `https://cdn-icons-png.flaticon.com/512/426/426334.png`,
              height: null,
              width: null
            }
          };
        if (!message) return interaction.reply("Enter the message for everyone!");

        if (!hasRole) return interaction.reply("You must be an RA to use this command!");

        channel.send({embeds: [embedMessage]});
        interaction.reply({
            content: `Announcement was made to the channel!`,
            ephemeral: true,
        });
    },
};