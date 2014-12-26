(function () {

  angular
    .module('Instagram', [
      'ngRoute',
      'ngMessages',
      'satellizer'
    ])
    .config(config);

  function config($routeProvider, $authProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'Home',
        controllerAs: 'Home'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'Login',
        controllerAs: 'Login'
      })
      .when('/signup', {
        templateUrl: 'views/signup.html',
        controller: 'Signup',
        controllerAs: 'Signup'
      })
      .when('/photo/:id', {
        templateUrl: 'views/detail.html',
        controller: 'Detail',
        controllerAs: 'Detail'
      })
      .otherwise('/');


    $authProvider.loginUrl = 'http://localhost:3000/auth/login';
    $authProvider.signupUrl = 'http://localhost:3000/auth/signup';
    $authProvider.oauth2({
      name: 'instagram',
      url: 'http://localhost:3000/auth/instagram',
      redirectUri: 'http://localhost:8000',
      clientId: 'b33646c8fd7e4a7eb5ef216ed555bc89',
      requiredUrlParams: ['scope'],
      scope: ['likes'],
      scopeDelimiter: '+',
      authorizationEndpoint: 'https://api.instagram.com/oauth/authorize'
    });


  }

})();
