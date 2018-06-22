const express = require('express');
const https = require('https');
const fs = require('fs');
const routes = require('./routes');
const uri = require('./config/db').url;
const mongoose = require('mongoose');

const app = express();
const options = {
	key: fs.readFileSync('./ssl/ac815_0301b_984ce440cf1021104ecae7d2b4da3487.key'),
	cert: fs.readFileSync('./ssl/t41833_hostde13_fornex_org_ac815_0301b_1561119364_cbed271e0fc8a2d4f8617feec9cb78f0.crt'),
	requestCert: true
}

const server = https.createServer(options, app)

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