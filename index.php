<!DOCTYPE html>
<html>
<head>
    <title>Jondavy0101 | Calculator</title>

    <!-- Metas and General Links -->
    <?php
        include_once('./resources/includes/head.php');
    ?>

</head>
<body>

<!-- Content -->
    <div class="container-fluid" id="background-div"></div>
    <div class="container-fluid ">
        <div class="row">
            <div class="col-md-12 p-0">
            <!-- Navbar -->
                <?php
                    include_once('./resources/includes/navbar.php');
                ?>
            </div>
        </div>
    </div>

    <div class="container min-100 d-flex flex-column">
        <div class="row">
            <div class="col-sm-6 calculator pb-3">
                <div class="row">
                    <div class="col text-center">
                        <input type="text" name="" placeholder="0" id="calculations" class="w-100 mt-3 mb-2">
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <img src="./resources/images/icons/buttons/1.svg" alt="One" class="button p-1" onclick="Button(1)">
                        <img src="./resources/images/icons/buttons/2.svg" alt="Two" class="button p-1" onclick="Button(2)">
                        <img src="./resources/images/icons/buttons/3.svg" alt="Three" class="button p-1" onclick="Button(3)">
                        <img src="./resources/images/icons/buttons/divide.svg" alt="Divide" class="button p-1" onclick="ButtonOperator('/')">
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <img src="./resources/images/icons/buttons/4.svg" alt="Four" class="button p-1" onclick="Button(4)">
                        <img src="./resources/images/icons/buttons/5.svg" alt="Five" class="button p-1" onclick="Button(5)">
                        <img src="./resources/images/icons/buttons/6.svg" alt="Six" class="button p-1" onclick="Button(6)">
                        <img src="./resources/images/icons/buttons/multiply.svg" alt="Multiply" class="button p-1" onclick="ButtonOperator('*')">
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <img src="./resources/images/icons/buttons/7.svg" alt="Seven" class="button p-1" onclick="Button(7)">
                        <img src="./resources/images/icons/buttons/8.svg" alt="Eight" class="button p-1" onclick="Button(8)">
                        <img src="./resources/images/icons/buttons/9.svg" alt="Nine" class="button p-1" onclick="Button(9)">
                        <img src="./resources/images/icons/buttons/subtract.svg" alt="Subtract" class="button p-1" onclick="ButtonOperator('-')">
                    </div>
                </div>
                <div class="row">
                    <div class="col text-center">
                        <img src="./resources/images/icons/buttons/0.svg" alt="Zero" class="button p-1" onclick="Button(0)">
                        <img src="./resources/images/icons/buttons/equals.svg" alt="Equals" class="button p-1" onclick="ButtonOperator('=')">
                        <img src="./resources/images/icons/buttons/ac.svg" alt="AC" class="button p-1" onclick="ButtonClear()">
                        <img src="./resources/images/icons/buttons/add.svg" alt="Add" class="button p-1" onclick="ButtonOperator('+')">
                    </div>
                </div>
            </div>
        </div>
    </div>

<!-- Footer -->
    <?php
        include_once('./resources/includes/footer.php');
    ?>

    <script src="./resources/jquery-3.4.1.min.js"></script>
    <script src="./resources/bootstrap-4.3.1-dist/js/bootstrap.min.js"></script>
    <script src="./resources/js/script.js"></script>

</body>
</html>
