const duration = 5000;
const distance = 800;
let requestId = NaN;

const circle = document.querySelector('.circle');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const startAnimation = (duration, callback) => {
  let startAnimation = NaN;

  requestId = requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;

    const proress = (timestamp - startAnimation) / duration;

    callback(proress);

    if (proress < 1) {
      requestId = requestAnimationFrame(step);
    }
  });
};

start.addEventListener('click', () => {
  startAnimation(duration, (progress) => {
    const left = progress * distance;
    circle.style.transform = `translateX(${left}px)`;
  });
});

stop.addEventListener('click', () => {
  cancelAnimationFrame(requestId);
});
