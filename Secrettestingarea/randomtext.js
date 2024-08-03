var app = angular.module('shortyism_generator', []);

app.controller('cant_control_shorty', function($scope) {
    // Default value before a shortyism is called.
    $scope.shortyism = texts_A[select];
    $scope.moar_shorty = function() {
      // if the array of shortyisms is emtpy, refill it.
      if (texts_A.length === 0) {
        texts_A = texts_B;
        texts_B = [];
      }
      select = Math.floor(Math.random()*texts_A.length);
      $scope.shortyism = texts_A[select];
      // store the now-used shortyism in another array, and remove it so it
      // doesn't repeat
      texts_B.push(texts_A[select]);
      texts_A.splice(select, 1);
    };
});


var texts_A = [
    "Test 1",
    "Test 2",
    "Test 3"
];

var texts_B = [

];


