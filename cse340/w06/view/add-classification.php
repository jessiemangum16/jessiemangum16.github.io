<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Add Classification</title>
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
            <h1>Add Car Classification</h1>

            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>
            <form id="add-classification-form" action="/phpmotors/vehicles/index.php" method="post">
                <label for="classificationName">Classification Name</label>
                <input name="classificationName" id="classificationName" type="text" required>

                <button type="submit">Add Classification</button>
                <!-- Add the action name - value pair -->
                <input type="hidden" name="action" value="addClassification">
            </form>

        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>
        </footer>
    </div>

</body>

</html>