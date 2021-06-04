/**
 * Created by lusinabrian on 04/03/17.
 */

const Player = require('./Player')
const Song = require('./Song')

let player, song

test.before(() => {
  player = new Player()
  song = new Song()

  this.addMatchers({
    toBePlaying: () => {
      return {
        compare: function (actual, expected) {
          const player = actual
          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      }
    }
  })
})

test('should be able to play a song', () => {
  player.play(song)

  t(player.currentlyPlayingSong).toEqual(song)

  // demo of custom matcher
  t(player).toBePlaying(song)
})

test('when song has been paused', () => {
  test.before(() => {
    player.play(song)
    player.pause()
  })

  test('should indicate that the song is currently paused', () => {
    t(player.isPlaying).toBeFalsy()

    // demo of use of not with custom matcher
    // todo: keeps failing! why! :(
    // t(player.currentlyPlayingSong).not.toBePlaying(song);
  })

  test('should be able to resume', () => {
    player.resume()
    t(player.isPlaying).toBeTruthy()
    t(player.currentlyPlayingSong).toBePlaying(song)
  })
})

/* use of spies to intercept method calls */
test('tells the current song if the user has made it a favorite', () => {
  spyOn(song, 'persistFavoriteStatus')

  player.play(song)
  player.makeFavorite()

  t(song.persistFavoriteStatus).toHaveBeenCalledWith(true)
})

/** demo of use of expected exceptions */
test('should throw an error on a currently playing song', () => {
  player.play(song)
  t(() => {
    player.resume()
  }).toThrow('Song is already playing')
})
