import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

    // People.remove({});
    // Jobs.remove({});

    //var People = new Meteor.Collection("person");
    var andrew = People.insert({firstName: "Andrew", lastName: "Mokotoff", email: "amokotoff@gmail.com", phone: "3014427388",
        picture: true, location:{ lat: 20, long : 20 }, student : { school: 'WPI', age: 19, available: true}});

    var barry = People.insert({firstName: "Barrett", lastName: "Wolfson", email: "bwolfson@wpi.edu", phone: "000000",
        picture: true, location:{ lat: 20, long : 20 }, student : { school: 'WPI', age: 19, available: true}});

    //console.log(andrew)
    console.log(People.findOne({_id: andrew})._id);

    var sampleJob = Jobs.insert({title:'sample job', 'description':'get fucked',location:{lat:43.704,long: -72.2947138}, category: 'snow', completed: false, worker: People.findOne({_id: andrew})._id, owner: People.findOne({_id: barry})._id, premium : true, done_by: new Date() });

    var sampleJob = Jobs.insert({title:'sample job', 'description':'get fucked',location:{lat:42.904,long: -72.2947138}, category: 'snow', completed: false, worker: People.findOne({_id: andrew})._id, owner: People.findOne({_id: barry})._id, premium : true, done_by: new Date() });

    console.log(People.findOne({_id: andrew}));

    console.log(Jobs.findOne({_id: sampleJob}));
});
