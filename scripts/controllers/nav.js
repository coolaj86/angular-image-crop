'use strict';

angular.module('profilepicApp')
  .controller('NavCtrl', function ($state) {
    var allTabs
      ;

    allTabs = [
      { active: $state.includes('root')
      , title: 'Home'
      , href: $state.href('root')
      }
    , { active: $state.includes('profile-pic')
      , title: 'Profile'
      , href: $state.href('profile-pic')
      }
    ];
  });
