const { VoiceConnectionStatus, joinVoiceChannel } = require('@discordjs/voice');
module.exports = {
    name: "test",
    cooldown: 3,
    async execute(message, args) {
const connection = joinVoiceChannel({
	channelId: message.channel.id,
	guildId: message.channel.guild.id,
	adapterCreator: message.channel.guild.voiceAdapterCreator,
}).then(

connection.on(VoiceConnectionStatus.Ready, () => {
	console.log('The connection has entered the Ready state - ready to play audio!');
})
)
    }}
