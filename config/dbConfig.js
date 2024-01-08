const dotenv = require('dotenv')
dotenv.config()

const mongo = require('mongodb')
const MongoClient = mongo.MongoClient

const uri = process.env.DATABASE_URI
const client = new MongoClient(uri)


const connectToDatabase = async() => {
    try {
        await client.connect()
        const database = client.db('travel');
        await database.createCollection('yourCollectionName', { validator: validationSchema });
        console.log(`database has been connected`);
    } catch (error) {
        console.error(`database connection failed ${error}`);
    }finally{
        client.close()
    }
}


module.exports = connectToDatabase