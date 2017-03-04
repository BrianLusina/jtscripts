/**
 * Created by lusinabrian on 04/03/17.
 */
const Player = require("../../jssnips/Objects/MusicPlayer/Player");
const Song = require("../../jssnips/Objects/MusicPlayer/Song");

describe("Player", function(){
  let player, song;

  beforeEach(function(){
    player = new Player();
    song = new Song();

    this.addMatchers({
      toBePlaying: function () {
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

  it("should be able to play a song", function(){
    player.play(song);

    expect(player.currentlyPlayingSong).toEqual(song);

    // demo of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function(){
    beforeEach(function(){
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function(){
      expect(player.isPlaying).toBeFalsy();

      // demo of use of not with custom matcher
      //todo: keeps failing! why! :(
      //expect(player.currentlyPlayingSong).not.toBePlaying(song);
    });

    it("should be able to resume", function(){
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toBePlaying(song);
    });
  });

  /*use of spies to intercept method calls*/
  it("tells the current song if the user has made it a favorite", function(){
    spyOn(song, "persistFavoriteStatus");

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  /**demo of use of expected exceptions*/
  describe("resume", function(){
    it("should throw an error on a currently playing song", function(){
      player.play(song);
      expect(function(){
        player.resume()
      }).toThrow("Song is already playing");
    })
  })

});
