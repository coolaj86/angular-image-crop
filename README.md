Daplie is Taking Back the Internet!
--------------

[![](https://daplie.github.com/igg/images/ad-developer-rpi-white-890x275.jpg?v2)](https://daplie.com/preorder/)

Stop serving the empire and join the rebel alliance!

* [Invest in Daplie on Wefunder](https://daplie.com/invest/)
* [Pre-order Cloud](https://daplie.com/preorder/), The World's First Home Server for Everyone

angular-image-crop
============

### Demo at <https://coolaj86.github.com/angular-image-crop>

### Only supports IE 10+

This is a demo of jquery's jcrop wrapped in an angular directive and controller.

* [`/app/scripts/app.js`](https://github.com/coolaj86/angular-image-crop/blob/master/app/scripts/app.js)
* [`/app/scripts/controller/profile-pic.js`](https://github.com/coolaj86/angular-image-crop/blob/master/app/scripts/controllers/profile-pic.js)
* [`/app/styles/profile-pic.css`](https://github.com/coolaj86/angular-image-crop/blob/master/app/styles/profile-pic.css)
* [`/app/views/profile-pic.jade`](https://github.com/coolaj86/angular-image-crop/blob/master/app/views/profile-pic.jade)

It's not complete, but you can test it out.

The directive is provided in the module `aj.crop`.

Install
===

```bash
git clone https://github.com/coolaj86/angular-image-crop.git angular-image-crop
pushd angular-image-crop/
git remote rename origin upstream

npm install -g yo
npm install -g generator-angular
npm install -g bower

npm install
bower install

grunt build --force
```

Use
===

```bash
grunt build --force
grunt serve

# The --force is in case you don't have compass installed
# If you feel the need for compass, figure out how to install it
# and immediately apply FML relief cream to the affected areas generously
```

Similar Work
===

* [cropUploader](http://orbintsoft.azurewebsites.net/Demo/cropUploader/) With a few tweaks to get this working on mobile, this would be an ideal solution.

* [Jcrop](http://deepliquid.com/content/Jcrop.html) (jQuery) - I'm using this under-the-hood until I have the time to do it myself in "pure Angular"
* [imgAreaSelect](http://odyniec.net/projects/imgareaselect/) (jQuery)
* [Angular Jcrop Directive](https://stackoverflow.com/questions/14504393/how-to-fix-this-angularjs-jcrop-directive/23612063#23612063) I probably used parts of this in my implementation.
* [AngularJS Directive for Image Cropping](http://coding-issues.blogspot.com/2013/10/angularjs-directive-for-image-cropping.html) I started with this as my base example
