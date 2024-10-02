setInterval(next, 8000);
setInterval(next_pro, 8000);

var kk = 0;

function moveBanner_r() {

    if (kk != 200) {
      kk = kk + 100;
      document.querySelector(".area").style.left = "-" + kk + "%";
    } else {
  
      kk = 0;
      document.querySelector(".area").style.left = "0px";
    }
  
  
}

function moveBanner_l() {
  
  
  
    if (kk != 0) {
      kk = kk - 100;
      document.querySelector(".area").style.left = "-" + kk + "%";
    } else {
    
      kk = 200;
      document.querySelector(".area").style.left = "-200%";
    }
    
    
}

function next() {
  
    if (kk != 200) {
      kk = kk + 100;
      document.querySelector(".area").style.left = "-" + kk + "%";
    } else {
  
      kk = 0;
      document.querySelector(".area").style.left = "0px";
    }
  
  
}

var pro_h = 0;

function nextpro() {

  if (pro_h != 100) {
    pro_h = pro_h + 20;
    document.querySelector(".area-items").style.left = "-" + pro_h + "%";
                
  } else {

    pro_h = 0;
    document.querySelector(".area-items").style.left = "0px";
  }


}

function previouspro() {

  if (pro_h != 0) {
    pro_h = pro_h - 20;
    document.querySelector(".area-items").style.left = "-" + pro_h + "%";
                
  } else {

    pro_h = 100;
    document.querySelector(".area-items").style.left = "-100%";
  }


}



function next_pro() {
  
    if (pro_h  != 100) {
      pro_h  = pro_h  + 20;
      document.querySelector(".area-items").style.left = "-" + pro_h  + "%";
    } else {
  
      pro_h  = 0;
      document.querySelector(".area-items").style.left = "0px";
    }
}

document.addEventListener('scroll', function() {
  const scrollLink = document.getElementById('scroll-link');
  const topElement = document.getElementById('top');

  // เช็คว่าตำแหน่งของ #top อยู่นอกจอหรือไม่
  const rect = topElement.getBoundingClientRect();
  if (rect.bottom < 0) {
      scrollLink.classList.add('show'); // แสดงปุ่มเมื่อ #top ไม่เห็นในจอ
  } else {
      scrollLink.classList.remove('show'); // ซ่อนปุ่มเมื่อ #top เห็นในจอ
  }
});

// เลื่อนหน้าไปยังตำแหน่งที่กำหนด
document.getElementById('scroll-link').addEventListener('click', function(e) {
  e.preventDefault(); // ป้องกันการเปลี่ยนเส้นทางตามปกติ
  const topElement = document.getElementById('top');
  
  // ใช้ scrollIntoView เพื่อเลื่อนหน้าไปยัง #top
  topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
});


// เรียกใช้เมื่อมีการคลิกที่รูปภาพใน .promotion
const promotionImages = document.querySelectorAll('.promotion img');
const popUp = document.getElementById('pop-img-pro');
const popImg = document.getElementById('img-pro-pop');
const closePopup = document.getElementById('close-popup-x');

// ฟังก์ชันเพื่อแสดง pop-up
promotionImages.forEach(image => {
    image.addEventListener('click', function() {
        popImg.src = this.src; // ตั้งค่า src ของรูปใน pop-up
        popUp.style.display = 'flex'; // แสดง pop-up
    });
});

// ฟังก์ชันเพื่อปิด pop-up
closePopup.addEventListener('click', function() {
    popUp.style.display = 'none'; // ซ่อน pop-up
});

// ฟังก์ชันเพื่อปิด pop-up เมื่อคลิกนอกพื้นที่รูปภาพ
popUp.addEventListener('click', function(e) {
    if (e.target === popUp) {
        popUp.style.display = 'none'; // ซ่อน pop-up
    }
});
