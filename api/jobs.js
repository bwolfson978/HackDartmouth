// API access for jobs with secure access to collections

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';


Meteor.methods({
    'Jobs.insert'(jsonObj) {
        check(jsonObj, String);

        // Make sure the user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        console.log(jsonObj);

        console.log(this.userId);

        Jobs.insert({
            jsonObj,
            createdAt: new Date(),
            worker: this.userId,
        });
    },
    'Jobs.update'(jsonObj){

    },
    'Jobs.delete'(jsonObj){

    },


    'tasks.remove'(taskId) {
        check(taskId, String);

        Tasks.remove(taskId);
    },
    'tasks.setChecked'(taskId, setChecked) {
        check(taskId, String);
        check(setChecked, Boolean);

        Tasks.update(taskId, { $set: { checked: setChecked } });
    },
});