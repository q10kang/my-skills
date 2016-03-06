// projects를 publishing 한다.
Meteor.publish('projects', function () {
    return Projects.find();
});

// projects의 권한을 설정한다.
Projects.allow({
    insert: function() {
        return true;
    }
});
