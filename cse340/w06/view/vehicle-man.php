<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Vehicle Management</title>
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
            <h1>Vehicle Management</h1>

            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>

            <ul>
                <li><a href="?action=addClassPage">Add Classification</a></li>
                <li><a href="?action=addVehiclePage">Add Vehicle</a></li>
            </ul>

        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>
        </footer>
    </div>

</body>

</html>