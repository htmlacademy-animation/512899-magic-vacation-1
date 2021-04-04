export default () => {
  const BODY = document.querySelector('body');
  const LOAD = 'load';
  window.addEventListener('load', function () {
    BODY.classList.add(LOAD);
  });
};
