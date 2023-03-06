const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://OlaAlkhousi:Ola2023!@cluster0.bmcgcu0.mongodb.net/?retryWrites=true&w=majority')
.then(res =>{console.log('DB is connected')})
.catch(err => {console.log(err)});