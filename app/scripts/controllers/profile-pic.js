'use strict';

var bounds = {};

angular.module('profilepicApp')
  .directive('imgCropped', function($window) {
    return {
      restrict: 'E',
      replace: true,
      scope: { src:'=', selected:'&' },
      //link: function (scope, element, attr) {
      link: function (scope, element) {
        var myImg
          , clear = function() {
              if (myImg) {
                myImg.next().remove();
                myImg.remove();
                myImg = undefined;
              }
            }
          ;

        scope.$watch('src', function (nv) {
          clear();

          console.log('[src]');
          console.log(nv);
          if (!nv) { // newValue
            return;
          }

          element.after('<img style="max-width: 100%;"/>');
          myImg = element.next();
          myImg.attr('src', nv);
          $window.jQuery(myImg).Jcrop(
            { trackDocument: true
            , onSelect: function(cords) {
                scope.$apply(function() {
                  scope.selected({cords: cords});
                });
              }
            , aspectRatio: 1.333333333333333333
            }
          , function () {
              // Use the API to get the real image size  
              var boundsArr = this.getBounds();
              bounds.x = boundsArr[0];
              bounds.y = boundsArr[1];
            }
          );
        });
        
        scope.$on('$destroy', clear);
      }
    };
  });

// TODO create proper module
angular.module('profilepicApp')
  .factory("fileReader", function ($q) {
    var onLoad = function (reader, deferred, Sscope) {
      return function () {
        Sscope.$apply(function () {
          deferred.resolve(reader.result);
        });
      };
    };
    var onError = function (reader, deferred, Sscope) {
      return function () {
        Sscope.$apply(function () {
          deferred.reject(reader.result);
        });
      };
    };
    var onProgress = function (reader, Sscope) {
      return function (event) {
        Sscope.$broadcast(
          "fileProgress"
        , { total: event.total
          , loaded: event.loaded
          }
        );
      };
    };
    var getReader = function (deferred, Sscope) {
      var reader = new FileReader();
      reader.onload = onLoad(reader, deferred, Sscope);
      reader.onerror = onError(reader, deferred, Sscope);
      reader.onprogress = onProgress(reader, Sscope);
      return reader;
    };
    var readAsDataURL = function (file, Sscope) {
      var deferred = $q.defer();
      var reader = getReader(deferred, Sscope);
      reader.readAsDataURL(file);
      return deferred.promise;
    };
    return { readAsDataUrl: readAsDataURL };
  });

angular.module('profilepicApp').directive("ajFileSelect", function () {
  return {
    scope: {
      "ajChange": "&ajChange"
    , "ajModel": "=ajModel"
    }
  , link: function(dirScope, el) {
      el.bind("change", function(e) {
        dirScope.ajModel.file = (e.srcElement || e.target).files[0];
        console.log('ajFileSelect about to call getFile()', dirScope.ajModel);
        dirScope.ajChange();
      });
    }
  };
});

angular.module('profilepicApp')
  .controller('ProfilePicCtrl', function ($window, $timeout, $scope, fileReader) {
    var scope = this
      ;

    console.log(fileReader);

    scope.file = {};
    scope.getFile = function () {
      console.log('getFile() called.');
      console.log(scope.ajModel);
      console.log(scope.file);
      $scope.progress = 0;
      fileReader.readAsDataUrl(scope.file.file, $scope).then(function (result) {
        console.log('readAsDataUrl: result.length === ', result.length);
        //console.log(result);
        scope.imageSrc = result;
        $scope.imageSrc = result;
        $timeout(function () {
          scope.initJcrop();
        });
      });
    };

    $scope.$on("fileProgress", function(e, progress) {
      $scope.progress = progress.loaded / progress.total;
    });

    scope.initJcrop = function () {
      console.log('init jcrop');
      $window.jQuery('img.aj-crop').Jcrop({
        onSelect: function () {
          //$scope.$apply();
          console.log('onSelect', arguments);
        }
      , onChange: function () {
          //$scope.$apply();
          console.log('onChange', arguments);
        }
      , trackDocument: true
      , aspectRatio: 1.333333333333333333
      });
    };

    // http://plnkr.co/edit/Iizykd7UORy3po1h5mfm?p=preview
    scope.cropOpts = {
      ratioW: 1
    , ratioH: 1
    };
    $scope.selected = function (cords) {
      var scale
        ;

      scope.picWidth = cords.w;
      scope.picHeight = cords.h;

      console.log('scale');
      if (scope.picWidth > 400) {
        scale = (400 / scope.picWidth);
        console.log(scope.picHeight);
        scope.picHeight *= scale;
        scope.picWidth *= scale;
        console.log(scale);
      }

      if (scope.picHeight > 400) {
        scale = (400 / scope.picHeight);
        scope.picHeight *= scale;
        scope.picWidth *= scale;
        console.log(scale);
      }

      console.log('[cords]', scope.picWidth / scope.picHeight);
      console.log(cords);
      console.log(bounds);
      $scope.cropped = true;

      var rx = scope.picWidth / cords.w
        , ry = scope.picHeight / cords.h
        , canvas = document.createElement("canvas")
        , context = canvas.getContext('2d')
        , imageObj = $window.jQuery('img#preview')[0]
        ;


      $window.jQuery('.canvas-preview').children().remove();
      canvas.width = cords.w;
      canvas.height = cords.h;
      context.drawImage(imageObj, cords.x, cords.y, cords.w, cords.h, 0, 0, cords.w, cords.h);
      $window.jQuery('.canvas-preview').append(canvas);


      $window.jQuery('img#preview').css({
        width: Math.round(rx * bounds.x) + 'px',
        height: Math.round(ry * bounds.y) + 'px',
        marginLeft: '-' + Math.round(rx * cords.x) + 'px',
        marginTop: '-' + Math.round(ry * cords.y) + 'px'
      });
    };
  });
