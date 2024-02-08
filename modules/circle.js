const duration = 1500;
const distance = 500;

const circle = document.querySelector('.circle');
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const startAnimation = (duration, callback) => {
  let startAnimation = NaN;

  requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;

    const proress = (timestamp - startAnimation) / duration;

    callback(proress);

    if (proress < 1) {
      requestAnimationFrame(step);
    }
  });
};

start.addEventListener('click', () => {
  startAnimation(duration, (progress) => {
    const left = progress * distance;
    circle.style.transform = `translateX(${left}px)`;
  });
});
