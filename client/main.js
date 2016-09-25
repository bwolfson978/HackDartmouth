import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';


Template.registerHelper( 'getAllJobs',  function (){
    var jobsList = Jobs.find();
    return jobsList;
});

Template.registerHelper( 'getPersonById',  function (objectId){
    var person = People.findOne(objectId);
    return person;
});

Template.registerHelper( 'deleteJob',  function (objectId){
    var person = People.findOne(objectId);
    return person;
});


Template.people.helpers({
    getAllPeople() {
        var peopleList =  People.find();
        return peopleList;
    }
});

Template.people.events({
    'submit form'(event, instance){
        event.preventDefault();
        console.log(event.target.lat.value);
        var location = {lat: event.target.lat.value, long: event.target.long.value};
        var person = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            picture: true,
            location: location
        };
        Meteor.call('people.insert', person);
        $("#add").trigger('reset');
    },
    'click #remove'(){
        Meteor.call('people.delete', this);
    }
});


Template.jobs.events({
    'click #delete'(event, instance) {
        console.log(this);
        Meteor.call('jobs.delete', this);
    }


});
