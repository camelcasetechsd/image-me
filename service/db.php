<?php
$db = new PDO('sqlite:images.sqlite3');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$db->exec("
CREATE TABLE IF NOT EXISTS images (
    id INTEGER PRIMARY KEY,
    userId INTEGER,
    title TEXT,
    image BLOB
)");