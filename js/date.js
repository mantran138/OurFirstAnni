var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
    // Đặt thời gian bắt đầu là 1/11/2024, 10:30 PM
    var start = new Date(2024, 10, 1, 22, 30);  // Lưu ý tháng là 0-indexed (10 là tháng 11)

    // Lấy thời gian hiện tại và cộng thêm thời gian chênh lệch (21 giờ 24 phút 10 giây)
    var now = new Date();
    var offset = (21 * 60 * 60 * 1000) + (31 * 60 * 1000) - (58 * 1000);  // 21h 24m 10s (tính ra mili giây)
    now = new Date(now.getTime() + offset);  // Cộng thêm offset vào thời gian hiện tại

    // Tính khoảng cách thời gian giữa start và now
    var t = now - start;

    // Tính số ngày
    var d = Math.floor(t / (1000 * 60 * 60 * 24));  // Số ngày

    // Tính số giờ
    var h = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  // Số giờ
    if(h < 10) {
        h = "0" + h;  // Thêm số 0 nếu giờ < 10
    }

    // Tính số phút
    var m = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));  // Số phút
    if(m < 10) {
        m = "0" + m;  // Thêm số 0 nếu phút < 10
    }

    // Tính số giây
    var s = Math.floor((t % (1000 * 60)) / 1000);  // Số giây
    if(s < 10) {
        s = "0" + s;  // Thêm số 0 nếu giây < 10
    }

    // Cập nhật các phần tử trên trang
    document.getElementById("d").innerHTML = d;
    document.getElementById("h").innerHTML = h;
    document.getElementById("m").innerHTML = m;
    document.getElementById("s").innerHTML = s;
}

// Hàm fadein để tăng dần độ sáng của trang
function fadein() {
    if (val < 1) {
        val += 0.025;
        dv.style.opacity = val;
    }
    else {
        clearInterval(fadeinInterval);
        if (ok == 2) {
            ok += 1;
        }
    }
}

var fadeInterval;
var fadeinInterval;

// Gọi hàm tính thời gian ngay khi trang được tải
timer();

// Cập nhật thời gian mỗi giây
setInterval(timer, 1000);

// Chạy hiệu ứng fadein sau khi hoàn tất fadeInterval
fadeInterval = setInterval(function () {
    if (ok == 2) {
        clearInterval(fadeInterval);
        fadeinInterval = setInterval(fadein, 50);
    }
}, 50);
