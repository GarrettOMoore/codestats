const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', (req,res) => {
	axios.get(`https://www.codewars.com/api/v1/users/${req.body.name}`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
    }}).then((result)=> {
			console.log("USER :  ", result.data)
      res.json({user: result.data})
}).catch((err)=> {
  res.json({err})
 })

 axios.get(`https://www.codewars.com/api/v1/users/${req.body.name}/code-challenges/completed?page=0`, {
	headers: {
		Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`
	}}).then((result)=> {
		console.log("RESULT :  ", result.data.data)
		res.json({data: result.data.data})
}).catch((err)=> {
console.log("IN CATCH...")
res.json({err})
})
})


module.exports = router;
