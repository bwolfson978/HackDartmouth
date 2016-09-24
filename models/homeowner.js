/**
 * Created by Andrew on 9/24/16.
 */

Homeowner = new Meteor.Collection( 'homeowner' );

HomeownerSchema = new SimpleSchema({
    "role": {
        type: String,
        label: "Employee/Employer"
    },
    "background": {
        type: Boolean,
        label: "Background check performed"
    }
});
