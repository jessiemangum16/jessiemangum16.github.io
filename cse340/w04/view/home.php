<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>PHP Motors</title>
    <link rel="stylesheet" href="css/style.css" media="screen">
</head>

<body>
    <div id="content">
        <header>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/header.php';?>
            
            <nav>
                <?php 
                    //require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/nav.php';
                    echo $navList;
                ?>
            </nav>

        </header>

        <main>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/home_content.php';?>  
        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php';?>
        </footer>
        

    </div>

</body>

</html>