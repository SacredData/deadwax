const Discogs = require('disconnect').Client

const db = new Discogs().database()

db.getRelease(182213, function(err, data){
    console.log(data.tracklist)
})
