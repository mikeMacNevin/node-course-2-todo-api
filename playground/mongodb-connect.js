// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err) {
        return console.log('Unable to connect bitchez');
    } 
    console.log('Connected to MongoDB Server...betchez');
});
//     db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false
//     }, (err, result) => {
//         if(err) {
//             return console.log('Unable to insert todo :(', err);
//         }


//     console.log(JSON.stringify(result.ops, undefined, 2)); // ops stores all of the docs that are inserted
// });

// db.collection('Users').insertOne({
//     id: 4321,
//     name: 'Andrew',
//     age: 25,
//     location: 'Philadelphia'
// }, (err, result) => {
//     if(err) {
//         return console.log('Unable to insert user', err);
//     }
//     console.log(result.ops);
//     console.log(result.ops[0] )
// } )


//     db.close();
// 
