const Builder = require('@discordjs/builders');
const Discord = require('discord.js');

const DiscordButtons = require('../discordTools/discordButtons.js');

module.exports = {
	name: 'help',

	getData(client, guildId) {
		return new Builder.SlashCommandBuilder()
			.setName('help')
			.setDescription(client.intlGet(guildId, 'commandsHelpDesc'));
	},

	async execute(client, interaction) {
		await client.interactionReply(interaction, {
			components: [new Discord.ActionRowBuilder()
				.addComponents(
					DiscordButtons.getButton({
						style: Discord.ButtonStyle.Link,
						label: 'WEB',
						url: 'https://rustbot.rustlatam.com/'
					}),
					DiscordButtons.getButton({
						style: Discord.ButtonStyle.Link,
						label: 'DOCUMENTACION',
						url: 'https://rustbot.rustlatam.com/documentacion/documentation.html'
					}),
					DiscordButtons.getButton({
						style: Discord.ButtonStyle.Link,
						label: 'RUST LATAM',
						url: 'https://rustlatam.com/'
					}),
					DiscordButtons.getButton({
						style: Discord.ButtonStyle.Link,
						label: 'CREDENCIALES FCM',
						url: 'https://rustbot.rustlatam.com/documentacion/documentation.html'
					})
				)
			],
			ephemeral: true
		});
		client.log(client.intlGet(null, 'infoCap'), client.intlGet(interaction.guildId, 'commandsHelpDesc'));
	},
};
