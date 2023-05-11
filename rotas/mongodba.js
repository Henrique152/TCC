const mongoose = require("mongoose")
const passportLocalMongoose  = require("passport-local-mongoose");
mongoose.connect("mongodb://database_mongo:27017/LogIn")

.then(()=>{
    console.log("banco de dados conectado")
})
.catch(()=>{
    console.log("falha ao conectar no banco de dados")
})

const LogInSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        minlength: 6,
        required: true
    },
    email:{
        type: String,
        required: false
    },
    estado:{
        type: String,
        required: false
    },
    profissao:{
        type: String,
        required: false
    }
})
LogInSchema.plugin(passportLocalMongoose);

const logIn = new mongoose.model("logIn", LogInSchema)

module.exports = logIn