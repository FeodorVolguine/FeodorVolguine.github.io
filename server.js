const http = require('http');
const fs = require('fs');
const express = require('express');
var nodemailer = require('nodemailer');

const port = 3000;

const transporter = nodemailer.createTransport(
{
	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
  	auth: {
    	user: "email17329@gmail.com",
    	pass: "warasanionoiw2"
    }
});

const mailOptions = {
	from: 'email17329@gmail.com',
	to: 'email17329@gmail.com',
	subject: 'Customer Contact Information',
};

const app = express();
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) { res.render('index'); });
app.get('/retail', function(req, res) { res.render('retail'); });
app.get('/offices', function(req, res) { res.render('offices'); });
app.get('/banks', function(req, res) { res.render('banks'); });
app.get('/clinics', function(req, res) { res.render('clinics'); });

app.post('/contact', function(req, res, next) {
	console.log(req.body);

	if(!data.first_name)
		res.send('Incomplete first name');

	ProcessForm(req.body);

	res.redirect('back');
});

app.listen(port, function(error) { if(error) console.log(error); });

function ProcessForm(data)
{
	var formString = new Date();
	formString += '\nCompany: ' + data.company;
	formString += '\nName: ' + data.first_name + ' ' + data.last_name;
	formString += '\Email: ' + data.email;
	formString += '\Phone number: ' + data.phone;
	formString += '\nStreet address: ' + data.address;
	formString += '\nPostal code: ' + data.postal_code;
	formString += '\nCity: ' + data.city;
	formString += '\nFacility type: ' + data.facility;
	formString += '\n';
	
	//Send email
	mailOptions.text = formString;
	transporter.sendMail(mailOptions, function(error, info){
		if(error) console.log(error);
		else console.log('Email sent: ' + info.response);
	});
	
	//Save to disk
	formString += '_________________________________________________\n';
	fs.appendFile('client_contact_information.txt', formString, function(error)
	{
		if(error) throw error;
		console.log('Contact information successfully saved!');
	});

	console.log(formString);
}