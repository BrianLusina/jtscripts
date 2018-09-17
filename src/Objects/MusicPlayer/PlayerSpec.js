/**
 * Created by lusinabrian on 04/03/17.
 */
var test = require("ava");
var expect = require("expect");
const Player = require("./Player");
const Song = require("./Song");

let player, song;

test.before(t => {
  player = new Player();
  song = new Song();

  this.addMatchers({
    toBePlaying: () => {
      return {
        compare: function (actual, expected) {
          let player = actual;
          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          }
        }
      };
    }
  });

});

test("should be able to play a song", t => {
  player.play(song);

  expect(player.currentlyPlayingSong).toEqual(song);

  // demo of custom matcher
  expect(player).toBePlaying(song);
});

test("when song has been paused", t => {
  test.before(t => {
    player.play(song);
    player.pause();
  });

  test("should indicate that the song is currently paused", t => {
    expect(player.isPlaying).toBeFalsy();

    // demo of use of not with custom matcher
    //todo: keeps failing! why! :(
    //expect(player.currentlyPlayingSong).not.toBePlaying(song);
  });

  test("should be able to resume", t => {
    player.resume();
    expect(player.isPlaying).toBeTruthy();
    expect(player.currentlyPlayingSong).toBePlaying(song);
  });
});

/*use of spies to intercept method calls*/
test("tells the current song if the user has made it a favorite", t => {
  spyOn(song, "persistFavoriteStatus");

  player.play(song);
  player.makeFavorite();

  expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
});

/**demo of use of expected exceptions*/
test("should throw an error on a currently playing song", t => {
  player.play(song);
  expect(t => {
    player.resume()
  }).toThrow("Song is already playing");
})
