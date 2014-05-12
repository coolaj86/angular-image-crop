angular-image-crop
============

This is a demo of jquery's jcrop wrapped in an angular directive and controller.

* `/app/scripts/profile-pic.js`
* `app/styles/profile-pic.css`

It's not complete, but you can test it out.

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
