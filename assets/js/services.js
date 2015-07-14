angular.module("services",[])

.factory("userService", function ($http){
    var factory = {};
    factory.getUsers = function (){
        return $http.get("assets/json/users.json");
    };
    return factory;
});