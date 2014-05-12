angular-image-crop
============

### Demo at <https://coolaj86.github.com/angular-image-crop>

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

* [Jcrop](http://deepliquid.com/content/Jcrop.html) (jQuery) - I'm using this under-the-hood until I have the time to do it myself in "pure Angular"
* [imgAreaSelect](http://odyniec.net/projects/imgareaselect/) (jQuery)
