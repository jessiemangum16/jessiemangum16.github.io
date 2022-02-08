<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Add Vehicle</title>
    <link rel="stylesheet" href="../css/style.css" media="screen">
</head>

<body>
    <div id="content">
        <header>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/header.php'; ?>

            <nav>
                <?php
                echo $navList;
                ?>
            </nav>

        </header>

        <main>
            <h1>Add Vehicle</h1>

            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>
            <form id="add-vehicle-form" action="/phpmotors/vehicles/index.php" method="post">
                <label for="classificationId">Classification:</label>
                <?php
                echo $classDrop;
                ?>
                <label for="invMake">Make</label>
                <input name="invMake" id="invMake" type="text" required>

                <label for="invModel">Model</label>
                <input name="invModel" id="invModel" type="text" required>

                <label for="invDescription">Description</label>
                <input name="invDescription" id="invDescription" type="text" required>

                <label for="invImage">Image Path</label>
                <input name="invImage" id="invImage" type="text" required>

                <label for="invThumbnail">Thumbnail Path</label>
                <input name="invThumbnail" id="invThumbnail" type="text" required>

                <label for="invPrice">Price</label>
                <input name="invPrice" id="invPrice" type="number" required>

                <label for="invStock"># In Stock</label>
                <input name="invStock" id="invStock" type="number" required>

                <label for="invColor">Color</label>
                <input name="invColor" id="invColor" type="text" required>

                <button type="submit">Add Vehicle</button>
                <!-- Add the action name - value pair -->
                <input type="hidden" name="action" value="addVehicle">
            </form>

        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>
        </footer>
    </div>

</body>

</html>