// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1435712009990574251",
        serverId: "1133667699151618130",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
{
        channelId: "1308045389621891112",
        serverId: "1109636583642103903",
        token: process.env.token2,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];