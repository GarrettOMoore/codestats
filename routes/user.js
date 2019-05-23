const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req,res) => {
	axios.get('https://www.codewars.com/api/v1/users/GarrettOMoore', {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }}).then((result)=> {
			console.log("USER :  ", result.data)
      res.json({user: result.data})
}).catch((err)=> {
	console.log("IN CATCH...")
  res.json({err})
 })
})


module.exports = router;
