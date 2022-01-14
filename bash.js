//Output a prompt
process.stdout.write('prompt > ');

//The STDin string 'data' event fires after the user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); // remove the new line
  if (cmd === 'pwd') {
    process.stdout.write(__dirname);
  }
  // process.stdout.write('you typed: ' + cmd);
  process.stdout.write('\nprompt > ');
})

