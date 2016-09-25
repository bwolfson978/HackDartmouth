/**
 * Created by ddeisadze on 9/25/16.
 */


Template.busy.rendered = function() {
    Session.set('processing', true);
};

Template.busy.processing = function() {
    Session.get('processing');
};


deactivateSpinner = function(){
    Session.set('processing', false);
}