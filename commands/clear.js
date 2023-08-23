const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("clear")
        .setDescription("Clear messages!")
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Amount of messages to delete.')
                .setRequired(true)),
    async execute(interaction) {
        const msgCount = interaction.options.getInteger("amount");
        if (!msgCount) return interaction.reply("Enter the amount of messages to clear!");
        //if (isNaN(args[0])) return message.reply("Enter a real number, not this bullshit.");

        if (msgCount > 100) return interaction.reply("Too high! Out of bounds!");
        if (msgCount < 1) return interaction.reply("What? I can't clear nothing bro. Specify a higher number than that.");

        await interaction.channel.messages.fetch({limit: msgCount}).then(messages => {
            interaction.channel.bulkDelete(messages);
            interaction.reply({
                content: `Successfully deleted ${msgCount} messages!`,
                ephemeral: true,
            });
        }).catch(err => console.log(err));
    },
};