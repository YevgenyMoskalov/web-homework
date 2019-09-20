<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>voting</title>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="script.js"></script>
</head>
<body>
<div id="piechart_3d" style="width: 900px; height: 500px;"></div>
<form action="action.php" method="post" name="voting">
    <div>
        <label>
            <input type="radio" name="radio" value="php"> php
        </label><br>
        <label>
            <input type="radio" name="radio" value="C++"> C++
        </label><br>
        <label>
            <input type="radio" name="radio" value="Java Script"> Java Script
        </label><br>
        <label>
            <input type="radio" name="radio" value="html"> html :)
        </label>
    </div>
    <input type="submit" value="submit" id="btn">
</form>
<script>
    document.forms.voting.onsubmit = function (e) {
        e.preventDefault();
        let userInput = document.forms.voting.radio.value;
        userInput = encodeURIComponent(userInput);
        let xhr = new XMLHttpRequest();

        xhr.open('post', 'action.php');
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        console.log(userInput);
        xhr.send('radio=' + userInput);
        drawGoogleChart();
        };</script>
</body>
</html>
