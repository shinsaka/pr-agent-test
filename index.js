const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('何か入力してください: ', (answer) => {
  const lowerCaseAnswer = answer.toLowerCase();
  if (lowerCaseAnswer === 'dog') {
    console.log('ワンワン！');
  } else if (lowerCaseAnswer === 'cat') {
    console.log('ニャー！');
  } else {
    console.log(`"${answer}" ですね。犬や猫の鳴き声ではありません。`);
  }

  rl.close();
});

