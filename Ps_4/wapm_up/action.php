<?php
if (isset($_POST['number'])) {
    fifthTask(($_POST['number']));
} else if ($_POST['text']) {
    eighthTask($_POST['text']);
} else if ($_POST['upload']) {
    uploadFile($_POST['upload']);
} else if ($_POST['show']) {
    showFile();
}
function fifthTask($number)
{
    $result = array_sum(str_split($number));
    $_SESSION['task5'] = $result;
    header("Location: index.php");
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
    $_SESSION['textCounter'] = "lines : $count\nspace : $space_counter\nnumbers :  $number_counter\ncharacters : $characters";
    header('Location: index.php');
}

//================что за херня тут твориться?===========================
function uploadFile($file)
{
    $directory = 'files/';
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
    header("Location: index.php");
}

function showFile()
{
    $directory = 'files/';
    $files = array_diff(scandir($directory, SCANDIR_SORT_NONE), ['.', '..']);
    foreach ($files as $file) {
        $file_name = $directory . $file;
        //check if file is image than add small icon
        $image = is_image($file_name) ? "<img src='$file_name' alt='$file_name'>" :
            "<img src='img/file.png' alt='file_image3'>";
        $humanSize = human_size($file_name);
        echo "<div class='image_box'>$image<p><a href='$file_name' download>$file</a><br>$humanSize</p></div>";;
    }
}

function is_image($filename)
{
    $extension = preg_split('/[.]/', $filename);
    $imagExtensions = array('jpeg', 'jpg', 'png', 'gif', 'bmp');
    return in_array($extension[1], $imagExtensions);
}

function human_size($file)
{
    $humanSize = floatval(filesize($file));

    $sizes = [
        pow(1024, 4) => "Tb",
        pow(1024, 3) => "Gb",
        pow(1024, 2) => "Mb",
        1024 => "Kb",
        1 => "bytes"
    ];
    foreach ($sizes as $key => $value) {
        if ($humanSize >= $key) {
            $humanSize /= $key;
            return round($humanSize, 1) . ($value);
        }
    }
    return 'not found';
}
//=====================================================================