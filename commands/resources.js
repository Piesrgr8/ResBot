const {SlashCommandBuilder} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("resources")
        .setDescription("Need help? I'll provide!"),
    async execute(interaction) {
        const embedMessage = {
            type: `rich`,
            title: `Campus Resources`,
            description: `Need help finding your way around? Need to contact someone for help? Here is a table of it all!`,
            color: 0x00FFFF,
            fields: [
              {
                name: `Academic Advising`,
                value: `(765) 285-1161`,
                inline: true
              },
              {
                name: `Career Center`,
                value: `(765) 285-1522`,
                inline: true
              },
              {
                name: `Counseling Center`,
                value: `(765) 285-1736`,
                inline: true
              },
              {
                name: `Dean of Students`,
                value: `(765) 285-1545`,
                inline: true
              },
              {
                name: `Disability Services`,
                value: `(765) 285-5293`,
                inline: true
              },
              {
                name: `Health Center`,
                value: `(765) 285-8431`,
                inline: true
              },
              {
                name: `Multicultural Center`,
                value: `(765) 285-1344`,
                inline: true
              },
              {
                name: `Parking Services`,
                value: `(765) 285-1208`,
                inline: true
              },
              {
                name: `Registrar`,
                value: `(765) 285-1722`,
                inline: true
              },
              {
                name: `SFS`,
                value: `(765) 285-1643`,
                inline: true
              },
              {
                name: `Student Life`,
                value: `(765) 285-4733`,
                inline: true
              },
              {
                name: `Tech Center`,
                value: `(765) 285-1517`,
                inline: true
              },
              {
                name: `Undergraduate Admissions`,
                value: `(765) 285-8300`,
                inline: true
              },
              {
                name: `University Police`,
                value: `(765) 285-1832`,
                inline: true
              },
              {
                name: `Victim Services`,
                value: `(765) 285-9063`,
                inline: true
              }
            ],
            thumbnail: {
              url: `https://img.icons8.com/flat-round/344/question-mark.png`,
              height: null,
              width: null
            }
          };
        await interaction.reply({embeds: [embedMessage]});
    },
};
