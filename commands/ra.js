const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ra")
        .setDescription("Call on an RA to help you!")
        .addStringOption(option =>
            option.setName('message')
                .setDescription('What should they know?')
                .setRequired(true)),
    async execute(interaction) {
        const message = interaction.options.getString("message");
        const channel = client.channels.cache.get("1143712926654541865");
        const embedMessage = {
            type: `rich`,
            title: `${interaction.user.username} calls for an RA.`,
            description: `${message}`,
            color: 0x00FFFF,
            thumbnail: {
              url: `https://icons-for-free.com/iconfiles/png/512/attention+error+warining+icon-1320168050477798031.png`,
              height: null,
              width: null
            }
          };
        if (!message) return interaction.reply("Enter the message for the RAs!");

        channel.send({embeds: [embedMessage]});
        interaction.reply({
            content: `Message was sent to the RA chat!`,
            ephemeral: true,
        });
    },
};