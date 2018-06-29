const express = require('express');
const https = require('https');
const fs = require('fs');
const routes = require('./routes');
const uri = require('./config/db').url;
const mongoose = require('mongoose');

const app = express();

mongoose.connect(uri, err => {
	if (err) throw err;
	console.log("Connected successfull")
})

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST");
	next();
});
app.use('/test', express.static(__dirname + "/test"));
app.use(routes);



app.listen(6060, err => {
	if (!err)(
		console.log('Server is running at port 6060')
	)
})