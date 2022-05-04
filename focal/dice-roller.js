function rollDice(times) {
  const result = [];
  for (let i = 0; i < times; i++) {
    let randomInt = Math.floor(Math.random() * 6) + 1
    result.push(randomInt)
  }
  console.log(`Rolled ${times} dice: ${result.join(', ')}`);
}
rollDice(3);