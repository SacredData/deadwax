const Process = require('nanoprocess')
const Resource = require('nanoresource')
const { Track } = require('baptism')


class Side extends Resource {
  constructor(opts={}) {
    super()
    if (opts.number) {
      this.number = Number(opts.number)
    }
  }

  record(cb) {
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

      rec.process.on('close', code => {
        console.log('Exited with code', code)
        this.filename = path.resolve(`./side1001.wav`) // this is worng
        this.inactive(cb, null, this.filename)
      })
    })
  }

  toTracks() {
    // TODO split this.filename into individual audio files, return array of new
    // Track objects

    return new Track(this.filename)
  }
}

module.exports = Side
