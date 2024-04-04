document.getElementById('submit').addEventListener('click', () => {
    // Get input values
    const baseSpeed = Number(document.getElementById('character').value);
    const flatSpeed = Number(document.getElementById('flatSpeed').value);
    const percentSpeed = Number(document.getElementById('percentSpeed').value) / 100;
    const totalCycles = Number(document.getElementById('cycles').value);
    const buffCycle = Number(document.getElementById('buffCycle').value);
    const speedBuff = Number(document.getElementById('speedBuff').value) / 100;
    const flatSpeedBuff = Number(document.getElementById('flatSpeedBuff').value);
    const buffEndCycle = Number(document.getElementById('buffEndCycle').value);
    const advanceForward = Number(document.getElementById('advanceForward').value) / 100;
  
    // Calculate speed and action value
    let totalSpeed = baseSpeed * (1 + percentSpeed) + flatSpeed;
    let actionValue = 10000 / totalSpeed;
  
    // Initialize result string
    let result = `Total Speed: ${totalSpeed}<br>`;
    result += `Action Value: ${actionValue}<br>`;
  
    // Calculate actions for each cycle
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
  
      // If there are 2 or more actions, consider one as a base action and the rest as bonus actions
      if (baseActions >= 2) {
        bonusActions += baseActions - 1;
        baseActions = 1;
      }
  
      let totalActionsCycle = baseActions + bonusActions;
      result += `Cycle ${i}: ${totalActionsCycle} actions (including ${bonusActions} bonus actions)<br>`;
  
      // Inputting speed buff or advance forward
      if (i === buffCycle && (speedBuff > 0 || flatSpeedBuff > 0 || advanceForward > 0)) {
        totalSpeed *= (1 + speedBuff);
        totalSpeed += flatSpeedBuff;
        actionValue = (10000 / totalSpeed) - (10000 * Math.min(advanceForward, 1) / totalSpeed);
        result += `Buff applied. New Speed: ${totalSpeed}, New Action Value: ${actionValue}<br>`;
      }
  
      // End of the buff cycle
      if (i === buffEndCycle) {
        totalSpeed = baseSpeed * (1 + percentSpeed) + flatSpeed;
        actionValue = 10000 / totalSpeed;
      }
    }
  
    // Display result
    document.getElementById('result').innerHTML = result;
  });
  