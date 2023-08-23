const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = (client) => {
    const channel = client.channels.cache.get("1143196881745346674");

    const ROLES = {
        FIRST: '1143196880445132805',
        SECOND: '1143196880445132806',
        THIRD: '1143196880445132807',
        FOURTH: '1143196880445132808',
        FIFTH: '1143196880445132804',
    }

    const checkemoji1 = "1️⃣";
    const checkemoji2 = "2️⃣";
    const checkemoji3 = "3️⃣";
    const checkemoji4 = "4️⃣";
    const checkemoji5 = "5️⃣";

    channel.send({
        content: "Which floor do you currently live on?",
        components: [
            new ActionRowBuilder().setComponents(
                new ButtonBuilder()
                    .setCustomId('first')
                    .setLabel(`${checkemoji1} Floor`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('second')
                    .setLabel(`${checkemoji2} Floor`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('third')
                    .setLabel(`${checkemoji3} Floor`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('fourth')
                    .setLabel(`${checkemoji4} Floor`)
                    .setStyle(ButtonStyle.Primary),
                new ButtonBuilder()
                    .setCustomId('fifth')
                    .setLabel(`${checkemoji5} Floor`)
                    .setStyle(ButtonStyle.Primary),
            ),
        ],
    });

    client.on("interactionCreate", async (interaction) => {
        if (interaction.channelId != channel) return;
        if (!interaction.isButton()) return;
        
        const role = interaction.guild.roles.cache.get(
            ROLES[interaction.customId.toUpperCase()]
        );

        if (!role) return interaction.reply({ content: 'Role not found', ephemeral: true });
        
        return interaction.member.roles
            .add(role)
            .then((member) =>
                interaction.reply({
                    content: `The ${role} role was added to you ${member}`,
                    ephemeral: true,
                })
        )
        .catch((err) => {
            console.log(err);
            return interaction.reply({
                content: `Something went wrong. The ${role} role was not added`,
                ephemeral: true,
            });
        });
    });
};
