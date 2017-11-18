<?php

require 'setup.php';

$query = "
    SELECT `posts`.*
    FROM `posts`
    WHERE 1
    ORDER BY `published_at` DESC
";

$stmt = db::execute($query);
$stmt->setFetchMode(PDO::FETCH_ASSOC);

$posts = array();
foreach($stmt as $row)
{
    $posts[] = $row;
}

$response = array(
    'status' => 'OK',
    'posts' => $posts
);

echo json_encode($response);
exit();