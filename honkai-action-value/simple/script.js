document.getElementById('submit').addEventListener('click', () => {
  // Extracting input value
  const baseSpeed = Number(document.getElementById('character').value);
  const flatSpeed = Number(document.getElementById('flatSpeed').value);
  const percentSpeed = Number(document.getElementById('percentSpeed').value) / 100;
  const totalCycles = Number(document.getElementById('cycles').value);

  // Calculating speed/action value
  let totalSpeed = baseSpeed * (1 + percentSpeed) + flatSpeed;
  let actionValue = 10000 / totalSpeed;

  // Initializing
  let result = `Total Speed: ${totalSpeed}<br>`;
  result += `Action Value: ${actionValue}<br>`;

  // Calculating AV per cycle
  let remainder = 0;
  for (let i = 0; i <= totalCycles; i++) {
    let cycleValue = (i === 0) ? 150 : 100;
    let rawActions = cycleValue / actionValue;
    let baseActions = Math.floor(rawActions);
    remainder += rawActions - baseActions;

    let bonusActions = 0;
    if (remainder >= 1) {
      bonusActions = Math.floor(remainder);
      remainder -= bonusActions;
    }

    // If there is more than 1 action, consider it bonus
    if (baseActions >= 2) {
      bonusActions += baseActions - 1;
      baseActions = 1;
    }

    let totalActionsCycle = baseActions + bonusActions;
    result += `Cycle ${i}: ${totalActionsCycle} actions (including ${bonusActions} bonus actions)<br>`;
  }

  document.getElementById('result').innerHTML = result;
});

let inputs = document.querySelectorAll('input');

// Add event listeners to each input field
inputs.forEach(input => {
  // Get the sibling label of the input
  let label = input.previousElementSibling;

  // Add 'focused' class when the input field is focused
  input.addEventListener('focus', function() {
    label.classList.add('focused');
  });

  // Remove 'focused' class when the input field loses focus, unless it has content
  input.addEventListener('blur', function() {
    if (this.value === '') {
      label.classList.remove('focused');
    }
  });

  // Add 'focused' class if the input field has content when the page loads
  if (input.value !== '') {
    label.classList.add('focused');
  }
});