/**
 * Created by Andrew on 9/24/16.
 */

// Person object. This will be implemented by Student and Homeowner

// person object

export const person = new Mongo.Collection( 'person' );

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
        type: Number,
        label: "Phone Number"
    },
    "picture": {
        type: Boolean,
        label: "Personal Picture"
    },
    "location": {
        type: Object
    },
    "location.lat": {
        type: Number,
        label: "Latitude coordinates of location"
    },
    "location.long": {
        type: Number,
        label: "Longitude coordinates of location"
    },

    // student object
    "student": {
        type : Object,
        optional : true
    },
    "student.school": {
        type : String,
        label : 'The school the student attends.'
    },
    "student.age": {
        type : Number,
        label : 'Age of student.'
    },
    "student.bio": {
        type : String,
        optional: true
    },
    "student.available": {
        type : Boolean
    },

    // homeowner object
    "homeowner.$":{
        type : Object,
        optional: true

    },"homeowner.$.verified":{
        type : Boolean,
        label: "Is the homeowner verified? Background checked?"

    }

});

person.attachSchema( PersonSchema );
