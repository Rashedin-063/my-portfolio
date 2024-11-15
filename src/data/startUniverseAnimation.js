/* eslint-disable @typescript-eslint/no-unused-vars */
// public/universeAnimation.js

export function startUniverseAnimation() {
  window.requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;

  let starDensity = 0.216;
  let speedCoeff = 0.05;
  let width, height, starCount, circleRadius, circleCenter;
  let first = true;
  let giantColor = '180,184,240';
  let starColor = '226,225,142';
  let cometColor = '226,225,224';
  const canva = document.getElementById('universe');
  const stars = [];

  function createUniverse() {
    const universe = canva.getContext('2d');
    for (let i = 0; i < starCount; i++) {
      stars[i] = new Star();
      stars[i].reset();
    }
    draw();
  }

  function draw() {
    const universe = canva.getContext('2d');
    universe.clearRect(0, 0, width, height);

    for (let i = 0; i < stars.length; i++) {
      const star = stars[i];
      star.move();
      star.fadeIn();
      star.fadeOut();
      star.draw();
    }

    window.requestAnimationFrame(draw);
  }

  function Star() {
    this.reset = function () {
      this.giant = getProbability(3);
      this.comet = this.giant || first ? false : getProbability(10);
      this.x = getRandInterval(0, width - 10);
      this.y = getRandInterval(0, height);
      this.r = getRandInterval(1.1, 2.6);
      this.dx =
        getRandInterval(speedCoeff, 6 * speedCoeff) +
        (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120) +
        speedCoeff * 2;
      this.dy =
        -getRandInterval(speedCoeff, 6 * speedCoeff) -
        (this.comet + 1 - 1) * speedCoeff * getRandInterval(50, 120);
      this.fadingOut = null;
      this.fadingIn = true;
      this.opacity = 0;
      this.opacityTresh = getRandInterval(0.2, 1 - (this.comet + 1 - 1) * 0.4);
      this.do = getRandInterval(0.0005, 0.002) + (this.comet + 1 - 1) * 0.001;
    };

    this.fadeIn = function () {
      if (this.fadingIn) {
        this.fadingIn = this.opacity > this.opacityTresh ? false : true;
        this.opacity += this.do;
      }
    };

    this.fadeOut = function () {
      if (this.fadingOut) {
        this.fadingOut = this.opacity < 0 ? false : true;
        this.opacity -= this.do / 2;
        if (this.x > width || this.y < 0) {
          this.fadingOut = false;
          this.reset();
        }
      }
    };

    this.draw = function () {
      const universe = canva.getContext('2d');
      universe.beginPath();

      if (this.giant) {
        universe.fillStyle = `rgba(${giantColor},${this.opacity})`;
        universe.arc(this.x, this.y, 2, 0, 2 * Math.PI, false);
      } else if (this.comet) {
        universe.fillStyle = `rgba(${cometColor},${this.opacity})`;
        universe.arc(this.x, this.y, 1.5, 0, 2 * Math.PI, false);

        for (let i = 0; i < 30; i++) {
          universe.fillStyle = `rgba(${cometColor},${
            this.opacity - (this.opacity / 20) * i
          })`;
          universe.rect(
            this.x - (this.dx / 4) * i,
            this.y - (this.dy / 4) * i - 2,
            2,
            2
          );
          universe.fill();
        }
      } else {
        universe.fillStyle = `rgba(${starColor},${this.opacity})`;
        universe.rect(this.x, this.y, this.r, this.r);
      }

      universe.closePath();
      universe.fill();
    };

    this.move = function () {
      this.x += this.dx;
      this.y += this.dy;
      if (this.fadingOut === false) {
        this.reset();
      }
      if (this.x > width - width / 4 || this.y < 0) {
        this.fadingOut = true;
      }
    };

    (function () {
      setTimeout(function () {
        first = false;
      }, 50);
    })();
  }

  function getProbability(percents) {
    return Math.floor(Math.random() * 1000) + 1 < percents * 10;
  }

  function getRandInterval(min, max) {
    return Math.random() * (max - min) + min;
  }

  function windowResizeHandler() {
    width = window.innerWidth;
    height = window.innerHeight;
    starCount = width * starDensity;
    circleRadius = width > height ? height / 2 : width / 2;
    circleCenter = { x: width / 2, y: height / 2 };

    canva.setAttribute('width', width);
    canva.setAttribute('height', height);
  }

  windowResizeHandler();
  window.addEventListener('resize', windowResizeHandler, false);
  createUniverse();
}
