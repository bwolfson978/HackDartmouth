import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  //this.gayAndrew = People.find({first: "Andrew"});

  //console.log(this.gayAndrew);
});

Template.hello.helpers({
  getAllJobs() {
    var jobsList = Jobs.find();
    return jobsList;
  },
  getPersonObjById( objectId ){
    var person = People.findOne(objectId);
    return person.firstName + " " + person.lastName;
  }
});


Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  }
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
    'click #remove'(event, instance){
        Meteor.call('people.delete', this);
    }
});
