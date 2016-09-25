import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    Person.remove({});
    jobs.remove({});

    //var Person = new Meteor.Collection("person");
    var andrew = Person.insert({first: "Andrew", last: "Mokotoff", email: "amokotoff@gmail.com", phone: "3014427388",
        picture: true, location:{ lat: 20, long : 20 }, student : { school: 'WPI', age: 19, available: true}});

    var barry = Person.insert({first: "Barrett", last: "Wolfson", email: "bwolfson@wpi.edu", phone: "000000",
        picture: true, location:{ lat: 20, long : 20 }, student : { school: 'WPI', age: 19, available: true}});

    //console.log(andrew)
    console.log(Person.findOne({_id: andrew}));

    var sampleJob = jobs.insert({category: ['snow'], completed: false, worker: [Person.findOne({_id: andrew})], owner: [Person.findOne({_id: barry})], premium : true, done_by: new Date() });

    console.log(Person.findOne({_id: andrew}));

    // console.log(andrew);
});
