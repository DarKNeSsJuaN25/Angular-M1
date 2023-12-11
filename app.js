(function(){
    'use strict';
    angular.module('app',[])
    .controller('controller',LunchController);
    LunchController.$inject = ['$scope'];
    function LunchController($scope){
        $scope.name = '';
        $scope.message = '';
        $scope.checkbutton= () =>{
            let splitterms = $scope.name.split(',');
            //Considering empty item (, ,) example
            if(splitterms[0].trim() === ''){
                $scope.message = "Please enter data first";
            } 
            else if(splitterms.length <= 3) 
                $scope.message = "Enjoy!";
            else $scope.message = "Too Much!";
        }
    }
})();