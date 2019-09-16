<?php
if ($_POST['number']) {
    fifthTask($_POST['number']);
} else if ($_POST['text']) {
    eighthTask($_POST['text']);
} else if ($_POST['upload']) {
    uploadFile($_POST['upload']);
} else if ($_POST['show']) {
    showFile();
}
function fifthTask($number)
{
    if (is_numeric($number)) {
        $_SESSION['sumDigits'] = array_sum(str_split($number));
    } else {
        $_SESSION['sumDigits'] = $number . 'not a number';
    }
    echo $_SESSION['sumDigits'];
    header('Location: index.php');
}

function eighthTask($text)
{
    $lines = explode("\n", $text);
    $count = count($lines);
    $space_counter = substr_count($text, ' ');
    $number_counter = preg_match_all("/\d/", $text);
    $characters = strlen($text);
    $characters -= $space_counter + $number_counter + $count - 1;
    $_SESSION['textCounter'];
    $_SESSION['textCounter'] = "lines : $count\nspace : $space_counter\nnumbers :  $number_counter\ncharacters : $characters\"";
    header('Location: index.php');
}
//===========================================
function uploadFile($file)
{
    $directory = 'uploads/';
    $files = array_diff(scandir($directory, SCANDIR_SORT_NONE), ['.', '..']);
    $file = $_FILES['file']['name'];
    if ($file == '') {
        echo 'No file specified!<br>';
    } else {
        upload($file, $directory);
    }
}

function upload($file, $directory)
{
    $pathTo = $directory . $file;
    move_uploaded_file($_FILES['file']['tmp_name'], $pathTo);
    echo 'File uploaded!';
}
//=====================================================================
function showFile()
{
}