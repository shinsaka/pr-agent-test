const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('何か入力してください: ', (answer) => {
  if (answer.toLowerCase() === 'dog') {
    console.log('ワンワン！');
  } else {
    console.log(`"${answer}" ですね。犬の鳴き声ではありません。`);
  }

  rl.close();
});

