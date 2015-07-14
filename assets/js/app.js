angular.module('ccaApp',['ui.router','controllers','services'])

.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('home', {
		url:"/home",
		templateUrl:"templates/home.html",
		controller: "homeCtrl"
 
	});
	
	$stateProvider
	.state('survey', {
		url:"/survey",
		templateUrl:"templates/survey.html",
		controller: "surveyCtrl"
 
	});
	
/*	$stateProvider
	.state('faq', {
		url:"/faq",
		templateUrl:"templates/faq.html",
		controller: "faqCtrl"
 
	});
	
	$stateProvider
	.state('navbar.eventsfeed', {
		url:"/eventsfeed",
		templateUrl:"templates/eventsfeed.html",
		controller: "eventsfeedCtrl"
 
	});
	
	$stateProvider
	.state('navbar.createevent', {
		url:"/createevent",
		templateUrl:"templates/createevent.html",
		controller: "createCtrl"
 
	});
	
	$stateProvider
	.state('navbar.feedback', {
		url:"/feedback",
		templateUrl:"templates/feedback.html",
		controller: "feedbackCtrl"
 
	});
	
	$stateProvider
	.state('aboutus', {
		url:"/aboutus",
		templateUrl:"templates/aboutus.html",
		controller: "aboutusCtrl"
 
	});
	
	$stateProvider
	.state('contactus', {
		url:"/contactus",
		templateUrl:"templates/contactus.html",
		controller: "contactusCtrl"
 
	});
	.state('loggedin', {
		url:"/loggedin",
		abstract: true,
		templateUrl:"templates/main.html",
		controller: 'mainCtrl',
	

	})
	.state('loggedin.overview', {
url:"/overview",
views: {
	'main-display@loggedin':{
							templateUrl:"templates/overview.html",
							controller: 'overviewCtrl'},
	'right-display@loggedin':{
							templateUrl:"templates/details.html",
							controller: 'detailsCtrl'},
}
		
		})*/

$urlRouterProvider.otherwise('/home');
});