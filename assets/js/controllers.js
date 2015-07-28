angular.module('controllers',[])
.controller('homeCtrl', function ($scope, $http, userService, $state){
 $scope.user = {};
 $scope.userfound= true;
 $scope.Login = function(){
  userService.getUsers()
  .success(function(data){
    var allusers = data;
    var users = allusers.map(function(user){
    var this_user= user.name + "+" + user.class;
     return this_user;
    });
    
    //do Search within array (need to find location, either return location of it, or return -1 if not in array)
    var u = users.indexOf($scope.user.name + "+" + $scope.user.class);
    if (u<0) {
     console.log("User not found!");
     $scope.userfound= false;
     //do reload
     
    } else if (u>=0) {
     console.log("User found!");
     $scope.userfound= true;
     localStorage.setItem("user",JSON.stringify(users[u]));
     $state.go('survey');
    }
    
    
  })
  .error(function(err){
   
  });

};
 
})

.controller('surveyCtrl', function($scope,$http,Survey,$document){
 
 $scope.user=JSON.parse(localStorage.getItem('user'));
 $scope.counter=1;
$scope.nextQn= function (qn) {
 console.log(qn);
  $scope.counter=qn;
};
$scope.prevQn= function (qn) {
 console.log(qn);
  $scope.counter=qn;
};

 Survey.getQns()
 .success(function (data){
  $scope.survey=data;
  console.log($scope.survey);
 })
 .error(function(err){
  console.log(err);
 });
 
 $scope.select_option = function (qn,choice) {
 $scope.survey[qn-1].response=choice;
 
 };
$scope.startagain = function () {
 console.log($scope.survey);
 $scope.counter=1;
};

$scope.submit = function () {
 $scope.response=[];
 for (var i=0;i<$scope.survey.length;i++){
  var thisresponse={};
  thisresponse.qns_no=$scope.survey[i].qns_no;
 thisresponse.response=$scope.survey[i].response;
 $scope.response.push(thisresponse);
  
 }
 Survey.submitResponse($scope.user,$scope.response)
 .success(function (data){
  console.log(data);
 })
 .error (function(err){
  console.log(err);
 }) ;
 
};
});
/*
.controller('faqCtrl', function($scope){
	
})

.controller('eventsfeedCtrl', function($scope){
	
})

.controller('createCtrl', function($scope){
	
})

.controller('feedbackCtrl', function($scope){
	
})

.controller('aboutusCtrl', function ($scope){
    
})

.controller('contactusCtrl', function ($scope){
    
});*/