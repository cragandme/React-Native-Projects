var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

/*
mongoose.connect('mongodb://127.0.0.1:27017/demo');
var schema = mongoose.Schema;
var userSchema = new schema({
    name: String,
    username:{type:String, required:true, unique:true},
    password:{type:String, required:true,},
    createdAt:Date,
    updatedAt:Date
});
var User = mongoose.model('user',userSchema);
module.exports = User;

*/
const app = express();
app.get('/',(req,res)=>{
    res.send("Hello");
})
const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
  });