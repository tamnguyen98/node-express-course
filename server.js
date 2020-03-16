const express = require('express'); // Let us use the library
const app = express(); // instanciate the library


const mockUserData = [
    {name: 'Tam'},
    {name: 'Nguyen'}
]

app.get('/users/:id',function(req,res){ // In Express, words with a colon in front of them in the url are treated as variables.
	console.log(req.params.id) // print the variable to console
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id // accessing the variable
	})
})

// Basic get request
// app.get('/users', function(req,res){
//     res.json({
//          success: true,
//          message: 'successfully got users. Nice!',
//          users: mockUserData
//     })
// })

app.listen(8000, function() {
    console.log("server is running")
})