const input = document.getElementById('fileInput');
const output = document.getElementById('selectedFile');
input.addEventListener('change', function () {
    const files = this.files;
    if (files.length > 0) {
        output.innerHTML = `<i class="fa-solid fa-file-import" style="color: #000000;"></i> ${files[0].name}`;
    } else {
        output.innerText = '';
    }
});