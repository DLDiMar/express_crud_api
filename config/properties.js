module.exports = {
    PORT: 5000,
    DB: "mongodb+srv://dldimar:thisisthepassword@cluster0.xpszc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}

/*
MongoClient.connect(connectionStringDB, { useUnifiedTopology: true }).then(client => {
    console.log('Connected to Mongo DB')
    const db = client.db('great-quotes')
    const quotesCollection = db.collection('quotes')
    app.listen(process.env.PORT || 3000, () => {
        console.log('listening on port 3000')
    })
})
*/