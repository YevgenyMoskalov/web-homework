<?php
if ($_POST['number']) {
    fifthTask($_POST['number']);
} else if ($_POST['text']) {
    eighthTask($_POST['text']);
} else if ($_POST['upload']) {
    uploadFile($_POST['file']);
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

function uploadFile($file)
{
    if (is_uploaded_file($file)) {
        if (move_uploaded_file('/first_directory/' . $file, '/new_directory/' . $file)) {
            echo 'wonderfully you uploaded the file!';
        } else {
            echo 'oh something went wrong!';
        }
    } else {
        echo 'oh something went wrong!!!';
    }
}
