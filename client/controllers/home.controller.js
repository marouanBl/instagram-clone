(function () {

  angular
    .module('Instagram')
    .controller('HomeCtrl', HomeCtrl);

  function HomeCtrl() {
    this.isAuthenticated = isAuthenticated;
    this.linkInstagram = linkInstagram;

    /////////////////////////

    /**
     * Check if logged in.
     */
    function isAuthenticated() {

    }

    /**
     * Connect email account with instagram.
     */
    function linkInstagram() {

    }
  }

})();