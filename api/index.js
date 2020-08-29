// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'AC0e25976b75facea1a796ce94971392a4';
const authToken = 'da3ff71bd5d44cb605328942c5ff18bf';
const tc = require('twilio')(accountSid, authToken);






const server = require('http').createServer();
const io = require('socket.io')(server);
io.on('connection', client => {
    console.log('new connection');


    client.on('event', data => {

        console.log('data:', data)
        client.emit('event', { text: 'got it' })

        tc.messages.create({
                body: data.text,
                from: '+12293515357',
                to: '+19203609269'
            })
            .then(message => console.log(message.sid));

    });


    client.on('disconnect', () => {
        console.log('disconnected');
    });
});
server.listen(3002);