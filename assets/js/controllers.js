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

.controller('surveyCtrl', function($scope){
/*$http.get('assets/json/survey.json')
.success(function(data){
$scope.survey=data;
console.log(data);
})
.error (function (err){

	console.log (err);
});*/
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