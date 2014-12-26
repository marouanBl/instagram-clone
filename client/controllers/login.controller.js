(function () {

  angular
    .module('Instagram')
    .controller('Login', Login);

  function Login($window, $location, $rootScope, $auth) {
    var vm = this;

    vm.email = '';
    vm.password = '';
    vm.errorMessage = null;
    vm.loginForm = null;

    vm.instagramLogin = instagramLogin;
    vm.emailLogin = emailLogin;

    /**
     * login with Satellizer - instagram
     */
    function instagramLogin() {
      $auth.authenticate('instagram')
        .then(successLoginHandler)
        .catch(function (res) {
          console.log(res.data);
        });
    }

    /**
     * Login with Satellizer - email
     */
    function emailLogin() {
      $auth.login({ email: vm.email, password: vm.password })
        .then(successLoginHandler)
        .catch(function (res) {
          vm.errorMessage = {};

          angular.forEach(res.data.message, function (message, field) {
            vm.loginForm[field].$setValidity('server', false);
            vm.errorMessage[field] = res.data.message[field];
          })
        });
    }

    /**
     * Handles successful login.
     * @param res
     */
    function successLoginHandler(res) {
      $window.localStorage.currentUser = JSON.stringify(res.data.user);
      $rootScope.currentUser = JSON.stringify($window.localStorage.currentUser);
    }
  }

})();
