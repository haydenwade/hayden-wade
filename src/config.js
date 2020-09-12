//DEV
// const config = {
//     haydenWadeApi: process.env.HAYDEN_WADE_API_URL || 'http://localhost:3002',
//     auth:{
//         siteDomain:'https://haydenwade.com',
//         domain: 'haydenty.auth0.com',
//         clientID: 'UninCDiPheTiAcFFo0Yt2Nb7nORk8ZTf',
//         redirectUri: process.env.AUTH_REDIRECT_URL || 'http://localhost:3000/callback',
//         audience: 'http://vi.com',
//     }
// };
//PROD
const config = {
    haydenWadeApi: process.env.HAYDEN_WADE_API_URL || 'http://hw-1680842757.us-east-1.elb.amazonaws.com',
    auth:{
        siteDomain:'https://haydenwade.com',
        domain: 'haydenty.auth0.com',
        clientID: 'UninCDiPheTiAcFFo0Yt2Nb7nORk8ZTf',
        redirectUri: process.env.AUTH_REDIRECT_URL || 'https://www.haydenwade.com/callback',
        audience: 'http://vi.com',
    }
};
export default config;