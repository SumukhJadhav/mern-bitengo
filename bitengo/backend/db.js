const mongoose = require('mongoose')
// const mongoDbClient = require("mongodb").MongoClient

const mongoURI = 'mongodb://sumukhjadhav007:mern123@ac-pso3qgk-shard-00-00.w95hduq.mongodb.net:27017,ac-pso3qgk-shard-00-01.w95hduq.mongodb.net:27017,ac-pso3qgk-shard-00-02.w95hduq.mongodb.net:27017/bitengo?ssl=true&replicaSet=atlas-cdxmj4-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0'

// mongodb://<username>:<password>@merncluster-shard-00-00.d1d4z.mongodb.net:27017,merncluster-shard-00-01.d1d4z.mongodb.net:27017,merncluster-shard-00-02.d1d4z.mongodb.net:27017/?ssl=true&replicaSet=atlas-eusy5p-shard-0&authSource=admin&retryWrites=true&w=majority
module.exports = function (callback) {
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        // mongoDbClient.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
        if (err) console.log("---" + err)
        else {
            // var database =
            console.log("connected to mongo")
            const foodCollection = await mongoose.connection.db.collection("foodinfo");
            foodCollection.find({}).toArray(async function (err, data) {
                const categoryCollection = await mongoose.connection.db.collection("foodCategory");
                categoryCollection.find({}).toArray(async function (err, Catdata) {
                    if (err) console.log(err);
                    else{
                        // console.log(data);
                        // console.log(Catdata);
                        global.food_items = data
                        global.foodCategory = Catdata
                    }

                })
            });
            // listCollections({name: 'food_items'}).toArray(function (err, database) {
            // });
            //     module.exports.Collection = database;
            // });
        }
    })
};
