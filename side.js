const Process = require('nanoprocess')
const Resource = require('nanoresource')


class Side extends Resource {
  constructor(opts={}) {
    super()
    if (opts.number) {
      this.number = Number(opts.number)
    }
  }

  record() {
    // spawn a comand
    const rec = Process('rec', [
      `side${this.number}.wav`,
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
      rec.process.on('stdout', stdout => console.log(stdout))
      rec.process.on('stderr', stderr => console.log(stderr))
    })
  }
}

module.exports = Side
