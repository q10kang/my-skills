Template.createProject.events({
	'click button[name=saveProject]': function (evt, tmpl) {
		Projects.insert({
            _id: tmpl.find('input[name=projectName]').value,
            name: tmpl.find('input[name=projectName]').value,
            owner: Meteor.userId()
		});
	}
});
