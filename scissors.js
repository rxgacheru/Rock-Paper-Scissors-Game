function play(userChoice) {
  const computerOptions = ['rock', 'paper', 'scissors'];
  const computerChoice = computerOptions[Math.floor(Math.random() * 3)];

    let result;
      if (userChoice === computerChoice) {
          result = "It's a tie!";
      } else if (
          (userChoice === 'rock' && computerChoice === 'scissors') ||
          (userChoice === 'paper' && computerChoice === 'rock') ||
          (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
          result = 'You win!';
      } else {
          result = 'Computer wins!';
      }

      alert(`You chose ${userChoice}. Computer chose ${computerChoice}. ${result}`);
 }