const express = require('express');
const routes = require('./routes');

const app = express();

app.use((req, res, next) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader("Access-Control-Allow-Headers", "Content-Type");
	res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
	next();
});
app.use(routes);

app.listen(2020, err => {
    if(!err) (
        console.log('Server is running at port 2020')
    )
})