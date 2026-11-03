(function () {
  var root = document.documentElement;
  var buttons = document.querySelectorAll('[data-theme-choice]');
  var key = 'bts-theme-mode';

  function apply(mode) {
    root.dataset.theme = mode === 'system'
      ? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : mode;

    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.themeChoice === mode));
    });

    try {
      localStorage.setItem(key, mode);
    } catch (error) {}
  }

  var mode = 'dark';

  try {
    mode = localStorage.getItem(key) || 'dark';
  } catch (error) {}

  apply(mode);

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      apply(button.dataset.themeChoice);
    });
  });
})();
