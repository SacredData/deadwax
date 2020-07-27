const nanoprocess = require('nanoprocess')

// spawn a comand
const rec = nanoprocess('rec', [
  'sideA.wav',
  'silence',
  '1',
  '0.1',
  '2%',
  '1',
  '0.1',
  '0.1%',
  ':',
  'newfile',
  ':',
  'restart'
])

// open process and query for stats
rec.open((err) => {
  rec.stat((err, stats) => {
    console.log(stats)
  })
})
