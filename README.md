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

* Where possible, aim to share code/logic/templates between the JS client and the Android app (part of this project is to understand how much _can_ be shared).

* The intention is for the basic app to be small enough to have an MVP within 1 week.

* Training presentation to be created once the project is complete to share knowledge with the team.