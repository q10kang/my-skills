Template.registerHelper('currentMode', function () {
	if (!Session.get('viewMode')) Session.set('viewMode', 'main');
	return Session.get("viewMode");
});
