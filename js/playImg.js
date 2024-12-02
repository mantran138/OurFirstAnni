var btn = document.getElementById("heartTxt");
btn.style.opacity = 0;
var btnVal = 0;
var t = 0; // Kiểm soát trạng thái bấm
var showImageInterval; // Bộ đếm tự động
var imageIndex = 0;

var audio = document.querySelector("audio"); // Lấy phần tử audio

function play() {
    if (t == 0) {
        myImage.setAttribute("src", "");
        myTxt.innerHTML = "";
        imageIndex = 0;
        clearInterval(showImageInterval);
        
        // Nếu nhạc chưa được phát, thì bắt đầu phát nhạc và điều chỉnh âm lượng xuống 50%
        if (audio.paused) {
            audio.volume = 0.1; // Điều chỉnh âm lượng xuống 50%
            audio.play();
        }
    }
    flag = 1 - flag;

    // Chuyển sang giao diện ảnh khi trái tim được bấm
    if (t == 1) {
        document.getElementById("typeDiv").style.opacity = 0; // Ẩn dòng chữ chào
        document.getElementById("imgTxt").style.opacity = 1; // Hiện khu vực ảnh và thông điệp
        document.getElementById("navButtons").style.display = "block"; // Hiện nút điều hướng
        nextImage(); // Hiển thị ảnh đầu tiên
    }

    t++;
}

function nextImage() {
    // Tạo hiệu ứng fade out cho ảnh hiện tại
    myImage.style.opacity = 0;

    // Đợi khi ảnh fade out xong, thay đổi ảnh và fade in
    setTimeout(function() {
        myImage.setAttribute("src", imageArray[imageIndex]);
        myTxt.innerHTML = txtArray[imageIndex];
        
        // Tạo hiệu ứng fade in cho ảnh mới
        myImage.style.opacity = 1;
        imageIndex++;
        if (imageIndex >= len) {
            imageIndex = 0;
        }
    }, 1000); // Thời gian chờ fade out (1s)
}

function prevImage() {
    // Tạo hiệu ứng fade out cho ảnh hiện tại
    myImage.style.opacity = 0;

    // Đợi khi ảnh fade out xong, thay đổi ảnh và fade in
    setTimeout(function() {
        imageIndex--;
        if (imageIndex < 0) {
            imageIndex = len - 1;
        }
        myImage.setAttribute("src", imageArray[imageIndex]);
        myTxt.innerHTML = txtArray[imageIndex];

        // Tạo hiệu ứng fade in cho ảnh mới
        myImage.style.opacity = 1;
    }, 1000); // Thời gian chờ fade out (1s)
}


function preshowImage() {
    myImage.setAttribute("src", imageArray[imageIndex]);
    myTxt.innerHTML = txtArray[imageIndex];
    imageIndex++;
    if (imageIndex >= len) {
        imageIndex = 0;
    }
}

function buttonFadeIn() {
    if (btnVal < 1) {
        btnVal += 0.025;
        btn.style.opacity = btnVal;
    } else {
        clearInterval(buttonInterval);
    }
}

function showHeart() {
    buttonInterval = setInterval(buttonFadeIn, 50); // Hiện trái tim từ từ
}

setTimeout(showHeart, 3000); // Hiện trái tim sau 3 giây
