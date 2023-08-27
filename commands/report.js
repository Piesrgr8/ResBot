const {SlashCommandBuilder, ActionRowBuilder, Events, ModalBuilder, TextInputBuilder, TextInputStyle} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("report")
        .setDescription("Report behavior or server issues."),
    async execute(interaction) {
        const modal = new ModalBuilder()
            .setCustomId("report")
            .setTitle("Report Issue");

        const reportType = new TextInputBuilder()
			.setCustomId('reportType')
			.setLabel("What/who are you reporting in this form?")
			.setStyle(TextInputStyle.Short);

        const reportProblem = new TextInputBuilder()
			.setCustomId('reportProblem')
			.setLabel("What is the issue that you're reporting?")
			.setStyle(TextInputStyle.Short);

		const reportDesc = new TextInputBuilder()
			.setCustomId('reportDesc')
			.setLabel("Describe the issue as much as possible!")
			.setStyle(TextInputStyle.Paragraph);

		const firstActionRow = new ActionRowBuilder().addComponents(reportType);
		const secondActionRow = new ActionRowBuilder().addComponents(reportProblem);
        const thirdActionRow = new ActionRowBuilder().addComponents(reportDesc);

        modal.addComponents(firstActionRow, secondActionRow, thirdActionRow);

        await interaction.showModal(modal);
    },
};
