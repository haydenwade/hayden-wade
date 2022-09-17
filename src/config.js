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
        redirectUri: process.env.AUTH_REDIRECT_URL || 'http://www.haydenwade.com/callback',
        audience: 'http://vi.com',
    },
    emailAddress: 'hw@teamwawe.com',
    calendly:{
        careerCoachingUrl: 'https://calendly.com/haydenwadecoaching/career-coaching',
        resumeReviewUrl: 'https://calendly.com/haydenwadecoaching/resume-review',
        introCallUrl:'https://calendly.com/haydenwadecoaching/intro-call',
        salaryNegotiationUrl:'https://calendly.com/haydenwadecoaching/salary-negotiation',
        resumeReviewXLinkedInReviewUrl: 'https://calendly.com/haydenwadecoaching/resume-review-clone'
    }
};
export default config;