//role: data service
Template.projectList.helpers({
	list: function () {
		//{{#each list}} >> computation, list는 []와 {}도 지원한다.
		//{} ==> {{#each in list}}

		return Projects.find(); //Projects: in mini mongo from client
	}
});

Template.projectList.events({
});

Template.projectList.onCreated(function () {
	var self = this;
	self.projectListSub = self.subscribe('projects');

	//self.subscribe를 사용하면 onDestoryed에서 stop 하지 않아도 됨.
	//subscribe 두번째 인자에 json 객체 전달이 가능하다.(e.g.검색 조건)

	//pub에서 ready를 선언하면 sub에서 종료된 시점을 감지 할 수 있다.
});

Template.projectList.onRendered(function () {

});

Template.projectList.onDestroyed(function () {

});


Template.projectListItem.helpers({
	list: function () {
		//{{#each list}} >> computation, list는 []와 {}도 지원한다.
		//{} ==> {{#each in list}}

		return Projects.find(); //Projects: in mini mongo from client
	}
});

Template.projectListItem.events({
	"click a[name=selectProject]" : function() {
		Session.set('viewMode', 'projectView');
		Session.set('currentProjectId', this._id);
	}
});

/*
observe > server, client에서 computation 처리할 수 있다.
Projects.find().observe({
    added: function(document) {

    }
});
*/
