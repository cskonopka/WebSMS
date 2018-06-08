# twilioWebSMS
#### What? 
This is a basic example of how to set up a webpage using React and creating a button that will post to the NodeJS apiusing axios which will then send a sms using the twilio api. 

#### Instructions
1) Install dependencies 
	
		`npm i install`

2) In the file app.js, add your creditionals and the number that is sending the sms to this block of code

		`var twilioCreds = { 
			"accountSid": "accountSid", 
			"authToken": "authToken", 
			"number": "YOUR_TWILIO_NUMBER_HERE" 
		}`

2) Start the frontend 

		`npm run start`

3) In a separate terminal start the server 

		`hotnode app.js`

#### How to Use
1) Navigate to the webpage and add a US number + area code that will receive the sms, i.e. 9785355355 [+1 is automatically added]
2) Press the "Send SMS" button and the specified number will pop up in the webpage
