const express = require('express')
const app = express();
const { MongoClient } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 5000;
require('dotenv').config();

//middlewares
app.use(cors());
app.use(express.json());

//database connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.31jti.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;


const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
    try {
        await client.connect();
        const database = client.db('quato-app');
        const carsCollection = database.collection('cars');
        const ordersCollection = database.collection('orders');
        const usersCollection = database.collection('users');

    }
    finally {
        // await client.close();
    }

};
run().catch(console.dir);



//normal get
app.get('/', (req, res) => {
    res.send('Hello Quato Users!')
})


//listening to the port
app.listen(port, () => {
    console.log(`Listening to ${port}`)
})