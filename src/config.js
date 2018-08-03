//TODO: env vars
const config = {
    viApi: process.env.VI_API_URL || 'https://vi-api.herokuapp.com',//'http://localhost:3001',
    auth:{
        siteDomain:'https://haydenwade.com',
        domain: 'haydenty.auth0.com',
        clientID: 'UninCDiPheTiAcFFo0Yt2Nb7nORk8ZTf',
        redirectUri: process.env.AUTH_REDIRECT_URL || 'http://www.haydenwade.com/callback',//'http://localhost:3000/callback',
        audience: 'http://vi.com',
    }
};
export default config;