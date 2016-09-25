import Person from './people.js'

Jobs = new Mongo.Collection('Jobs');

jobSchema = new SimpleSchema({

    "title":{
        type: String,
        label: "Title of the job"
    },

    "description":{
        type: String,
        label: "Job description"
    },

    "category": {
        type: String,
        label: "Type of job",
        autoValue: function () {

        }
    },
    "completed": {
        type: Boolean,
        label: "Whether job is completed or not",
        autoValue: function() {
            if (this.isInsert) {
                return true;
            }
        }
    },
    "worker": {
        type: String,
        label: "student performing job",
        optional: true
    },
    "owner": {
        type: String,
        label: "the home owner",
        optional: true,
        autoValue:function(){
            if (this.isInsert) {
                console.log(this.userId);
                return this.userId;
            }
        }
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
    "done_by": {
        type: Date,
        label: "Date the job needs to be finished by"
    },
    "est_price": {
        type: Number,
        label: "the estimated price of the job",
        optional: true
    },
    "est_time": {
        type: Number,
        label: "the estimated time to complete the job",
        optional: true

    },
    "created": {
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

            if ( this.isUpdate ) {
                return new Date();
            }
        }
    }
});

Jobs.attachSchema(jobSchema);