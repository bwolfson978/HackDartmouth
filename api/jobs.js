// API access for jobs with secure access to collections

import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Jobs } from '../models/jobs.js';


Meteor.methods({
    'Jobs.insert'(jsonObj) {
        check(jsonObj, Object);

        // Make sure the user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        console.log(jsonObj);

        console.log(this.userId);

        Jobs.insert(jsonObj);
    },
    'Jobs.update'(jobId, field){

    },
    'Jobs.delete'(jsonObj){

        return Jobs.remove(jsonObj._id);

    }
});