document.getElementById('submit').addEventListener('click', () => {
    // Get input values
    const baseSpeed = Number(document.getElementById('character').value);
    const flatSpeed = Number(document.getElementById('flatSpeed').value);
    const percentSpeed = Number(document.getElementById('percentSpeed').value) / 100;
    const totalCycles = Number(document.getElementById('cycles').value);
  
    // Calculate speed and action value
    const totalSpeed = baseSpeed * (1 - percentSpeed) + flatSpeed;
    const actionValue = 10000 / totalSpeed;
  
    // Initialize result string
    let result = `Total Speed: ${totalSpeed}<br>`;
    result += `Action Value: ${actionValue}<br>`;
  
    // Calculate total action value and total actions
    const totalActionValue = 150 + (totalCycles * 100);
    const totalActions = Math.floor(totalActionValue / actionValue);
    result += `Total Actions: ${totalActions}<br>`;
  
    // Calculate actions for each cycle
    let remainder = 0;
    let totalActionsCycle = 0;
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
  
      // If there are 2 or more actions, consider one as a base action and the rest as bonus actions
      if (baseActions >= 2) {
        bonusActions += baseActions - 1;
        baseActions = 1;
      }
  
      totalActionsCycle = baseActions + bonusActions;
      result += `Cycle ${i}: ${totalActionsCycle} actions (including ${bonusActions} bonus actions)<br>`;
    }
  
    // Display result
    document.getElementById('result').innerHTML = result;
  });
  