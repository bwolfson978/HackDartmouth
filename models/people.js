/**
 * Created by Andrew on 9/24/16.
 */

// People object. This will be implemented by Student and Homeowner

// person object

People = new Mongo.Collection( 'People' );

PeopleSchema = new SimpleSchema({

    "firstName": {
        type: String,
        label: "First Name"
    },
    "lastName": {
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
        label : 'The school the student attends.',
        optional: true

    },
    "student.age": {
        type : Number,
        label : 'Age of student.',
        optional: true

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

People.attachSchema( PeopleSchema );
