// user's name
var userName = 'Heli';

// saying hello to the user
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// user's question
var userQuestion = 'Will I become a werewolf tonight?';

// what user asked
console.log(`The user asked: ${userQuestion}`)

// generating random number between 0 and 7
const randomNumber = Math.floor(Math.random() * 8); 

// eight ball
let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  }

console.log(`The eight ball answered: ${eightBall}`);