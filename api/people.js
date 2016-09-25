/**
 * Created by Andrew on 9/25/16.
 */

// API access for jobs with secure access to collections

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


Meteor.methods({
    'people.insert'(jsonObj) {
        check(jsonObj, Object);
        console.log(jsonObj);
        var id = People.insert(jsonObj);

        // create user account for this person

    },
    'people.update'(jsonObj) {

    },
    'people.delete'(jsonObj) {
        People.remove(jsonObj._id);
    }

});
