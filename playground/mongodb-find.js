// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect bitchez');
    } 
    console.log('Connected to MongoDB Server...betchez');

    // db.collection('Todos').find(
    //     {
    //         _id : new ObjectID('5a459dfbefc35c6a98ab6988') 
    //     }).toArray().then((docs) => {
    //     console.log(`'Todos count: '`);
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos ', err) ;
    // });
    // 
    
    db.collection('Users').find({
        name: 'Andrew'
    }).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('didnt work');
    })


    db.close();
});