let inputNumber = parseInt(prompt("Enter input number:"));
let circleNumber = parseInt(prompt("Enter input number:")); 
class DustGrape {
  constructor(startX, startY, barHeight) {
    this.startX = startX;
    this.startY = startY;
    this.barHeight = barHeight;
    this.fillPercentage = 0; // fillPercentage를 클래스 속성으로 추가
  }

  DustSetUp(inputNumber) {
    if (inputNumber < 170) {
      return inputNumber / 2;
    } else {
      return 90;
    }
  }

  Dustdraw(value) {
    this.p.noStroke();
    this.p.background(255, 255, 255);
    this.p.fill(255);
    this.p.rect(12, 10, 25, 100, 30); // rect (x, y, w, h, [radius])
    // 채우기 퍼센트에 따라 채워질 높이 계산
    let filledHeight = (this.fillPercentage / 50) * this.barHeight;
    //console.log((this.fillPercentage / 50)*this.barHeight); // 200까지
    if (filledHeight < 21) {
      this.p.fill(0);
      this.p.text(`매우좋음`, 200, 400, 20);
      this.p.textSize(28);
      this.p.fill(0, 0, 255);
    } else if (filledHeight < 41) {
      this.p.fill(0);
      this.p.text(`좋음`, 225, 400, 20);
      this.p.textSize(28);
      this.p.fill(0, 255, 0);
    } else if (filledHeight < 61) {
      this.p.fill(0);
      this.p.text(`보통`, 225, 400, 20);
      this.p.textSize(28);
      this.p.fill("yellow");
    } else if (filledHeight < 81) {
      this.p.fill(0);
      this.p.text(`나쁨`, 225, 400, 20);
      this.p.textSize(28);
      this.p.fill("darkorange");
    } else {
      this.p.fill(0);
      this.p.text(`매우나쁨`, 200, 400, 20);
      this.p.textSize(28);
      this.p.fill("red");
    }
    this.p.rect(this.startX, this.startY - filledHeight, 25, filledHeight, 30);

    // 퍼센트 증가
    if (this.fillPercentage < value) {
      this.fillPercentage += 1; // 막대 증가 속도와 채워지는 값
    }
  }

  createDust(idNumber) {
    new p5((p) => {
      p.setup = () => {
        this.p = p; // p 객체를 클래스 속성에 할당
        p.createCanvas(50, 120).parent(document.getElementById(idNumber)); // 지정한 ID에 캔버스 추가
        this.DustSetUp(inputNumber);
      };

      p.draw = () => {
        this.Dustdraw(this.DustSetUp(inputNumber));
      };
    });
  }
}
let dust = new DustGrape(12, 110, 100);
dust.createDust("DustGrape");
class CircleGrape {
  constructor(centerX,centerY,radius,circleNumber) {
    this.centerX = centerX; // 원의 시작 x 좌표
    this.centerY = centerY; // 원의 시작 y 좌표
    this.radius = radius; // 반지름
    this.circleNumber = circleNumber;
    this.circlePercentage = 0; // 원을 채우는 퍼센트
    this.endAngle = 0; // 증가 속도
    this.targetAngle = Math.PI * 2; // 최대 증가값
    this.currentAngle = 0; // 현재 각도
    this.anglePercent = 0; // 현재 각도의 퍼센트 계산
    this.targetAngleSpeed = Math.PI / 50; // 원의 회전 속성
    this.fillPercentage = 0; // fillPercentage를 클래스 속성으로 추가
  }

  setupCircle() {
    this.anglePercent = 0; // 초기값 설정
     if (this.circleNumber >= 1) {
      this.targetAngle = Math.PI / 50; // 원하는 증가 속도로 설정
    } else {
      this.targetAngle = 0;
    }
    if (this.circleNumber < 101) {
      this.targetAngle = this.circleNumber * this.targetAngle;
    } else {
      this.circleNumber = 0;
    }
  }

  drawCircle() {
    this.s.background(255, 255, 255, 0);

    // 원의 회전 속도와 색상 변화 속도를 동시에 적용
    if (this.currentAngle < this.targetAngle) {
      this.currentAngle += this.targetAngleSpeed; // 원의 회전 속도
        this.anglePercent = (this.currentAngle / this.targetAngle) * 100; // 현재 각도의 퍼센트 계산
    }
    if (this.circleNumber <= 25) {
      this.s.fill("blue")
    } else if (this.circleNumber <= 50) {
      this.s.fill("orange")
    } else if (this.circleNumber <= 75) {
      this.s.fill("yellow")
    } else {
      this.s.fill("red")
    }
    this.s.beginShape();
    this.s.vertex(this.centerX, this.centerY);
    for (let i = 0; i < this.currentAngle; i += 0.01) {
      let x = this.centerX + this.radius * Math.cos(i);
      let y = this.centerY + this.radius * Math.sin(i);
      this.s.vertex(x, y);
      this.s.noStroke();
    }
    this.s.endShape(this.s.CLOSE);

    this.s.fill(255);
    this.s.arc(this.centerX, this.centerY, 40, 40, 0, Math.PI * 2);
    // 텍스트 표시
    this.s.fill(0);
    this.s.text(`수치:${Math.floor(this.anglePercent)}%`, 198, 235, 20);
    this.s.textSize(24);
  }
  createCircle(idNumber) {
    new p5((s) => {
      s.setup = () => {
        this.s = s; // s 객체를 클래스 속성에 할당
        s.createCanvas(100, 100).parent(document.getElementById(idNumber)); // 지정한 ID에 캔버스 추가
        this.setupCircle();
      };

      s.draw = () => {
        this.drawCircle();
      };
    });
  }
}

const circle = new CircleGrape(50,50,25,circleNumber);
circle.createCircle("livingIndex1Area");
const circle2 = new CircleGrape(50,50,25,circleNumber);
circle2.createCircle("livingIndex2Area");
const circle3 = new CircleGrape(50,50,25,circleNumber);
circle3.createCircle("livingIndex3Area");
