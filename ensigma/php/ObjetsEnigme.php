<?php
$link = mysqli_connect('localhost:3307', 'root', 'root', 'ensigma');
$sql = mysqli_query($link, "SELECT  * FROM objects ");
while ($row = mysqli_fetch_assoc($sql)) {
    $rows[] = $row;
}

if ($_SERVER['REQUEST_METHOD'] == "GET")
{
    echo json_encode($rows,JSON_NUMERIC_CHECK);
}
 ?>
