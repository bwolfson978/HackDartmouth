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
    },
    'people.update'(jsonObj){

    },
    'people.delete'(jsonObj){

    }
    //'tasks.setChecked'(taskId, setChecked) {
    //    check(taskId, String);
    //    check(setChecked, Boolean);
    //
    //    Tasks.update(taskId, { $set: { checked: setChecked } });
    //},
});
