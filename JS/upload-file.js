// 当上传按钮被点击时触发
function uploadFile() {
    // 获取用户选择的文件
    var file = $('#fileInput').prop('files')[0];
    if (!file) {
        alert('[ERR1]没有上传的文件');
        return;
    }


    // 创建表单数据对象，将文件添加到其中
    var formData = new FormData();
    formData.append('file', file);

    // 使用 jQuery 的 AJAX 函数以 POST 请求方式将表单数据提交到服务器端
    $.ajax({
        url: 'http://106.75.22.134:32/upload.php',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        
        success: function (response) {
            // 更新界面，在 p 元素中展示上传的图片链接
            var imageLink = $('#imageLink');
            var uuid = $('#uuid');
            const fileName = response;
            const withoutExt = fileName.replace(/\.[^/.]+$/, ''); // 去除扩展名
            
            imageLink.html('<i class="fa-solid fa-circle-check" style="color: #4dff6a;"></i>'
                + 'http://106.75.22.134:32/upload/' + response);
            
            uuid.html('<i class="fa-solid fa-circle-info" style="color: #4dff6a;"></i>图片UID：'+ withoutExt);
            // 重新初始化复制按钮
            
            new ClipboardJS('button.copy');
        },
        error: function (xhr, status, error) {
            alert('[ERR2]图片上传失败：' + error);
        }
    });
}

// 复制图片链接到剪贴板
function copyToClipboard() {
    var text = $('#imageLink').text().trim();
    
    if (text) {
        var clipboard = new ClipboardJS('button.copy', {
            text: function (trigger) {
                return text;
            }
        });
        clipboard.on('success', function (e) {
            alert('复制成功');
        });
        clipboard.on('error', function (e) {
            alert('复制失败' + e);
        });
    }
}