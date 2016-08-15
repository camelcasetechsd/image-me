Image-Me Service
================
Service to persist images for Image-Me

Built in PHP/Slim, using SQLite for persistence.

This service is a proof-of-concept only. The focus of this application are the Angular+Ionic web+mobile clients, so this service is deliberately basic.

The root directory must be writable by PHP, to allow the SQLite file to be created the first time the script runs.

To install sqlite driver on ubuntu16:
```
 sudo apt install php7.0-sqlite3
```

To run this service use:
```
composer install
php -S localhost:8000 index.php
```

Then access the image listing at:
http://localhost:8000/images