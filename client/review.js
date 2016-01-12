
Router.route('/review', {
    path: '/review/:_id',
    onRun: function() {
        Session.set('userId', this.params._id);
        this.next();
    }
});

Template.review.helpers({
    userObj: function() {
        var userId = Session.get('userId');
        var userObj = Boards.findOne({_id: userId});
        //Boards.find({_id: userId}).fetch();
        return userObj;
    }
});