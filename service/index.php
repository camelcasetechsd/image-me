<?php

require 'vendor/autoload.php';

$app = new Slim\App();

require 'db.php';

require 'routes.php';

$app->run();