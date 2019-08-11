<?php
// 1)
    $result = 0;
    for ($i = -1000; $i <= 1000; $i++) {
        $result += $i;
    }
    echo 'Result: ' . $result;
// 2)
    $result = 0;
    for ($i = -1000; $i <= 1000; $i++) {
        if (in_array(abs($i % 10), [2, 3, 7], true)) {
            $result += $i;
        }
    }
    echo 'Result: ' . $result;
// 7)
session_start();
if (isset($_SESSION['views'])) {
    $_SESSION['views'] = $_SESSION['views'] + 1;
} else {
    $_SESSION['views'] = 1;
}
echo "views = " . $_SESSION['views'];
// 5)
echo array_sum(str_split('534')) . "\n";

// 6)
$rand_array = [];
for ($i = 0; $i <= 100; $i++) {
    array_push($rand_array, rand(1, 10));
}

$normal_array = array_unique($rand_array);

for ($i = 0; $i <= 100; $i++) {
    echo $rand_array[$i] . ' ' . $normal_array[$i] . "\n";
}
echo "\n";
sort($normal_array);
for ($i = 0; $i <= 9; $i++) {
    echo $normal_array[$i] . "\n";
}
echo "\n";
rsort($normal_array);
for ($i = 0; $i <= 9; $i++) {
    echo $normal_array[$i] . "\n";
}
for ($i = 0; $i <= 9; $i++) {
    $normal_array[$i] = $normal_array[$i] * 2;
}
for ($i = 0; $i <= 9; $i++) {
    echo $normal_array[$i] . "\n";
}
//8)
echo "\n";
$str = "aaaaaaa\nbb 5bbbbbb\nc33ccc1 11cccc\nddd dd d  dddd d";
$lines = explode("\n", $str);
$count = count($lines);
echo "lines : $count";
echo "\n";
echo "\n";
$space_counter = substr_count($str, ' ');
echo "space : $space_counter";
echo "\n";
echo "\n";
$number_counter = preg_match_all("/[0-9]/", $str);
echo "numbers :  $number_counter";
echo "\n";
echo "\n";
$characters = strlen($str);
$characters -= $space_counter + $number_counter + $count - 1;
echo "characters : $characters";