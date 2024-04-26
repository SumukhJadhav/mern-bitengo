const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://sumukhjadhav007:mern123@cluster0.w95hduq.mongodb.net/bitengo?retryWrites=true&w=majority&appName=Cluster0'

const mongoDB = async() => {
    await mongoose.connect(mongoURI, {useNewUrlParser: true}, (err,result)=>{
        if (err) console.log("---",err)
        else{
            console.log("Connected")
    }
    })
}

// const mongoDB = mongoose.connect(mongoURI, {useNewUrlParser: true})
// console.log(mongoDB)


module.exports = mongoDB;