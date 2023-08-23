const {VoiceConnectionStatus} = require("@discordjs/voice");

module.exports = (client) => {
    VoiceConnectionStatus.
    client.on('voiceStateUpdate', (oldState, newState) => {
        if(newState.channelID === null) //left
            console.log('user left channel', oldState.channelID);
        else if(oldState.channelID === null) // joined
            console.log('user joined channel', newState.channelID);
        else // moved
            console.log('user moved channels', oldState.channelID, newState.channelID);
    });
}