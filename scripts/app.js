'use strict';

angular.module('profilepicApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider) {
    var nav
      , footer
      ;

    // IMPORTANT: (Issue #4)
    // These funny arrays (in resolve) are neccessary because ui.router
    // doesn't get properly mangled by ng-min
    // See https://github.com/yeoman/generator-angular#minification-safe
    nav = {
      templateUrl: '/views/nav.html'
    , controller: 'NavCtrl as N'
    };

    footer = {
      templateUrl: '/views/footer.html'
    };

    //$locationProvider.html5Mode(true);

    // Deal with missing trailing slash
    $urlRouterProvider.rule(function($injector, $location) {
      var path = $location.path(), search = $location.search()
        ;

      if (path[path.length - 1] === '/') {
        return;
      }

      if (Object.keys(search).length === 0) {
        return path + '/';
      }

      var params = []
        ;

      angular.forEach(search, function(v, k){
        params.push(k + '=' + v);
      });

      return path + '/?' + params.join('&');
    });
    $urlRouterProvider.otherwise('/profile-pic/');

    $stateProvider
      .state('profile-pic', {
        url: '/profile-pic/'
      , views: {
          nav: nav
        , body: {
            templateUrl: 'views/profile-pic.html'
          , controller: 'ProfilePicCtrl as P'
          }
        , footer: footer
        }
      })
      ;
  });
