<?php

//Proxy connection to the phpmotors database

function phpmotorsConnect()
{
    $server = 'localhost:3307';
    $dbname = 'phpmotors';
    $username = 'iClient';
    $password = 'Jess!8164694';
    $dsn = "mysql:host=$server;dbname=$dbname";
    $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

    try {
        $link = new PDO($dsn, $username, $password, $options);
        return $link;
    } catch(PDOException $e) {
        header('Location: /phpmotors/view/500.php');
        exit;
      }
    }