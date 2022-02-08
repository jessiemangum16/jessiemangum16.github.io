<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Sign In</title>
    <link rel="stylesheet" href="../css/style.css" media="screen">
</head>

<body>
    <div id="content">
        <header>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/header.php';?>
            
            <nav>
                <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/nav.php';?>
            </nav>

        </header>

        <main>
            <h1>Sign In</h1>

            <form id="sign-in-form">
                <label for="email">Email</label>
                <input name="email" id="email" type="email" required>

                <label for="pwd">Password</label>
                <input name="pwd" id="pwd" type="password" required>

                <button type="submit">Sign-In</button>
            </form>

            <a class="link" href="?action=register">Not a member yet?</a>
            
        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php';?>
        </footer>
    </div>

</body>

</html>