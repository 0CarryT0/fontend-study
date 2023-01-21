// 设置画布
const para = document.querySelector('p');
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// 生成随机数的函数

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

// 生成随机颜色值的函数

function randomColor() {
    const color = 'rgb(' +
        random(0, 255) + ',' +
        random(0, 255) + ',' +
        random(0, 255) + ')';
    return color;
}

// 定义 Shape 构造器

function Shape(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
}

// 定义 Ball 构造器继承Shape

function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY);
    this.exists = exists;
    this.color = color;
    this.size = size;
}
Ball.prototype = Object.create(Shape.prototype);
Ball.prototype.constructor = Ball;

// 定义彩球绘制函数

Ball.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
};

// 定义彩球更新函数

Ball.prototype.update = function () {
    if ((this.x + this.size) >= width) {
        this.velX = -(this.velX);
    }

    if ((this.x - this.size) <= 0) {
        this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height) {
        this.velY = -(this.velY);
    }

    if ((this.y - this.size) <= 0) {
        this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
};

// 定义碰撞检测函数

Ball.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if ((this !== balls[j]) && (balls[j].exists)) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                balls[j].color = this.color = randomColor();
            }
        }
    }
};

// 定义 EvilCircle 构造器
function EvilCircle(x, y) {
    Shape.call(this, x, y, 20, 20);
    this.color = 'white';
    this.size = 10;
}

EvilCircle.prototype = Object.create(Shape.prototype);
EvilCircle.prototype.constructor = EvilCircle;

// 定义 EvilCircle 绘制
EvilCircle.prototype.draw = function () {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 3;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
};

// 定义 边缘检测
EvilCircle.prototype.checkBounds = function () {
    if ((this.x + this.size) >= width) {
        this.x -= this.size;
    }

    if ((this.x - this.size) <= 0) {
        this.x += this.size;
    }

    if ((this.y + this.size) >= height) {
        this.y -= this.size;
    }

    if ((this.y - this.size) <= 0) {
        this.y += this.size;
    }
};

// 定义 控制方法
EvilCircle.prototype.setControl = function () {
    window.onkeydown = e => {
        switch (e.key) {
            case 'a':
                this.x -= this.velX;
                break;
            case 'd':
                this.x += this.velX;
                break;
            case 'w':
                this.y -= this.velY;
                break;
            case 's':
                this.y += this.velY;
                break;
        }
    };
};

// 定义 恶魔环 碰撞检测
let count = 0;
EvilCircle.prototype.collisionDetect = function () {
    for (let j = 0; j < balls.length; j++) {
        if (balls[j].exists) {
            const dx = this.x - balls[j].x;
            const dy = this.y - balls[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < this.size + balls[j].size) {
                --count;
                balls[j].exists = false;
                para.textContent = '剩余彩球数：' + count;
            }
        }
    }
};
// 定义一个数组，生成并保存所有的球
let balls = [];

while (balls.length < 25) {
    const size = random(10, 20);
    let ball = new Ball(
        // 为避免绘制错误，球至少离画布边缘球本身一倍宽度的距离
        random(0 + size, width - size),
        random(0 + size, height - size),
        random(-7, 7),
        random(-7, 7),
        true,
        randomColor(),
        size
    );
    ++count;
    balls.push(ball);
    para.textContent = '剩余彩球数：' + count;
}

// 创建恶魔环
let Circle = new EvilCircle(
    random(10, width - 10),
    random(10, height - 10),
)

// 定义一个循环来不停地播放
Circle.setControl();
function loop() {
    ctx.fillStyle = 'rgba(0,0,0,0.25)';
    ctx.fillRect(0, 0, width, height);
    Circle.draw();
    Circle.checkBounds();
    Circle.collisionDetect();
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw();
            balls[i].update();
            balls[i].collisionDetect();
        }
    }

    requestAnimationFrame(loop);
}

loop();