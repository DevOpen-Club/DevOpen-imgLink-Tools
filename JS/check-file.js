function checkFile(event) {
    // 获取选中的文件
    var file = event.target.files[0];

    if (!file) {
        // 用户没有选择任何文件，不执行校验操作
        return true;
    }

    // 检查文件类型是否符合要求
    var allowedTypes = ['image/jpeg', 'image/png', 'image/bmp', 'image/webp', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
        alert('选择的文件类型错误！');
        // 清除已选择的文件，避免上传错误文件
        event.target.value = '';
        return false;
    }

    // 文件符合要求，继续执行上传操作
    return true;
}