(function () {
  var slider = document.getElementById('temp');

  if (slider) {
    var output = document.getElementById('temp-value');
    var feedback = document.getElementById('temp-feedback');

    function updateTemperature() {
      var value = Number(slider.value);
      output.textContent = value.toFixed(1) + '°C';

      if (value < 36.5) {
        feedback.textContent = 'Below the set point: responses such as shivering can increase heat production.';
      } else if (value > 37.5) {
        feedback.textContent = 'Above the set point: responses such as sweating can increase heat loss.';
      } else {
        feedback.textContent = 'Near the set point: heat gain and heat loss are broadly balanced.';
      }
    }

    slider.addEventListener('input', updateTemperature);
    updateTemperature();
  }

  document.querySelectorAll('[data-answer]').forEach(function (button) {
    button.addEventListener('click', function () {
      var target = document.getElementById('osmosis-answer');

      if (button.dataset.answer === 'out') {
        target.textContent = 'That is the expected net movement: water moves toward the side with the higher solute concentration. In this model, water leaves the cell.';
      } else {
        target.textContent = 'Have another think: water tends to move toward the side with the higher solute concentration. Which direction would that be here?';
      }
    });
  });

  document.querySelectorAll('[data-case]').forEach(function (button) {
    button.addEventListener('click', function () {
      var messages = {
        story: 'Good starting point. Listen to how the person describes the fatigue and what matters most to them.',
        context: 'Useful context can change how you interpret a symptom. Ask about timing, changes, daily life and relevant background.',
        evidence: 'Evidence helps test possibilities, but it needs to be interpreted alongside the person’s story and context.'
      };

      document.getElementById('case-answer').textContent = messages[button.dataset.case];
    });
  });
})();
