Image-Me:
=========
Training project for Hybrid Mobile App

* Simple app allowing user to authenticate using Facebook and upload an image which is given a URL that can be accessed publically by other users.

* The app consists of:
  1. Slim PHP backend: RESTful service to create / retrieve images (SQLite DB used for persistence).
  2. Angular 2 JS client: Web app allowing Facebook login and image upload to php backend.
  3. Ionic 2 Android app: Mobile app sharing as much functionality as possible with the web app.

* Four pages/states:
  1. Login (relies on Facebook user ID, no user persisted in app)
  2. List images (all images uploaded by logged in user)
  3. Upload image (title + image)
  4. View image (title + image + share URL)

* Image entity consists of following fields:
  1. ID
  2. User ID (Facebook User ID)
  3. Title
  4. Image (either base64 encoded data or link to path on file system)

* Once user authenticated via Facebook, state should be stored (in localstorage or similar). Login page should be shown when non-authenticated user accesses root URL (or opens app), while listing page should be shown when authenticated user accesses root URL (or opens app).

* Where possible, aim to share code/logic/templates between the JS client and the Android app (part of this project is to understand how much _can_ be shared).

* Static templates showing each of the pages created and ready to use:

  1. http://rawgit.com/camelcasetechsd/image-me/master/static/1-login.html
  2. http://rawgit.com/camelcasetechsd/image-me/master/static/2-listing.html
  3. http://rawgit.com/camelcasetechsd/image-me/master/static/3-upload.html
  4. http://rawgit.com/camelcasetechsd/image-me/master/static/4-view.html

* A basic service has also been provided (to allow the Angular+Ionic clients to be focus of this project). The service can be checked here:
https://github.com/camelcasetechsd/image-me/blob/master/service/README.md

* The intention is for the basic app to be small enough to have an MVP within 1 week.

* Training presentation to be created once the project is complete to share knowledge with the team.