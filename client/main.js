import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';


import './main.html';


Template.register.onCreated(function () {
    // counter starts at 0

    this.userRegType = new ReactiveVar(" ");

    // this.interval = Meteor.setInterval(function (){
    //     var location = Geolocation.latLng();
    //     if(location) {
    //         Session.set('location', location);
    //     };
    // }, 2000);

    activateSpinner();
    Tracker.autorun(function (computation) {
        Session.set('location', Geolocation.latLng());
        if (Session.get('location')) {
            drawMap();
            //stop the tracker if we got something
            console.log(Session.get('location'));
            deactivateSpinner();
            computation.stop();
        }
    });

    Session.set('postSubmitErrors', {});


});


Template.register.helpers({
    userType : function(){
        return Template.instance().userRegType.get();
    }
})

Template.registerHelper('getAllJobs', function () {
    var jobsList = Jobs.find();
    return jobsList;
});

Template.registerHelper('getPersonById', function (objectId) {
    var person = People.findOne(objectId);
    return person;
});

Template.registerHelper('deleteJob', function (objectId) {
    var person = People.findOne(objectId);
    return person;
});

Template.registerHelper( 'getSessionVar', function(sessionName) {

    console.log(Session.get(sessionName));
    return Session.get(sessionName);
});

Template.registerHelper( 'ifSessionVar', function(sessionName, checkName) {

    console.log(Session.get(sessionName));
    return Session.get(sessionName) == checkName;
});

Template.registerHelper( 'getLoggedInUserObject', function() {

    var email = Meteor.userId().email;

    var person = People.find({email:email});

    return person;
});

Template.registerHelper( 'isUserType', function(type) {

    var email = Meteor.user().emails[0].address;

    console.log(Meteor.user());

    var person = People.findOne({email:email});

    console.log(person);

    if( !person ){
        return null;
    }

    if ( person.hasOwnProperty('student')) {
        return 'worker' == type;

    }else if(person.hasOwnProperty('homeowner')) {
        return 'owner' == type;
    }else {
        return null
    }

});


Template.people.helpers({
    getAllPeople() {
        var peopleList = People.find();
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

Template.people.events({
    'submit form'(event, instance){
        event.preventDefault();
        console.log(event.target);
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


Template.register.events({

    'click #pickOwner'(event, instance){
        event.preventDefault();

        Template.instance().userRegType.set('owner')

    },

    'submit form'(event, instance){
        event.preventDefault();
        var location = {lat: event.target.lat.value, long: event.target.long.value};

        if ( Template.instance().userRegType.get() == 'worker'){

            student = {age : event.target.studentAge.value,
                school:event.target.studentSchool.value,
                available:  true}

            var person = {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                picture: true,
                location: location,
                student : student
            };
        }else{
            var person = {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                email: event.target.email.value,
                phone: event.target.phone.value,
                picture: true,
                location: location,
                homeowner: {}
            };
        }

        var email = person.email;
        var password = event.target.password.value;

        console.log(email,password);
        Accounts.createUser({
            email: email,
            password: password
        });

        console.log(Meteor.users.find().fetch());

        Meteor.call('people.insert', person);
        $("#add").trigger('reset');

    },

    'click #pickWorker'(event, instance){
        event.preventDefault();

        Template.instance().userRegType.set('worker')

    },

});

