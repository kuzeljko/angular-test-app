
angular.module("learningApp").controller("homeController",  function(){
    vm = this;
    console.log("controller home is alive");
    vm.items = [
        {
        name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, 
        {
          name: 'Motorola XOOM with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, 
        {
          name: 'MOTOROLA XOOM',
          snippet: 'The Next, Next Generation tablet.'
        }
    ];
});
