/**
 * Created by lusinabrian on 04/03/17.
 */
class Player{
  constructor(){
    this.currentlyPlayingSong = undefined;
    this.isPlaying = false;
  }

  /**
   * Plays a song. sets the currently playing song in constructor to the currently playing song
   * sets the isPlaying variable to True
   * @param{Object} song, a song object
   * */
  play(song){
    this.currentlyPlayingSong = song;
    this.isPlaying = true;
  }

  /**
   * Sets the isPlaying variable to false to indicate that the song is not being played*/
  pause(){
    this.isPlaying = false;
    this.currentlyPlayingSong = undefined;
  }

  /**
   * Resumes playing a song, checks if the song is currently playing, throws an error if it is,
   * else sets the song to currently playing*/
  resume(){
    if(this.isPlaying){
      throw new Error("Song is already playing");
    }
    this.isPlaying = true;
  }

  /**
   * Makes a currently playing song to be a favorite*/
  makeFavorite(){
    this.currentlyPlayingSong.persistFavoriteStatus(true);
  }
}


module.exports = Player;
