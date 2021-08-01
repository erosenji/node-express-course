const express = require('express');
const app = express();

const mockUserData=[
    {name:'ero'},
    {name:'cindy'}
]

app.get('/users',function(req,res){
    res.json({
        success:    true,
        message: 'sucessfully got users. Well Done',
        users:  mockUserData
    })
})

app.listen(8000,function(){
    console.log("server is running")
})