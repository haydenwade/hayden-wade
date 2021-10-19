# hayden-wade

Code base for haydenwade.com. The site includes Alexa Flash Briefing Content Manager(BCM) and a virtual assistant (aka chatbot) that allows for manual intervention via twilio sms. BCM is integrated with Amazon Cloud Services (S3 bucket), Auth0 for authentication.

Backend for this site is built with node.js and can be found here: [hayden-wade-api](https://github.com/haydenwade/hayden-wade-api)

## Docker Setup
- `docker build . -t hw-dot-com`
- `docker run --name hw-dot-com -p 3000:80 hw-dot-com`


# Budget Hosting/Deployment steps
## Build and Push to DockerHub
- `docker build . -t haydenwade/hayden-wade-dot-com`
- `docker tag haydenwade/hayden-wade-dot-com haydenwade/hayden-wade-dot-com:v2.0.0`
- `docker tag haydenwade/hayden-wade-dot-com haydenwade/hayden-wade-dot-com:latest`
- `docker push haydenwade/hayden-wade-dot-com:v2.0.0`
- `docker push haydenwade/hayden-wade-dot-com:latest`

## Remote into server
- `docker-compose pull`
- `docker-compose up -d`