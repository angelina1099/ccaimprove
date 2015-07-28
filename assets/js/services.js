angular.module("services",[])

.factory("userService", function ($http){
    var factory = {};
    factory.getUsers = function (){
        return $http.get("assets/json/users.json");
    };
    return factory;
})

.factory("Survey", function ($http){
   var factory={};
   factory.getQns = function () {
       return $http.get("assets/json/survey.json");
   }
   factory.submitResponse= function (user,response) {
       return $http.post('apis/index.php/survey/submitresponse',{user:user,response:response});
   }
    return factory;
 
});