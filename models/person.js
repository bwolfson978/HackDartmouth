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
    }
});

Person.attachSchema( PersonSchema );

