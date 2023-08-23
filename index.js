// Require the necessary discord.js classes
const {GatewayIntentBits, Client, Collection, Routes, ActivityType} = require("discord.js");
const path = require('node:path');
const fs = require("fs");
require("dotenv").config();

// Create a new client instance
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildPresences,
    ],
});

// const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

const rolereact = require("./modules/floorselect");
// const musicplayer = require("./modules/musicplayer");

client.commands = new Collection();

const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const filePath = path.join(commandsPath, file);
	const command = require(filePath);
	client.commands.set(command.data.name, command);
}

client.on("ready", () => {
    console.log("Ready!");
    client.user.setStatus("online");
    client.user.setActivity("College Music", { type: ActivityType.Playing });
    rolereact(client);
});

// (async () => {
// 	try {
// 		console.log(`Started refreshing ${client.commands.length} application (/) commands.`);

// 		const data = await rest.put(
// 			Routes.applicationCommands("1011091289409863700"),
// 			{ body: client.commands },
// 		);

// 		console.log(`Successfully reloaded ${client.data.length} application (/) commands.`);
// 	} catch (error) {
// 		console.error(error);
// 	}
// })();

client.on("interactionCreate", async interaction => {
    if(interaction.isChatInputCommand()) {
        const command = client.commands.get(interaction.commandName);

        if (command) {
            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
            }
        }
    }
});

// Login to Discord with your client's token
client.login(process.env.TOKEN);
