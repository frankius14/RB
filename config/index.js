module.exports = {
    general: {
        language: process.env.RPP_LANGUAGE || 'en',
        pollingIntervalMs: process.env.RPP_POLLING_INTERVAL || 10000,
        showCallStackError: process.env.RPP_LOG_CALL_STACK || false
    },
    discord: {
        username: process.env.RPP_DISCORD_USERNAME || '',
        clientId: process.env.RPP_DISCORD_CLIENT_ID || '',
        token: process.env.RPP_DISCORD_TOKEN || ''
    }
};




