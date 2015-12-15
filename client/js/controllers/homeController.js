myApp.controller('homeController', ['$scope', function($scope){
    $scope.myInterval = 3000
    $scope.slides = [{
        image: "img/koala-feliz.jpg"
    },
    {
        image: "img/koala-picole.jpg"
    },
    {
        image: "img/koala-surpreso.jpg"
    }]
}]);