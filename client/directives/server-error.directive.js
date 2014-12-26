(function () {

  angular
    .module('Instagram')
    .directive('serverError', serverError);

  function serverError() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: link
    };

    /////////////////////////

    function link(scope, element, attrs, ctrl) {

      element.on('keydown', function () {
        ctrl.$setValidity('server', true);
      });

    }

  }
})();