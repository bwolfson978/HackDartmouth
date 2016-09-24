/**
 * Created by Andrew on 9/24/16.
 */

// Person object. This will be implemented by Student and Homeowner

// person object

Person = new Meteor.Collection( 'person' );

PersonSchema = new SimpleSchema({
    "first": {
        type: String,
        label: "First Name"
    },
    "last": {
        type: String,
        label: "Last Name"
    },
    "email": {
        type: String,
        label: "Email Address"
    },
    "phone": {
        type: String,
        label: "Phone Number"
    },
    "picture": {
        type: Buffer,
        label: "Personal Picture"
    },
    "location.$": {
        type: Object
    },
    "location.$.lat": {
        type: Number,
        label: "Latitude coordinates of location"
    },
    "location.$.long": {
        type: Number,
        label: "Longitude coordinates of location"
    },

    // student object
    "student.$": {
        type : Object
    },
    "student.$.school": {
        type : String,
        label : 'The school the student attends.'
    },
    "student.$.age": {
        type : Number,
        label : 'Age of student.'
    },
    "student.$.bio": {
        type : String,
        optional: true
    },
    "student.$.available": {
        type : Boolean
    },

    // homeowner object
    "homeowner.$":{
        type : Object

    },"homeowner.$.verified":{
        type : Boolean,
        label: "Is the homeowner verified? Background checked?"

    }

});

Person.attachSchema( PersonSchema );
