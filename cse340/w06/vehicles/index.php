<?php

/********************* VEHICLES CONTROLLER *********************/

// Get the database connection file
require_once '../library/connections.php';
// Get the PHP Motors model for use as needed
require_once '../model/main-model.php';
// Get the Vehicles model
require_once '../model/vehicle-model.php';

// Get the array of classifications
$classifications = getClassifications();

// Build a navigation bar using the $classifications array
$navList = '<ul>';
$navList .= "<li><a href='/phpmotors/index.php' title='View the PHP Motors home page'>Home</a></li>";
foreach ($classifications as $classification) {
 $navList .= "<li><a href='/phpmotors/index.php?action=".urlencode($classification['classificationName'])."' title='View our $classification[classificationName] product line'>$classification[classificationName]</a></li>";
}
$navList .= '</ul>';

//Build Classifications Dropdown
$classDrop = '<select name="classificationId" id="classificationId" required>';
$classDrop .= '<option disabled selected value> -- Select an Option -- </option>';
foreach ($classifications as $classification){
    $classDrop .= "<option value=".urlencode($classification['classificationId']).">$classification[classificationName]</option>";
}
$classDrop .= '</select>';


$action = filter_input(INPUT_POST, 'action');
if ($action == NULL) {
    $action = filter_input(INPUT_GET, 'action');
}



switch ($action) {
    case "addClassPage":
        include '../view/add-classification.php';
        break;

    case "addVehiclePage":
        include '../view/add-vehicle.php';
        break;
    case "addClassification":
        // Filter and store the data
        $classificationName = filter_input(INPUT_POST, 'classificationName');

        // Check for missing data
        if (empty($classificationName)) {
            $message = '<p>Please provide information for all empty form fields.</p>';
            include '../view/add-classification.php';
            exit;
        }

        // Send the data to the model
        $addClassOutcome = addClassificationClient($classificationName);

        // Check and report the result
        if ($addClassOutcome === 1) {
            $message = "<p>Thanks for adding $classificationName to the database.</p>";
            include '../view/vehicle-man.php';
            
            exit;
        } else {
            $message = "<p>Sorry , failed to add $classificationName to the database. Please try again.</p>";
            include '../view/add-classification.php';
            exit;
        }
        break;
    case "addVehicle":
        // Filter and store the data
        $classificationId = filter_input(INPUT_POST, 'classificationId');
        $invMake = filter_input(INPUT_POST, 'invMake');
        $invModel = filter_input(INPUT_POST, 'invModel');
        $invDescription = filter_input(INPUT_POST, 'invDescription');
        $invImage = filter_input(INPUT_POST, 'invImage');
        $invThumbnail = filter_input(INPUT_POST, 'invThumbnail');
        $invPrice = filter_input(INPUT_POST, 'invPrice');
        $invStock = filter_input(INPUT_POST, 'invStock');
        $invColor = filter_input(INPUT_POST, 'invColor');

        // Check for missing data
        if (empty($classificationId) || empty($invMake) || empty($invModel) || empty($invDescription) || empty($invImage) || empty($invThumbnail) || empty($invPrice) || empty($invStock) || empty($invColor)) {
            $message = "<p>Please provide information for all empty form fields.</p>";
            include '../view/add-vehicle.php';
            exit;
        }

        // Send the data to the model
        $addVehicleOutcome = addVehicleClient($classificationId, $invMake, $invModel, $invDescription, $invImage, $invThumbnail, $invPrice, $invStock, $invColor);

        // Check and report the result
        if ($addVehicleOutcome === 1) {
            $message = "<p>Thanks for adding $invMake $invModel to the database.</p>";
            include '../view/vehicle-man.php';
            exit;
        } else {
            $message = "<p>Sorry , failed to add $invMake $invModel to the database. Please try again.</p>";
            include '../view/add-vehicle.php';
            exit;
        }
        break;

    case "addVehicle":

    
    default:
        include '../view/vehicle-man.php';
}

?>