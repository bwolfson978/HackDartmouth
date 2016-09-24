
jobs = new Meteor.Collection('jobs');


Students = new Mongo.Collection('students', {
    schema: {
        name: {
            type: String
        }
    }
});

HomeOwners = new Mongo.Collection('homeowners', {
    schema: {
        name: {
            type: String
        }
    }
});

jobSchema = new SimpleSchema({
    "type": {
        type: String,
        label: "Type of job",
        autoValue: 'other'
    },
    "completed": {
        type: Boolean,
        label: "Whether job is completed or not"
    },
    "worker": {
        type: [Students],
        label: "student performing job"
    },
    "owner": {
        type: [HomeOwners],
        label: "the home owner"
    },
    "workerReview": {
        type: String,
        label: "review the owner writes for the worker"
    },
    "ownerReview": {
        type: String,
        label: "review worker writes for owner"
    },
    "premium": {
        premium: Boolean,
        label: "Is this a premium job"
    },
    "done_by": {
        type: Date,
        label: "Date the job needs to be finished by"
    },
    "est_price": {
        type: Number,
        label: "the estimated price of the job"
    },
    "est_time": {
        type: Number,
        label: "the estimated time to complete the job"
    },
    "created": {
        type: Date,
            label: "Date Job Added to System",
            autoValue: function() {
            if ( this.isInsert ) {
                return new Date;
            }
        }
    },
    "updated": {
        type: Date,
            label: "Date Job Updated in System",
            autoValue: function() {
            if ( this.isUpdate ) {
                return new Date;
            }
        }
    }
});

jobs.attachSchema(jobSchema);