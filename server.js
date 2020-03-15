const express = require('express'); // Let us use the library
const app = express(); // instanciate the library


const mockUserDate = [
    {name: 'Tam'},
    {name: 'Nguyen'}
]

app.get('/users', function(req,res){
    res.json({
         success: true,
         message: 'successfully got users. Nice!',
         users: mockUserData
    })
})

app.listen(800, function() {
    console.log("server is running")
})