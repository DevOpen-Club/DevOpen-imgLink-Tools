var overlay = document.getElementById("overlay");
var captchaImg = document.getElementById("captcha-img");
var captchaInput = document.getElementById("captcha-input");
var confirmBtn = document.getElementById("confirm-btn");

function showOverlay() {
    // 显示遮罩层和弹出窗口
    overlay.style.display = "block";

    // 生成6位随机验证码
    var captcha = generateCaptcha(6);
    
    function generateCaptcha(length) {
        // 定义一个包含数字和字母的字符集
        var charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var result = '';
        for (var i = 0; i < length; i++) {
            // 从字符集中随机选取一个字符
            result += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return result;
    }
    
    captchaImg.src = "https://dummyimage.com/200x80/000/fff&text=" + captcha;

    confirmBtn.onclick = function () {
        if (captchaInput.value == captcha) {
            // 验证码正确，执行上传操作
            uploadFile();
            // 隐藏遮罩层和弹出窗口
            overlay.style.display = "none";
        } else {
            // 验证码错误，提示用户重新输入
            alert("呀呼，似乎验证码不对呀~你到底是不是真人呢？");
            overlay.style.display = "none";
        }
    };
}
