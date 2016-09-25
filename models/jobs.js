import Person from './people.js'

export const Jobs = new Mongo.Collection('Jobs', {"2dsphereIndexVersion": 1});

jobSchema = new SimpleSchema({

    "title":{
        type: String,
        label: "Title of the job"
    },
    "img":{
        type: String,
        label: "String of url to pic representing job",
        optional: true
    },
    "description":{
        type: String,
        label: "Job description"
    },

    "category": {
        type: String,
        label: "Type of job",
    },
    "completed": {
        type: Boolean,
        label: "Whether job is completed or not",
        autoValue: function() {
            if (this.isInsert) {
                return false;
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
        label: "the home ownerview",
        optional: true,
        autoValue:function(){
            if (this.isInsert) {
                console.log(this.userId);
                return this.userId;
            }
        }
    },
    "location": {
        type: Object
    },
    "location.lat": {
        type: Number,
        label: "Latitude coordinates of location",
        decimal:true

    },
    "location.long": {
        type: Number,
        label: "Longitude coordinates of location",
        decimal:true

    },
    "workerReview": {
        type: Number,
        label: "review the ownerview writes for the workerview",
        optional: true
    },
    "ownerReview": {
        type: Number,
        label: "review workerview writes for ownerview",
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