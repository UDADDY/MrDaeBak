var express = require("express");
var app = express();

app.listen(3000, function(){
	console.log("HELLO");
});

app.get("/", function(request, response){
	response.sendFile(__dirname+"/login.html");
});



// 로그인
app.get("/login", function(request, response){
	response.sendFile(__dirname+"/login.html");
});

app.post("/process/login", function(request, response){
	response.send("GOOD LOGIN");
});

// 회원가입
app.get("/signUp", function(request, response){
	response.sendFile(__dirname+"/signUp.html");
});

app.post("/process/signUp", function(request, response){
	
});