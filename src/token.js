const axios = require('axios');
var session = require('express-session')
var MemoryStore = require('memorystore')(session)


app.use(session({
    cookie: { maxAge: 86400000 },
    store: new MemoryStore({
      checkPeriod: 86400000 // prune expired entries every 24h
    }),
    resave: false,
    secret: 'keyboard cat'
}))

async function getToken() {

    const config = {
        method:'get',
        url: 'https://api.videoindexer.ai/Auth/eastus/Accounts/13580023-ab78-46d1-927e-91581754a3f4/AccessTokenWithPermission',
        headers: {
            'Cache-Control': 'no-cache',
            'Ocp-Apim-Subscription-Key': 'e3afbdda5f0f4bb3b600b3d7a270f163'
        }, 
        params: {
            'permission' : 'Owner'
          }
    }
    const response = await axios (config)
    //console.log(response.data)

    return response.data
    }
    module.exports.getToken = getToken;