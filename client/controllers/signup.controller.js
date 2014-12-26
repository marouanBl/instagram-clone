(function () {

  angular
    .module('Instagram')
    .controller('Signup', Signup);

  function Signup($auth) {
    var vm = this;

    vm.email = '';
    vm.password = '';

    vm.signup = signup;

    /////////////////////////

    /**
     * Create a new user
     */
    function signup() {
      var user = {
        email: vm.email,
        password: vm.password
      };

      // Satellizer
      $auth.signup(user)
        .catch(function (res) {
          console.log(res.data);
        });
    }

  }

})();
