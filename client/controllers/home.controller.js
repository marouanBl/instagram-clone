(function () {

  angular
    .module('Instagram')
    .controller('Home', Home);

  function Home($rootScope, $window, $auth) {
    this.isAuthenticated = isAuthenticated;
    this.linkInstagram = linkInstagram;

    /////////////////////////

    /**
     * Check if logged in.
     */
    function isAuthenticated() {
      return $auth.isAuthenticated();
    }

    /**
     * Connect email account with instagram.
     */
    function linkInstagram() {
      $auth.link('instagram')
        .then(function (res) {
          $window.localStorage.currentUser = JSON.stringify(res.data.user);
          $rootScope.currentUser = JSON.parse($window.localStorage.currentUser);
        });
    }
  }

})();