<?php

// 检查是否有上传的文件，并检查是否出现错误
if (isset($_FILES['file']) && $_FILES['file']['error'] == 0) {
    // 获取上传文件的临时文件名和名称
    $tmp_name = $_FILES['file']['tmp_name'];

    // 通过 pathinfo 函数获取上传文件的扩展名
    $ext = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
    
    // 使用 uniqid 函数生成一个随机的文件名
    $ram = uniqid();
    $name = uniqid() . '.' . $ext;
    
    // 拼接上传文件请求路径
    $uploads_dir = 'D:/wwwroot/upload.devopen.top/upload/';
    $target_file = $uploads_dir . $name;
    // 将临时文件移动到目标路径
    if (move_uploaded_file($tmp_name, $target_file)) {
        // 返回成功信息，并将文件名作为响应体返回
        http_response_code(200);
        echo basename($name);
    } else {
        // 返回上传失败的错误信息和状态码
        http_response_code(500);
        echo "文件上传失败。";
    }
} else {
    // 返回上传失败的错误信息和状态码
    http_response_code(400);
    echo "无法上传文件。";
}

?>