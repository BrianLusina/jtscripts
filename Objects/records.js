/*
You are given a JSON object representing (a small part of) your record collection. Each album is identified by a unique id number and has several properties. Not all albums have complete information.

Write a function which takes an id, a property (prop), and a value.

For the given id in collection:

If value is non-blank (value !== "") and prop is not "tracks" then update or set the value for the prop.

If the prop is "tracks" and value is non-blank, push the value onto the end of the tracks array.

If value is blank, delete that prop.*/
// Setup
var collection = {
    2548: {
      album: "Slippery When Wet",
      artist: "Bon Jovi",
      tracks: [
        "Let It Rock",
        "You Give Love a Bad Name"
      ]
    },
    2468: {
      album: "1999",
      artist: "Prince",
      tracks: [
        "1999",
        "Little Red Corvette"
      ]
    },
    1245: {
      artist: "Robert Palmer",
      tracks: [ ]
    },
    5439: {
      album: "ABBA Gold"
    }
};
// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection));

// Only change code below this line
function updateRecords(id, prop, value) {
  if(value!=="" && prop !=="tracks"){
    collection[id][prop] = value;
  }else if(prop =="tracks" && value!==""){
    collection[id][prop].push(value);
  }else if(value ===""){
    delete collection[id][prop];
  }
  return collection;
}

// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
updateRecords(2548, "tracks", "");
