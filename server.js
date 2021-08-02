const express = require('express');
const bodyParser = require('body-parser')

const app = express();

//bosy parser is deprected need to see what change was made for this 
app.use(bodyParser.json());

// data set of names 
const mockUserData=[
    {name:'ero'},
    {name:'cindy'},
    {name: 'bob'},
    {name: 'tom'}
]


// login post method 
app.post('/login',function(req,res){
const username = req.body.username;
const password = req.body.password;

const mockUsername = "testuser";
const mockPassword = "password";

//verify user login credentails  
if(username === mockUsername && password===mockPassword){
res.json({
    success: true,
      	 	message: 'password and username match!',
      	 	token: 'encrypted token goes here'
})
}else{
    res.json({
        success: false,
        message: 'password and username do not match'
   })  
}
})

//need to add a new method 

// output user and message 
app.get('/users',function(req,res){
    res.json({
        success:    true,
        message: 'sucessfully got users. Well Done',
        users:  mockUserData
    })
})

//check to see if a user name is in the list 
app.get('/users/:id',function(req,res){
	console.log(req.params.id)
	res.json({
		success: true,
		message: 'got one user',
		user: req.params.id
	})
})
// setup server port
app.listen(8000,function(){
    console.log("server is running")
})