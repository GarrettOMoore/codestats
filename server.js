require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/client/build'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use('/data', require('./routes/data'));

app.listen(process.env.PORT, () => {
	console.log(` 💰🎃💰 You are spinning on Port ${process.env.PORT} 💰🎃💰`)
});