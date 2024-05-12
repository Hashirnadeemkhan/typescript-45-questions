"use strict";
// Q40
function make_album(artist_name, album_title, numberOfTracks) {
    let musicAlbum = {
        artist_name,
        album_title,
    };
    if (numberOfTracks) {
        musicAlbum["Tracks"] = numberOfTracks;
    }
    return musicAlbum;
}
console.log(make_album("Taylor Swift", "Folklore"));
console.log(make_album("Kendrick Lamar", "DAMN"));
console.log(make_album("Ed Sheeran", "Perfect", 20));
// Q41
let magicianNames = [
    "Merlin the Magnificent",
    "Mystique the Enchanter",
    "Arcane the Illusionist",
];
function show_magicians(magicianNames) {
    magicianNames.forEach((name) => {
        console.log(name);
    });
}
show_magicians(magicianNames);
// 42
function make_great(magicianNames) {
    for (let i = 0; i < magicianNames.length; i++) {
        magicianNames[i] = magicianNames[i] + " the Great";
    }
}
make_great(magicianNames);
show_magicians(magicianNames);
