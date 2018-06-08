const 	express 				= require("express");
const 	port 					= process.env.PORT || 9001;
let 	app 					= require('express')();
const 	index 					= require("./routes/index");
let 	server 					= app.listen(port);
// const 	socketIo 				= require('socket.io');
var 	bodyParser 				= require("body-parser");
const 	http 					= require("http");
var 	fs 						= require('fs');
const 	axios 					= require("axios");
const 	fetch 					= require('node-fetch')
var 	uuid 					= require('node-uuid');
const 	Joi 					= require('joi');
}

var twilioCreds = 
{
	"accountSid": "accountSid",
	"authToken": "authToken",
	"number": "YOUR_TWILIO_NUMBER_HERE"
}


// twilio

var 	client 					= require('twilio')(twilioCreds.accountSid, twilioCreds.authToken);

// globals
var 	newID;
var 	globalCallerNumber 		= [];
var 	globalDispatchNumber 	= [];
var 	globalDispatchChat 		= [];
var 	clients 				= {};

console.log(`Listening on port ${port}`);

// express setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
				extended: true
}));

app.use(index);
app.use(function(req, res, next) {
				res.header("Access-Control-Allow-Origin", "*");
				res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
				next();
});

function twilioBlock(body) {
				console.log('to : ' + globalCallerNumber);
				console.log('from : ' + globalDispatchNumber);
				client.messages.create({
								from: globalDispatchNumber,
								to: globalCallerNumber,
								body: body
				}).then((message) => console.log(message.status));
};

app.post('/api/callsetup', (request, response) => {
				console.log('*------------------------- CALL SETUP -------');
				var randomizedID = '"' + newID + '"';
				globalCallerNumber = request.body.callsetupNumber;
				globalDispatchNumber = twilioCreds.number;
				console.log('globalDispatchNumber ----> ', globalDispatchNumber);
				console.log('globalCallerNumber ----> ', globalCallerNumber);				
				console.log('*------------------------- TXT CALLER -------');
				var textcallerBody =
								// "txt testerererererererer"
								"Howdy from the internet!"

				twilioBlock(textcallerBody);
});

// server.listen(port, () => console.log(`Listening on port ${port}`));
