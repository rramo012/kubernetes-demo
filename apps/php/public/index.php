<?php

$servername = getenv('DB_SERVER');
$username = 'root';
$password = 'example';
$dbname = 'database';

$mysqli = new \mysqli($servername, $username, $password, $dbname);

$hostname = gethostname();
$stmt = $mysqli->prepare( "INSERT into traffic values (null, ?, now() )" );
$stmt->bind_param( 's', $hostname );
$stmt->execute();

$queryResult = $mysqli->query( "select distinct(hostname) from traffic" );
$counts = [];
foreach( $queryResult as $row ) {
	$queryResult = $mysqli->query( 'select count(*) from traffic where hostname = "' . $row['hostname'] . '"' );
	$counts[$row['hostname']] = $queryResult->fetch_row()[0];
}

$mysqli->close();

echo json_encode( $counts );