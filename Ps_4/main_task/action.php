<?php
if (isset($_POST['radio'])) {
    setJsonData();
}
function setJsonData()
{
    $buffer = file_get_contents("data.json");
    $data = json_decode($buffer,true);
    unset($buffer);
    $jsonerror = '';

    switch (json_last_error()) {
        case JSON_ERROR_NONE:
            $jsonerror = '';
            break;
        case JSON_ERROR_DEPTH:
            $jsonerror = ' - Maximum stack depth exceeded';
            break;
        case JSON_ERROR_STATE_MISMATCH:
            $jsonerror = ' - Underflow or the modes mismatch';
            break;
        case JSON_ERROR_CTRL_CHAR:
            $jsonerror = ' - Unexpected control character found';
            break;
        case JSON_ERROR_SYNTAX:
            $jsonerror = ' - Syntax error, malformed JSON';
            break;
        case JSON_ERROR_UTF8:
            $jsonerror = ' - Malformed UTF-8 characters, possibly incorrectly encoded';
            break;
        default:
            $jsonerror = ' - Unknown error';
            break;
    }
    if($jsonerror != ''){
        echo $jsonerror;
    }else{
        foreach ($data as &$temp){
            if($temp[0] == $_POST['radio']){
                $temp[1]++;
            }
        }
        file_put_contents('data.json', json_encode($data));
    }
}
