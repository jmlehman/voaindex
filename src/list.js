const axios = require('axios');
const { ACCOUNT, SUBSCRIPTION,LOCATION } = require('./config');


async function getList(token) {

    const config = {
        method:'get',
        url: 'https://api.videoindexer.ai/Auth/'+LOCATION+'/Accounts/'+ACCOUNT+'/AccessTokenWithPermission',
        headers: {
            'Cache-Control': 'no-cache',
            'Ocp-Apim-Subscription-Key': SUBSCRIPTION
        }, 
        params: {
            'permission' : 'Owner'
          }
    }
    const response = await axios (config)
    //console.log(response.data)
    return response.data
    }
    module.exports.getList = getList;