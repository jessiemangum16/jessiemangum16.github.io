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
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/header.php';?>

            <nav>
                <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/nav.php'; ?>
            </nav>

        </header>

        <main>
            <h1>Register</h1>

            <form id="sign-in-form">
                <label for="fname">First Name</label>
                <input name="fname" id="fname" type="text" required>

                <label for="lname">Last Name</label>
                <input name="lname" id="lname" type="text" required>

                <label for="email">Email</label>
                <input name="email" id="email" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}" required>

                <label for="pwd">
                    Password
                    <br><span class="small">Password must be at least 8 characters and contain at least 1 number, 1 capital leter, and 1 special character.</span></label>
                <input name="pwd" id="pwd" type="password"  pattern="(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*_=+-]).{8,}" required>

                <button type="submit">Sign-In</button>
            </form>
        </main>

        <footer>
            <?php require_once $_SERVER['DOCUMENT_ROOT'] . '/phpmotors/snippets/footer.php'; ?>
        </footer>
    </div>

</body>

</html>