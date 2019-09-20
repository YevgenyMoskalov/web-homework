<?php
session_start();
isset($_SESSION['counter']) ? $_SESSION['counter']++ : $_SESSION['counter'] = 1;
?>

  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PS_4</title>
    <link rel="stylesheet" type="text/css" href="style.css" >
  </head>
  <body>
  <?php echo 'hit counter : ' . $_SESSION['counter'] . "\n"; ?>
  <h1>My chessboard</h1>
  <?php draw_chessboard(); ?>
  <hr>
  <h1>sum of a row from -1000 to 1000</h1>
  <output><b><?php firstTask() ?></b></output>
  <hr>
  <h1>the sum of the numbers of the series from -1000 to 1000 that end in [2, 3, 7]</h1>
  <output><b><?php secondTask() ?></b></output>
  <hr>
  <h1>sum of digits of a number</h1>
  <form action="action.php" method="post">
    <label for="number">enter number </label><label>
      <input type="text" name="number">
    </label>
    <input type="submit" value="submit">
    <b>Result: <?php echo isset($_SESSION['task5']) ? " " . $_SESSION['task5'] : "";
        unset($_SESSION['task5']) ?></b>
  </form>
  <hr>

  <h1>Generate an array of random integers from 1 to 10, the length of the array is 100.
    Remove repeats from the array, sort, reverse and multiply each element by two.</h1>
  <output><b><?php sixthTask() ?></b></output>
  <hr>
  <h1>Count the number of lines, letters and spaces in the entered text</h1>
  <form action="action.php" method="post">
    <input type="text" name="text">
    <input type="submit" value="submit">
    <output><b>Result: <?php if (isset($_SESSION['textCounter'])) {
                echo $_SESSION['textCounter'];
                unset($_SESSION['textCounter']);
            } ?>
  </form>
  <hr>

  <h1>file upload</h1>
  <form action="action.php" enctype="multipart/form-data" method="post">
    <input type="file" name="file"/>
    <input type="submit" value="Upload file" name="upload"/>
    <input type="submit" value="show files" name="show"/>
  </form>
  </body>
  </html>

<?php

//// 1)
function firstTask()
{
    $result = 0;
    for ($i = -1000; $i <= 1000; $i++) {
        $result += $i;
    }
    echo 'Result: ' . $result . '<br>';
}

// 2)
function secondTask()
{
    $result = 0;
    for ($i = -1000; $i <= 1000; $i++) {
        if (in_array(abs($i % 10), [2, 3, 7], true)) {
            $result += $i;
        }
    }
    echo 'Result: ' . $result . '<br>';;
}

// 6)
function sixthTask()
{
    $rand_array = [];
    for ($i = 0; $i <= 100; $i++) {
        array_push($rand_array, rand(1, 10));
    }

    $normal_array = array_unique($rand_array);

    echo "\n";
    sort($normal_array);
    for ($i = 0; $i <= 9; $i++) {
        echo $normal_array[$i] . '<br>';
    }
    echo '<br>';
    rsort($normal_array);
    for ($i = 0; $i <= 9; $i++) {
        echo $normal_array[$i] . '<br>';
    }
    echo '<br>';
    for ($i = 0; $i <= 9; $i++) {
        $normal_array[$i] = $normal_array[$i] * 2;
    }
    for ($i = 0; $i <= 9; $i++) {
        echo $normal_array[$i] . '<br>';
    }
    echo '<br>';
}

//4
function draw_chessboard()
{
    echo '<div class="container_board">';
    $boardSize = 8;
    for ($i = 0; $i < $boardSize; $i++) {
        for ($j = 0; $j < $boardSize; $j++) {
            $color = ($i % 2 == $j % 2) ? 'white' : 'black';
            echo '<div class="block ' . $color . '"></div>';
        }
    }
    echo '</div>';
}

?>