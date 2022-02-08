<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Register</title>
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
            <h1>Register</h1>

            <?php
            if (isset($message)) {
                echo $message;
            }
            ?>
            <form id="sign-in-form" action="/phpmotors/accounts/index.php" method="post">
                <label for="clientFirstname">First Name</label>
                <input name="clientFirstname" id="fname" type="text" required>

                <label for="clientLastname">Last Name</label>
                <input name="clientLastname" id="lname" type="text" required>

                <label for="clientEmail">Email</label>
                <input name="clientEmail" id="email" type="email" required>

                <label for="clientPassword">
                    Password
                    <br><span class="small">Password must be at least 8 characters and contain at least 1 number, 1 capital leter, and 1 special character.</span></label>
                <input name="clientPassword" id="pwd" type="password" pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}" required>

                <button type="submit" name="submit" id="regbtn" value="Register">Register</button>
                <!-- Add the action name - value pair -->
                <input type="hidden" name="action" value="register">

            </form>
        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>
        </footer>
    </div>

</body>

</html>