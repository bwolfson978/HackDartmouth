import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  this.gayAndrew = People.find({first: "Andrew"});

  console.log(this.gayAndrew);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },

  getAllPeople() {
    var peopleList =  People.find();
    return peopleList;
  },

  getAllJobs() {
    var jobsList = Jobs.find();
    return jobsList;
  },

  getPersonObjById( objectId ){
    var person = People.findOne(objectId);
    return person.firstName;
  }

});


Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
