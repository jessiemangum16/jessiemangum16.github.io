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
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/header.php'; ?>

            <nav>
                <?php
                echo $navList;
                ?>
            </nav>

        </header>

        <main>
            <h1>Sign In</h1>

            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>
            <form id="sign-in-form">
                <label for="clientEmail">Email</label>
                <input name="clientEmail" id="email" type="email" required>

                <label for="clientPassword">Password</label>
                <input name="clientPassword" id="pwd" type="password" required>

                <button type="submit">Sign-In</button>
            </form>

            <a class="link" href="?action=registration">Not a member yet?</a>

        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>
        </footer>
    </div>

</body>

</html>