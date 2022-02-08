<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Template</title>
    <link rel="stylesheet" href="css/style.css" media="screen">
</head>

<body>
    <div id="content">
        <header>
            <img src="images/site/logo.png" alt="PHP Motors Logo">

            <a class="right" href="#">My Account</a>
            
            <nav>
                <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/nav.php';?>
            </nav>

        </header>

        <main>
            <h1>Your Content here</h1>
        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php';?>
        </footer>
    </div>

</body>

</html>