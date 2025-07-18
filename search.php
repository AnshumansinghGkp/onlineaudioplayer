<?php
header('Content-Type: application/json');

if (isset($_GET['q']) && !empty($_GET['q'])) {
    $query = urlencode($_GET['q']);
    $url = "https://itunes.apple.com/search?term=$query&media=music&limit=10";

    $response = file_get_contents($url);
    echo $response;
} else {
    echo json_encode(['results' => []]);
}
