import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);

  this.gayAndrew = Person.find({first: "Andrew"});

  console.log(this.gayAndrew);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },

  andrew() {
    var gayAndrew =  Person.find();
    console.log(gayAndrew);
    return gayAndrew;
  },

  job() {
    console.log(jobs.find());
    return jobs.find();
  }
});


Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
