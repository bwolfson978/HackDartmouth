/**
import {Mongo} from 'meteor/mongo';

export const Jobs = new Mongo.Collection('jobs');
*/
import {person} from './person.js'
import {Mongo} from 'meteor/mongo';

export const Jobs = new Mongo.Collection('jobs');

jobSchema = new SimpleSchema({
    "category": {
        type: [String],
        label: "Type of job",
        autoValue: function () {

        }
    },
    "completed": {
        type: Boolean,
        label: "Whether job is completed or not"
    },
    "worker": {
        type: Object,
        label: "student performing job",
        optional: true
    },
    "owner": {
        type: Object,
        label: "the home owner",
        optional : true
    },
    "workerReview": {
        type: Number,
        label: "review the owner writes for the worker",
        optional: true
    },
    "ownerReview": {
        type: Number,
        label: "review worker writes for owner",
        optional: true
    },
    "premium": {
        type: Boolean,
        label: "Is this a premium job"
    },
    "doneBy": {
        type: Date,
        label: "Date the job needs to be finished by"
    },
    "estPrice": {
        type: Number,
        label: "the estimated price of the job",
        optional: true
    },
    "estTime": {
        type: Number,
        label: "the estimated time to complete the job",
        optional: true

    },
    "createdAt": {
        type: Date,
        label: "Date Job Added to System",
        autoValue: function() {
            if ( this.isInsert ) {
                return new Date();
            }
        }
    },
    "updated": {
        type: Date,
        label: "Date Job Updated in System",
        autoValue: function() {
            if ( this.isInsert ) {
                return new Date();
            }
        }
    }
});

Jobs.attachSchema(jobSchema);
