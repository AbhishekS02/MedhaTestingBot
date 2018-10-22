var restify = require('restify'); 
var builder = require('botbuilder');  
// Setup Restify Server 
var server = restify.createServer(); 

server.listen(process.env.port || process.env.PORT || 3978, 
function () {    
    console.log('%s listening to %s', server.name, server.url);  
});  
// chat connector for communicating with the Bot Framework Service 
var connector = new builder.ChatConnector({     
   appId: process.env.MICROSOFT_APP_ID,     
    appPassword: process.env.MICROSOFT_APP_PASSWORD
	//appId: "D8005D4A-9DB2-4106-A320-D4C0551ACC20",     
    //appPassword: "8306DDEC-790D-4F8E-9950-C0850169AB3D"
});
// Listen for messages from users  
server.post('/api/messages', connector.listen()); 
 
// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:') 
var bot = new builder.UniversalBot(connector, function (session) {     
session.send("You said: %s", session.message.text); 
});