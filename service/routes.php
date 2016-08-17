<?php

// GET /images?userId=123
$app->get('/images', function ($request, $response, $args) {

    global $db;

    $sql = 'SELECT * FROM images';

    $whereClause = '';
    $bindValue = null;
    if (!empty($_REQUEST['userId'])) {
        $whereClause = ' WHERE userId = :userId';
        $bindValue = $_REQUEST['userId'];
    }

    $sql .= $whereClause;
    
    $statement = $db->prepare($sql);
    if (!empty($bindValue)) {
        $statement->bindParam(':userId', $bindValue);
    }
    $statement->execute();

    $data = array();
    foreach ($statement->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $data[] = $row;
    }

    $response->write(json_encode($data));
    return $response->withHeader('Content-Type', 'application/json');

});

// GET /images/1
$app->get('/images/{id}', function ($request, $response, $args) {

    global $db;

    $statement = $db->prepare('SELECT * FROM images WHERE id = :id LIMIT 1');
    $statement->bindParam(':id', $args['id']);
    $statement->execute();

    $data = array();
    foreach ($statement->fetchAll(PDO::FETCH_ASSOC) as $row) {
        $data[] = $row;
    }
    $response->write(json_encode($data));
    return $response->withHeader('Content-Type', 'application/json');

});

// POST /images (POSTing userId, title & image [as multipart form])
$app->post('/images', function ($request, $response, $args) {

    global $db;
    if (empty($_REQUEST['userId'])) { throw new Exception('Field "userId" required!'); }
    if (empty($_REQUEST['title'])) { throw new Exception('Field "title" required!'); }
    if (empty($_FILES['image'])) { throw new Exception('Field "image" required!'); }

    $encodedImage = base64_encode(file_get_contents($_FILES['image']['tmp_name']));

    $statement = $db->prepare('INSERT INTO images (userId, title, image) VALUES (:userId, :title, :image)');
    $statement->bindParam(':userId', $_REQUEST['userId']);
    $statement->bindParam(':title', $_REQUEST['title']);
    $statement->bindParam(':image', $encodedImage);
    $statement->execute();

    $response->write('OK');
    return $response;

});
