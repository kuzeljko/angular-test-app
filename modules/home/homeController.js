
angular.module("learningApp").controller("homeController",  function($http){
    vm = this;
    $http.get('data/phones.json').then(function(response) {
        vm.items = response.data;
    });
});
