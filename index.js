const Side = require('./side')
const { Album, Asset, Master, Release, Track, Vinyl } = require('baptism')

class Project {
  constructor(opts={}) {
    if (opts.discogsId) {
      this.discogsId = opts.discogsId
    }
    if (opts.vinyl && opts.vinyl instanceof Vinyl) {
      this.vinyl = opts.vinyl
    }
  }
}

class Recording extends Project {
  constructor(project, opts={}) {
    super()
    if (project && project instanceof Project) {
      this.project = project
    }
  }
}

/*
class Editing extends Recording {

}

class Mastering extends Editing {

}
*/

module.exports = { Project, Recording }
