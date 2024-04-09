const {MongoClient, ServerApiVersion} = require('mongodb');
const uri = "mongodb+srv://sergbfmv:fireinfopassword@cluster0.lff42g3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});



async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db().createCollection('incidents')
        const incidents = client.db().collection('incidents')
        await incidents.insertOne({
            id: '4',
            address: 'no address',
            fireRank: '4',
            deceased: 0,
            injured: 0,
            rescued: 0,
            district: 301,
            date: '22.09.2023'})


        const allIncidents = await incidents.find().toArray();
        console.log("All incidents:", allIncidents);

    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);