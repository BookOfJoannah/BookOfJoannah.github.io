var randomtext = angular.module('shortyism_generator', []);

randomtext.controller('cant_control_shorty', function($scope) {
    // Default value before a shortyism is called.
    $scope.shortyism = "Will this be a default value?";
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