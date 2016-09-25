/**
 * Created by ddeisadze on 9/25/16.
 */


Template.busy.rendered = function() {
    Session.set('processing', true);
};

Template.busy.processing = function() {
    console.log('processing');
    Session.get('processing');
};


deactivateSpinner = function(){
    Session.set('processing', false);
}

activateSpinner = function(){
    Session.set('processing', true);
}