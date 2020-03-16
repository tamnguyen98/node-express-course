const express = require('express'); // Let us use the library
const bodyParser = require('body-parser'); // Use to make POST
const app = express(); // instanciate the library

app.use(bodyParser.json());


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

// POST request handler
app.post('/login',function(req,res){
    const username=req.body.username; // scrape JSON for username
    const password=req.body.password; // scrape for password

    console.log(username);

    const mockUsername="tam";
    const mockPassword="123";

    if (username===mockUsername && password===mockPassword){
         res.json({
              success: true,
              message: 'password and username match!',
              token: 'encrypted token goes here'
         })
    } else {
         res.json({
              success: false,
              message: 'password and username do not match',
              user: username,
              pass: password
         })
    }
})

app.listen(8000, function() {
    console.log("server is running")
})