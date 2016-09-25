/**
 * Created by Andrew on 9/24/16.
 */

import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.info.helpers({
    addPerson() {

    },
    modifyPerson() {

    },
    deletePerson() {

    }
});

Template.info.events({
    'click button #addPerson'(event, instance){
        console.log("adding person");
    }
});