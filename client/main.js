import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

});

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

// Template.registerHelper({
//   counter() {
//     return Template.instance().counter.get();
//   },
//
//   getAllPeople() {
//     var peopleList =  People.find();
//     return peopleList;
//   },
//
//   getAllJobs() {
//     var jobsList = Jobs.find();
//     return jobsList;
//   },
//
//   getPersonObjById( objectId ){
//     var person = People.findOne(objectId);
//     return person;
//   }
//
// });


Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.jobs.events({
  'click #delete'(event, instance) {
    console.log(this);
    Meteor.call('jobs.delete', this);
  }

});
